import { useState as s, useCallback as c, useEffect as g } from "react";
import { getLocalStorageInstance as h } from "../utils/localStorage.js";
function b({ mode: a, acceptModeBySearchParam: i, persistMode: u, onModeChange: d }) {
  const e = h(), [o, r] = s(() => ((l) => l ? new URL(window.location.href).searchParams.get("eduzzMode") : void 0)(i) || (e == null ? void 0 : e.getItem("eduzz-ui-mode")) || a || "light"), m = c(() => (r((t) => t === "dark" ? "light" : "dark"), () => r(a || "light")), [a]), n = c(
    (t) => {
      document != null && document.body && (document.body.setAttribute("data-eduzz-theme", t), u && (e == null || e.setItem("eduzz-ui-mode", t)));
    },
    [e, u]
  );
  return g(() => {
    n(o), d && d(o);
  }, [n, o, d]), [o, m];
}
export {
  b as default
};
//# sourceMappingURL=useMode.js.map
