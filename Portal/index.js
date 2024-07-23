import { useState as d, useLayoutEffect as l } from "react";
import { createPortal as a } from "react-dom";
function i(r) {
  const t = document.createElement("div");
  return t.setAttribute("id", r), t.classList.add("eduzz-ui-layout-portal"), document.body.appendChild(t), t;
}
const m = ({ children: r, target: t }) => {
  const [n, u] = d(
    () => typeof t != "string" ? t : null
  );
  return l(() => {
    if (typeof t != "string")
      return;
    let e = document.getElementById(t), o = !1;
    return e || (o = !0, e = i(t)), u(e), () => {
      o && e != null && e.parentNode && e.parentNode.removeChild(e);
    };
  }, [t]), n ? a(r, n) : null;
};
export {
  m as default
};
//# sourceMappingURL=index.js.map
