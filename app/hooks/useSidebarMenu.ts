import { useState } from "react";

export const useSidebarMenu = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);
  return { menu, handleMenu };
};
