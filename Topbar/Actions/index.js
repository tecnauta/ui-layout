(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".eduzz-ui-layout-topbar-actions .eduzz-ui-layout-topbar-actions-content,.eduzz-ui-layout-topbar-actions .eduzz-ui-layout-topbar-actions-content-icons{display:flex;align-items:center;justify-content:flex-end;gap:4px}.eduzz-ui-layout-topbar-actions .eduzz-ui-layout-topbar-actions-content-expand{display:none}@media (max-width: 575px){.eduzz-ui-layout-topbar-actions.--eduzz-ui-layout-enabled .eduzz-ui-layout-topbar-actions-content-expand{display:block}.eduzz-ui-layout-topbar-actions.--eduzz-ui-layout-enabled .eduzz-ui-layout-topbar-actions-content{height:calc(var(--eduzz-ui-layout-topbar-height-rem) - 3px);background-color:rgb(var(--eduzz-ui-layout-surface-default) / .8);backdrop-filter:blur(.5rem);-webkit-backdrop-filter:blur(.5rem);position:absolute;top:0;right:0;padding:0 8px}.eduzz-ui-layout-topbar-actions.--eduzz-ui-layout-enabled .eduzz-ui-layout-topbar-actions-content-icons{width:0;opacity:0;transition:.3s;pointer-events:none}.eduzz-ui-layout-topbar-actions.--eduzz-ui-layout-enabled.--eduzz-ui-layout-has-user .eduzz-ui-layout-topbar-actions-content{right:50px;padding:0}.eduzz-ui-layout-topbar-actions.--eduzz-ui-layout-enabled.--eduzz-ui-layout-expanded .eduzz-ui-layout-topbar-actions-content-icons{width:calc(100vw - 65px);opacity:1;pointer-events:all;margin-right:8px}.eduzz-ui-layout-topbar-actions.--eduzz-ui-layout-enabled.--eduzz-ui-layout-expanded.--eduzz-ui-layout-has-user .eduzz-ui-layout-topbar-actions-content-icons{width:calc(100vw - 110px)}}")),document.head.appendChild(t)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { jsx as s, jsxs as x } from "react/jsx-runtime";
import { memo as g, useState as C, useRef as h, useCallback as y, useMemo as i } from "react";
import { useContextSelector as v } from "use-context-selector";
import A from "./context.js";
import N from "../../hooks/useBoolean.js";
import k from "../../hooks/useClickOutside.js";
import D from "../../Icons/ChevronLeft.js";
import { cn as c } from "../../utils/cn.js";
import j from "../Action/index.js";
import E from "../context.js";

const S = ({ children: u }) => {
  const [e, n] = C([]), [a, d, , l] = N(!1), r = h(null);
  k(r, l, []);
  const m = v(E, (o) => !!o.user), p = y((o) => (n((t) => [...t, o]), () => n((t) => t.filter((b) => b !== o))), []), f = i(() => e.reduce((o, t) => o + t.badgeCount, 0), [e]), z = i(() => e.some((o) => o.badgeDot), [e]);
  return /* @__PURE__ */ s(
    "div",
    {
      ref: r,
      className: c("eduzz-ui-layout-topbar-actions", {
        "--eduzz-ui-layout-enabled": e.length > 2,
        "--eduzz-ui-layout-has-user": m,
        "--eduzz-ui-layout-expanded": a
      }),
      children: /* @__PURE__ */ x("div", { className: "eduzz-ui-layout-topbar-actions-content", children: [
        /* @__PURE__ */ s(
          j,
          {
            className: "eduzz-ui-layout-topbar-actions-content-expand",
            badgeCount: a ? 0 : f,
            badgeDot: a ? !1 : z,
            icon: /* @__PURE__ */ s(D, { size: 19, className: c({ "rotate-180": a }) }),
            onClick: d
          }
        ),
        /* @__PURE__ */ s(A.Provider, { value: p, children: /* @__PURE__ */ s("div", { className: "eduzz-ui-layout-topbar-actions-content-icons", children: u }) })
      ] })
    }
  );
}, w = g(S);
export {
  w as default
};
//# sourceMappingURL=index.js.map
