import { useEffect as r } from "react";
import { useContextSelector as n } from "use-context-selector";
import c from "./chat.js";
import u from "../context.js";
(function() {
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode("#lhc_status_widget_v2{left:auto!important;bottom:0!important;z-index:102!important}")), document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
const s = ({ token: e }) => {
  const t = n(u, (o) => o.user);
  return r(() => {
    if (!(t != null && t.isClubeBlack))
      return;
    const o = c(t, e);
    return () => o();
  }, [t, e]), null;
};
export {
  s as default
};
//# sourceMappingURL=index.js.map
