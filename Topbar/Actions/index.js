import { jsx as a, jsxs as f } from "react/jsx-runtime";
import { memo as h, useState as x, useRef as g, useCallback as v, useMemo as r } from "react";
import { useContextSelector as k } from "use-context-selector";
import w from "./context.js";
import C from "../../hooks/useBoolean.js";
import N from "../../hooks/useClickOutside.js";
import j from "../../Icons/ChevronLeft.js";
import { cn as l } from "../../utils/cn.js";
import D from "../Action/index.js";
import $ from "../context.js";
(function() {
  try {
    if (typeof document < "u") {
      var u = document.createElement("style");
      u.appendChild(document.createTextNode(".eduzz-ui-layout-topbar-actions .eduzz-ui-layout-topbar-actions-content,.eduzz-ui-layout-topbar-actions .eduzz-ui-layout-topbar-actions-content-icons{display:flex;align-items:center;justify-content:flex-end;gap:4px}.eduzz-ui-layout-topbar-actions .eduzz-ui-layout-topbar-actions-content-expand{display:none}@media (max-width: 575px){.eduzz-ui-layout-topbar-actions.--eduzz-ui-layout-enabled .eduzz-ui-layout-topbar-actions-content-expand{display:block}.eduzz-ui-layout-topbar-actions.--eduzz-ui-layout-enabled .eduzz-ui-layout-topbar-actions-content{height:calc(var(--eduzz-ui-layout-topbar-height-rem) - 3px);background-color:rgb(var(--eduzz-ui-layout-surface-default) / .8);backdrop-filter:blur(.5rem);-webkit-backdrop-filter:blur(.5rem);position:absolute;top:0;right:0;padding:0 8px}.eduzz-ui-layout-topbar-actions.--eduzz-ui-layout-enabled .eduzz-ui-layout-topbar-actions-content-icons{width:0;opacity:0;transition:.3s;pointer-events:none}.eduzz-ui-layout-topbar-actions.--eduzz-ui-layout-enabled.--eduzz-ui-layout-has-user .eduzz-ui-layout-topbar-actions-content{right:50px;padding:0}.eduzz-ui-layout-topbar-actions.--eduzz-ui-layout-enabled.--eduzz-ui-layout-expanded .eduzz-ui-layout-topbar-actions-content-icons{width:calc(100vw - 65px);opacity:1;pointer-events:all;margin-right:8px}.eduzz-ui-layout-topbar-actions.--eduzz-ui-layout-enabled.--eduzz-ui-layout-expanded.--eduzz-ui-layout-has-user .eduzz-ui-layout-topbar-actions-content-icons{width:calc(100vw - 110px)}}")), document.head.appendChild(u);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const E = ({ children: u }) => {
  const [e, n] = x([]), [i, c, , s] = C(!1), d = g(null);
  N(d, s, []);
  const z = k($, (t) => !!t.user), p = v((t) => (n((o) => [...o, t]), () => n((o) => o.filter((m) => m !== t))), []), y = r(() => e.reduce((t, o) => t + o.badgeCount, 0), [e]), b = r(() => e.some((t) => t.badgeDot), [e]);
  return /* @__PURE__ */ a(
    "div",
    {
      ref: d,
      className: l("eduzz-ui-layout-topbar-actions", {
        "--eduzz-ui-layout-enabled": e.length > 2,
        "--eduzz-ui-layout-has-user": z,
        "--eduzz-ui-layout-expanded": i
      }),
      children: /* @__PURE__ */ f("div", { className: "eduzz-ui-layout-topbar-actions-content", children: [
        /* @__PURE__ */ a(
          D,
          {
            className: "eduzz-ui-layout-topbar-actions-content-expand",
            badgeCount: i ? 0 : y,
            badgeDot: i ? !1 : b,
            icon: /* @__PURE__ */ a(j, { size: 19, className: l({ "rotate-180": i }) }),
            onClick: c
          }
        ),
        /* @__PURE__ */ a(w.Provider, { value: p, children: /* @__PURE__ */ a("div", { className: "eduzz-ui-layout-topbar-actions-content-icons", children: u }) })
      ] })
    }
  );
}, G = h(E);
export {
  G as default
};
//# sourceMappingURL=index.js.map
