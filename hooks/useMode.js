import { useState as l, useCallback as c, useEffect as f } from "react";
import { getLocalStorageInstance as g } from "../utils/localStorage.js";
function b({ mode: d, acceptModeBySearchParam: s, persistMode: r, onModeChange: n }) {
  const t = g(), [o, a] = l(() => {
    const e = ((m) => m ? new URL(window.location.href).searchParams.get("eduzzMode") : void 0)(s);
    return e || (t == null ? void 0 : t.getItem("eduzz-ui-mode")) || d || "light";
  }), i = c(() => (a((e) => e === "dark" ? "light" : "dark"), () => a(d || "light")), [d]), u = c(
    (e) => {
      document != null && document.body && (document.body.setAttribute("data-eduzz-theme", e), r && (t == null || t.setItem("eduzz-ui-mode", e)));
    },
    [t, r]
  );
  return f(() => {
    u(o), n && n(o);
  }, [u, o, n]), [o, i];
}
export {
  b as default
};
//# sourceMappingURL=useMode.js.map
