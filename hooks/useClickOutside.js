import { useCallback as i, useEffect as m } from "react";
function v(n, s, d) {
  const r = i((e) => s(e), d ?? []);
  m(() => {
    const e = (n == null ? void 0 : n.current) ?? n;
    if (!e)
      return;
    let o = !1;
    const c = () => {
      o = !0, setTimeout(() => o = !1, 500);
    }, t = (u) => {
      if (!e || !e.contains || e.contains(u.target) || o) {
        c();
        return;
      }
      c(), r(u);
    };
    return document.addEventListener("mousedown", t), document.addEventListener("touchstart", t), document.addEventListener("click", t), () => {
      document.removeEventListener("mousedown", t), document.removeEventListener("touchstart", t), document.removeEventListener("click", t);
    };
  }, [n, r]);
}
export {
  v as default
};
//# sourceMappingURL=useClickOutside.js.map
