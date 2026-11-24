import { useState, useEffect } from "react";

export const useModal = () => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const handleWidth = () => setModal(window.innerWidth < 768);
    window.addEventListener("resize", handleWidth);
    handleWidth();
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return { modal };
};
