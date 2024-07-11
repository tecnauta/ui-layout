import { useCallback as d, useEffect as a } from "react";
function m(n, r, i) {
  const s = d((t) => r(t), i ?? []);
  a(() => {
    const t = (n == null ? void 0 : n.current) ?? n;
    if (!t)
      return;
    let o = !1;
    const c = () => {
      o = !0, setTimeout(() => o = !1, 500);
    }, e = (u) => {
      if (!t || !t.contains || t.contains(u.target) || o) {
        c();
        return;
      }
      c(), s(u);
    };
    return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), document.addEventListener("click", e), () => {
      document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e), document.removeEventListener("click", e);
    };
  }, [n, s]);
}
export {
  m as default
};
//# sourceMappingURL=useClickOutside.js.map
