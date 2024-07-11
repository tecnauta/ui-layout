import { useState as s, useEffect as c } from "react";
const i = (t) => {
  const [a, n] = s(t ? "loading" : "idle");
  return c(() => {
    if (!t) {
      n("idle");
      return;
    }
    let e = document.querySelector(`script[src="${t}"]`);
    const r = (o) => {
      n(o.type === "load" ? "ready" : "error");
    };
    return e || (e = document.createElement("script"), e.type = "application/javascript", e.src = t, e.async = !0, document.body.appendChild(e)), e.addEventListener("load", r), e.addEventListener("error", r), () => {
      e.removeEventListener("load", r), e.removeEventListener("error", r);
    };
  }, [t]), a;
};
export {
  i as default
};
//# sourceMappingURL=import.js.map
