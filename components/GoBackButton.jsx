"use client";

import { useRouter } from "next/navigation";

export function GoBackButton(children) {
  const router = useRouter();


  return (
    <>
      <button
        className="bg-prim p-4 rounded text-white mt-2" 
        onClick={() => {
          router.back();
        }}
      >
        {children}
      </button>
    </>
  );
}
