import { useEffect, useState } from "react";

export const useView = () => {
  const [view, setView] = useState(false);

  useEffect(() => {
    const main = document.querySelector("main");
    const handleScroll = () => {
      main?.addEventListener("scroll", () => {
        setView(main.scrollTop > 900);
      });
    };
    handleScroll();
    return () => main?.addEventListener("scroll", handleScroll);
  }, []);

  return { view };
};
