import Link from "next/link";

export default async function TransformationPage() {
  return (
    <section>
      <h2 className="text-white text-3xl text-center p-5">
        Encuentra las transformaciones conociendo el detalle de los{" "}
        <Link
          href={"/dashboard/characters"}
          className="text-amber-500/95 underline hover:text-amber-500/80"
        >
          Personajes.
        </Link>
      </h2>
    </section>
  );
}
