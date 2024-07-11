import { useState as l, useLayoutEffect as d } from "react";
import { createPortal as a } from "react-dom";
function i(r) {
  const e = document.createElement("div");
  return e.setAttribute("id", r), e.classList.add("eduzz-ui-layout-portal"), document.body.appendChild(e), e;
}
const c = ({ children: r, target: e }) => {
  const [n, u] = l(
    () => typeof e != "string" ? e : null
  );
  return d(() => {
    if (typeof e != "string")
      return;
    let t = document.getElementById(e), o = !1;
    return t || (o = !0, t = i(e)), u(t), () => {
      o && (t != null && t.parentNode) && t.parentNode.removeChild(t);
    };
  }, [e]), n ? a(r, n) : null;
};
export {
  c as default
};
//# sourceMappingURL=index.js.map
