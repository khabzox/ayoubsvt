"use client";
// import UploeadFiles from "@/components/dashboard/Editor/UploeadFiles";
import { useEffect, useRef } from "react";
// import WebViewer from "@pdftron/webviewer"

export default function HomePage() {
  const viewer = useRef(null);

  useEffect(() => {
    import("@pdftron/webviewer").then(() => {
      WebViewer(
        {
          path: "/lib",
          enableOfficeEditing: true,
          //   initialDoc: "https://github.com/PDFTron/webviewer-nextjs-sample/blob/a8a422ff3a57483bd12360278bacf6d9e5f4ba6e/public/files/PDFTRON_about.pdf",
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
        // you can now call WebViewer APIs here...
      });
    });
  }, []);

  return (
    <div className="MyComponent">
      {/* <UploeadFiles /> */}
      <div
        className="webviewer"
        ref={viewer}
        style={{ height: "100vh" }}
      ></div>
    </div>
  );
}
