(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(".eduzz-ui-layout-topbar-logo{height:80%;width:auto;margin-inline:.5rem}.eduzz-ui-layout-topbar-logo>img{max-width:100%;max-height:100%;height:var(--eduzz-ui-layout-topbar-height-rem)}.eduzz-ui-layout-topbar-logo>.eduzz-ui-layout-topbar-logo-mobile{display:none}@media (max-width: 1199px){.eduzz-ui-layout-topbar-logo{width:2rem}.eduzz-ui-layout-topbar-logo .eduzz-ui-layout-topbar-logo-default{display:none}.eduzz-ui-layout-topbar-logo .eduzz-ui-layout-topbar-logo-mobile{display:block}}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { jsxs as d, jsx as e } from "react/jsx-runtime";

import { useContextSelector as c } from "use-context-selector";
import n from "../../context.js";
const u = ({ image: o, className: a }) => typeof o == "string" ? /* @__PURE__ */ e("img", { className: a, src: o }) : o, f = ({ logo: o, logoMobile: a, logoDarkMode: l, logoMobileDarkMode: m, wrapper: r }) => {
  const s = c(n, (z) => z.layout.mode);
  function i() {
    return s === "dark" ? {
      desktop: l ?? "//cdn.eduzzcdn.com/topbar/myeduzz-white.svg",
      mobile: m ?? "//cdn.eduzzcdn.com/topbar/myeduzz-mobile.svg"
    } : {
      desktop: o ?? "//cdn.eduzzcdn.com/topbar/myeduzz.svg",
      mobile: a ?? "//cdn.eduzzcdn.com/topbar/myeduzz-mobile.svg"
    };
  }
  const t = i();
  return r ? /* @__PURE__ */ d(r, { className: "eduzz-ui-layout-topbar-logo", children: [
    /* @__PURE__ */ e(u, { className: "eduzz-ui-layout-topbar-logo-default", image: t.desktop }),
    /* @__PURE__ */ e(u, { className: "eduzz-ui-layout-topbar-logo-mobile", image: t.mobile })
  ] }) : /* @__PURE__ */ d("div", { className: "eduzz-ui-layout-topbar-logo", children: [
    /* @__PURE__ */ e(u, { className: "eduzz-ui-layout-topbar-logo-default", image: t.desktop }),
    /* @__PURE__ */ e(u, { className: "eduzz-ui-layout-topbar-logo-mobile", image: t.mobile })
  ] });
};
export {
  f as default
};
//# sourceMappingURL=index.js.map
