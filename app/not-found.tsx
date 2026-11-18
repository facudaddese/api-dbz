import Image from "next/image";
import notFound from "../public/404-imagen.webp";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src={notFound} alt="Not Found" className="w-200" />
      <Link href={"/dashboard/characters"} className="border border-amber-600 hover:bg-yellow-400/95 rounded-2xl p-2 font-bold">Volver a personajes</Link>
    </div>
  );
}
