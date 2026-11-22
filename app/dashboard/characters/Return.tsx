"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ReturnPage() {
  return (
    <Link href={"/dashboard/characters"}>
      <div className="w-10 cursor-pointer rounded-full bg-slate-700 p-1 hover:scale-[1.1]">
        <ArrowLeft size={30} />
      </div>
    </Link>
  );
}
