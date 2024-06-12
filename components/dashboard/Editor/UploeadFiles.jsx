"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

export default function UploeadFiles() {
  return (
    <>
      <div class="flex justify-center items-center h-screen">
        <div className="grid w-full max-w-sm items-center gap-4">
          <div className="flex items-center space-x-4">
            <Input lang="fr" id="file-upload" type="file" className="flex-1 designBox" />
          </div>
        </div>
      </div>
    </>
  );
}
