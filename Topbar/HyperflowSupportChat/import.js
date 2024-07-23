import { useState as d, useEffect as c } from "react";
const s = (r) => {
  const [o, n] = d(r ? "loading" : "idle");
  return c(() => {
    if (!r) {
      n("idle");
      return;
    }
    let e = document.querySelector(`script[src="${r}"]`);
    const t = (a) => {
      n(a.type === "load" ? "ready" : "error");
    };
    return e || (e = document.createElement("script"), e.type = "application/javascript", e.src = r, e.async = !0, document.body.appendChild(e)), e.addEventListener("load", t), e.addEventListener("error", t), () => {
      e.removeEventListener("load", t), e.removeEventListener("error", t);
    };
  }, [r]), o;
};
export {
  s as default
};
//# sourceMappingURL=import.js.map
