"use client";
// @ts-ignore
import { saveAs } from "file-saver";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdCloudDownload } from "react-icons/md";

function DownloadResumeButton() {
  const [pdfLink, setPdfLink] = useState("");
  const params = useParams();

  useEffect(() => {
    setPdfLink(`${location.origin}/api/resume/${params.lang ?? "en"}/pdf`);
  }, [params]);

  const handleDownload = () => {
    if (!pdfLink) return;
    saveAs(
      pdfLink,
      "example.pdf"
    );
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 bg-black text-white px-3 py-3 lg:px-6 lg:py-4 rounded-lg hover:shadow-lg transition duration-300"
    >
      <span className="text-sm whitespace-nowrap">Download my resume</span>
      <MdCloudDownload className="text-white w-5 h-5" />
    </button>
  );
}

export default DownloadResumeButton;
