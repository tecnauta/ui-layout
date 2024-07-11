import { useState as M, useCallback as i, useEffect as g } from "react";
import { getLocalStorageInstance as z } from "../utils/localStorage.js";
function k({ mode: o, acceptModeBySearchParam: m, persistMode: a, onModeChange: u }) {
  const e = z(), [r, s] = M(() => {
    const d = ((h) => h ? new URL(window.location.href).searchParams.get("eduzzMode") : void 0)(m);
    if (d)
      return d;
    const c = e == null ? void 0 : e.getItem("eduzz-ui-mode");
    return c || o || "light";
  }), f = i(() => (s((t) => t === "dark" ? "light" : "dark"), () => s(o || "light")), [o]), n = i(
    (t) => {
      document != null && document.body && (document.body.setAttribute("data-eduzz-theme", t), a && (e == null || e.setItem("eduzz-ui-mode", t)));
    },
    [e, a]
  );
  return g(() => {
    n(r), u && u(r);
  }, [n, r, u]), [r, f];
}
export {
  k as default
};
//# sourceMappingURL=useMode.js.map
