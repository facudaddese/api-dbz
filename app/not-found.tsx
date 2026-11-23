import Image from "next/image";
import notFound from "../public/404-imagen.webp";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-800">
      <Image src={notFound} alt="Not Found" className="w-200" loading="eager" />
      <Link
        href={"/dashboard/characters"}
        className="bg-slate-700 text-white py-1 px-3 rounded-2xl cursor-pointer hover:bg-amber-500/95 hover:text-black font-semibold"
      >
        Volver a personajes
      </Link>
    </div>
  );
}
