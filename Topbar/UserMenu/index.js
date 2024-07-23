import { jsx as n } from "react/jsx-runtime";
import { useEffect as l } from "react";
import { useContextSelector as o } from "use-context-selector";
import u from "../../context.js";
import c from "../../Portal/index.js";
import { cn as m } from "../../utils/cn.js";
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".eduzz-ui-layout-topbar-user-menu{display:flex;flex-direction:column;width:-moz-fit-content;width:fit-content;min-width:var(--eduzz-ui-layout-topbar-menu-min-width-rem);max-height:calc(95vh - var(--eduzz-ui-layout-topbar-height-rem));overflow-y:auto;overflow-x:hidden;position:fixed;top:var(--eduzz-ui-layout-topbar-height-rem);right:.5rem;box-shadow:0 8px 24px #00000029;padding:.5rem;box-sizing:border-box;visibility:hidden;opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;background:rgb(var(--eduzz-ui-layout-surface-default));border-radius:0 0 .5rem .5rem}.eduzz-ui-layout-topbar-user-menu::-webkit-scrollbar{width:3px;background:transparent}.eduzz-ui-layout-topbar-user-menu::-webkit-scrollbar-thumb{background:transparent;border-radius:4px}.eduzz-ui-layout-topbar-user-menu:hover::-webkit-scrollbar-thumb{background:rgb(var(--eduzz-ui-layout-outline-default))}.eduzz-ui-layout-topbar-user-menu.--opened{visibility:visible;opacity:1;transform:scale(1);-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}")), document.head.appendChild(t);
    }
  } catch (r) {
    console.error("vite-plugin-css-injected-by-js", r);
  }
})();
const x = ({ children: t, className: r, ...s }) => {
  const d = o(u, (e) => e.userMenu.opened), i = o(u, (e) => e.userMenu.register), a = o(u, (e) => e.userMenu.containerPortal);
  return l(() => {
    const e = i();
    return () => e();
  }, [i]), a ? /* @__PURE__ */ n(c, { target: a, children: /* @__PURE__ */ n("div", { ...s, className: m(r, "eduzz-ui-layout-topbar-user-menu", d && "--opened"), children: t }) }) : null;
};
export {
  x as default
};
//# sourceMappingURL=index.js.map
