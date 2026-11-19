import Image from "next/image";
import notFound from "../../../../public/404-imagen.webp";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image src={notFound} alt="Not Found" className="w-200" />
    </div>
  );
}
