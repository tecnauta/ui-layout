(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".eduzz-ui-layout-topbar-user-menu{display:flex;flex-direction:column;width:-moz-fit-content;width:fit-content;min-width:var(--eduzz-ui-layout-topbar-menu-min-width-rem);max-height:calc(95vh - var(--eduzz-ui-layout-topbar-height-rem));overflow-y:auto;overflow-x:hidden;position:fixed;top:var(--eduzz-ui-layout-topbar-height-rem);right:.5rem;box-shadow:0 8px 24px #00000029;padding:.5rem;box-sizing:border-box;visibility:hidden;opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;background:rgb(var(--eduzz-ui-layout-surface-default));border-radius:0 0 .5rem .5rem}.eduzz-ui-layout-topbar-user-menu::-webkit-scrollbar{width:3px;background:transparent}.eduzz-ui-layout-topbar-user-menu::-webkit-scrollbar-thumb{background:transparent;border-radius:4px}.eduzz-ui-layout-topbar-user-menu:hover::-webkit-scrollbar-thumb{background:rgb(var(--eduzz-ui-layout-outline-default))}.eduzz-ui-layout-topbar-user-menu.--opened{visibility:visible;opacity:1;transform:scale(1);-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { jsx as u } from "react/jsx-runtime";
import { useEffect as c } from "react";
import { useContextSelector as r } from "use-context-selector";
import t from "../../context.js";
import p from "../../Portal/index.js";
import { cn as f } from "../../utils/cn.js";

const C = ({ children: s, className: i, ...m }) => {
  const a = r(t, (e) => e.userMenu.opened), o = r(t, (e) => e.userMenu.register), n = r(t, (e) => e.userMenu.containerPortal);
  return c(() => {
    const e = o();
    return () => e();
  }, [o]), n ? /* @__PURE__ */ u(p, { target: n, children: /* @__PURE__ */ u("div", { ...m, className: f(i, "eduzz-ui-layout-topbar-user-menu", a && "--opened"), children: s }) }) : null;
};
export {
  C as default
};
//# sourceMappingURL=index.js.map
