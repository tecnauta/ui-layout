import { useState as s, useEffect as c } from "react";
const i = (r) => {
  const [n, a] = s("loading");
  return c(() => {
    let e = document.querySelector(`script[src="${r}"]`);
    const t = (o) => {
      a(o.type === "load" ? "ready" : "error");
    };
    return e || (e = document.createElement("script"), e.type = "application/javascript", e.src = r, e.async = !0, document.body.appendChild(e)), e.addEventListener("load", t), e.addEventListener("error", t), () => {
      e.removeEventListener("load", t), e.removeEventListener("error", t);
    };
  }, [r]), n;
};
export {
  i as default
};
//# sourceMappingURL=import.js.map
