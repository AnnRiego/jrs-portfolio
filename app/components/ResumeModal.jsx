"use client";

import { useEffect } from "react";
import { X, Download } from "lucide-react";

export default function ResumeModal({ isOpen, onClose }) {
  // Prevent background scrolling while the popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close popup using ESC key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative flex h-[92vh] w-full max-w-[850px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0b0f19] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/10 bg-[#0b0f19] px-4">
          <div>
            <p className="text-sm font-semibold text-white">
              Joan A. Riego-Salisipan
            </p>
            <p className="text-xs text-gray-400">Resume</p>
          </div>

          <div className="flex items-center gap-2">
            {/* Download */}
            <a
              href="/resume/Joan-Riego-Salisipan-Resume.pdf"
              download
              className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-300 transition hover:border-purple-400/40 hover:bg-white/5 hover:text-white"
            >
              <Download size={15} />
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Resume Viewer */}
        <div className="flex-1 overflow-auto bg-[#1a1d25] p-3 sm:p-5">
          <div className="mx-auto h-full w-full max-w-[794px]">
            <iframe
              src="/resume/Joan-Riego-Salisipan-Resume.pdf"
              title="Joan A. Riego-Salisipan Resume"
              className="h-full min-h-[1050px] w-full rounded-sm bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}