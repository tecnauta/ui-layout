import { useState as a, useEffect as s } from "react";
const i = (t) => {
  const [o, n] = a(t ? "loading" : "idle");
  return s(() => {
    if (!t) {
      n("idle");
      return;
    }
    let e = document.querySelector(`script[src="${t}"]`);
    const r = (d) => {
      n(d.type === "load" ? "ready" : "error");
    };
    return e || (e = document.createElement("script"), e.type = "application/javascript", e.src = t, e.async = !0, document.body.appendChild(e)), e.addEventListener("load", r), e.addEventListener("error", r), () => {
      e.removeEventListener("load", r), e.removeEventListener("error", r);
    };
  }, [t]), o;
};
export {
  i as default
};
//# sourceMappingURL=import.js.map
