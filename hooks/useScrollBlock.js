import { useRef as l } from "react";
const d = () => {
  const o = l(!1);
  return { disableScroll: () => {
    if (typeof document > "u")
      return;
    const t = document.documentElement, { body: e } = document;
    if (!e || !e.style || o.current)
      return;
    const n = window.innerWidth - t.clientWidth, r = parseInt(window.getComputedStyle(e).getPropertyValue("padding-right")) || 0;
    t.style.position = "relative", e.style.position = "relative", t.style.overflow = "hidden", e.style.overflow = "hidden", e.style.paddingRight = `${r + n}px`, o.current = !0;
  }, enableScroll: () => {
    if (typeof document > "u")
      return;
    const t = document.documentElement, { body: e } = document;
    !e || !e.style || !o.current || (t.style.position = "", t.style.overflow = "", e.style.position = "", e.style.overflow = "", e.style.paddingRight = "", o.current = !1);
  } };
};
export {
  d as default
};
//# sourceMappingURL=useScrollBlock.js.map
