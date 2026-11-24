import type { ReactNode } from "react";
import Image from "next/image";
import { BackButton } from "../back-button/BackButton";

interface Stat {
  label: string;
  value: string;
}

interface ContentProps {
  backHref: string;
  name: string;
  image: string;
  subtitle?: string | null;
  description?: string;
  stats: Stat[];
  favorite?: ReactNode;
  action?: ReactNode;
}

const styleValue = "text-yellow-400/95";
const styleLabel = "text-slate-400";
const styleDivsResponsive = "lg:block flex flex-col items-center";

export const Content = ({
  backHref,
  name,
  image,
  subtitle,
  description,
  stats,
  favorite,
  action,
}: ContentProps) => {
  return (
    <section className="p-5 h-screen">
      <BackButton href={backHref} />

      <div className="grid justify-items-center place-content-center my-auto lg:h-[95%] justify-center gap-5 lg:gap-20 character-grid-responsive lg:character-grid">
        {/* Imagen */}
        <div className="[grid-area:character] justify-items-center">
          <Image
            src={image}
            alt={name}
            width={450}
            height={550}
            loading="eager"
            className="object-contain max-h-155"
          />
        </div>

        {/* Descripcion */}
        <div className="[grid-area:description] flex gap-5 justify-center flex-col py-5">
          <div className={styleDivsResponsive}>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-1">{name}</h1>
              {favorite}
            </div>
            {subtitle && <span className={styleValue}>{subtitle}</span>}
          </div>

          {description && (
            <p className="text-slate-300 max-w-170 lg:text-start text-center">
              {description}
            </p>
          )}

          <div
            className={`grid gap-4 pb-5 ${
              stats.length > 1 ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            {stats.map(({ label, value }) => (
              <div key={label} className={styleDivsResponsive}>
                <span className={styleLabel}>{label}</span>
                <p className={styleValue}>{value}</p>
              </div>
            ))}
          </div>

          {action && (
            <div className="lg:block flex justify-center">{action}</div>
          )}
        </div>
      </div>
    </section>
  );
};
