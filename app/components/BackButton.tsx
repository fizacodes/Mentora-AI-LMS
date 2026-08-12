
"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-[#38BDF8]"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-[#0B2340] transition-all duration-200 group-hover:border-[#38BDF8]/40 group-hover:bg-[#0F6CBD]/10">
        <ArrowLeft
          size={16}
          strokeWidth={1.8}
          className="transition-transform duration-200 group-hover:-translate-x-0.5"
        />
      </span>

      <span>Back</span>
    </button>
  );
}

