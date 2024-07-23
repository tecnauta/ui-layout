(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode("#lhc_status_widget_v2{left:auto!important;bottom:0!important;z-index:102!important}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { useEffect as e } from "react";
import { useContextSelector as n } from "use-context-selector";
import p from "./chat.js";
import i from "../context.js";

const c = ({ token: o }) => {
  const t = n(i, (r) => r.user);
  return e(() => {
    if (!(t != null && t.isClubeBlack)) return;
    const r = p(t, o);
    return () => r();
  }, [t, o]), null;
};
export {
  c as default
};
//# sourceMappingURL=index.js.map
