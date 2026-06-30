import React from "react";

export default function DownloadReport() {
  const handleDownload = () => window.print();

  return (
    <>
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-2 rounded-xl bg-stone-800 text-white px-5 py-3 text-sm font-medium hover:bg-stone-700 transition-colors print:hidden"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Download Report
      </button>
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #printable-report, #printable-report * { visibility: visible; }
          #printable-report { position: absolute; left: 0; top: 0; width: 100%; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </>
  );
}