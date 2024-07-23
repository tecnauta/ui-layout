import { jsxs as i, jsx as t } from "react/jsx-runtime";
import { useContextSelector as c } from "use-context-selector";
import p from "../../context.js";
(function() {
  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.appendChild(document.createTextNode(".eduzz-ui-layout-topbar-logo{height:80%;width:auto;margin-inline:.5rem}.eduzz-ui-layout-topbar-logo>img{max-width:100%;max-height:100%;height:var(--eduzz-ui-layout-topbar-height-rem)}.eduzz-ui-layout-topbar-logo>.eduzz-ui-layout-topbar-logo-mobile{display:none}@media (max-width: 1199px){.eduzz-ui-layout-topbar-logo{width:2rem}.eduzz-ui-layout-topbar-logo .eduzz-ui-layout-topbar-logo-default{display:none}.eduzz-ui-layout-topbar-logo .eduzz-ui-layout-topbar-logo-mobile{display:block}}")), document.head.appendChild(o);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const l = ({ image: o, className: e }) => typeof o == "string" ? /* @__PURE__ */ t("img", { className: e, src: o }) : o, y = ({ logo: o, logoMobile: e, logoDarkMode: d, logoMobileDarkMode: m, wrapper: u }) => {
  const r = c(p, (s) => s.layout.mode);
  function z() {
    return r === "dark" ? {
      desktop: d ?? "//cdn.eduzzcdn.com/topbar/myeduzz-white.svg",
      mobile: m ?? "//cdn.eduzzcdn.com/topbar/myeduzz-mobile.svg"
    } : {
      desktop: o ?? "//cdn.eduzzcdn.com/topbar/myeduzz.svg",
      mobile: e ?? "//cdn.eduzzcdn.com/topbar/myeduzz-mobile.svg"
    };
  }
  const a = z();
  return u ? /* @__PURE__ */ i(u, { className: "eduzz-ui-layout-topbar-logo", children: [
    /* @__PURE__ */ t(l, { className: "eduzz-ui-layout-topbar-logo-default", image: a.desktop }),
    /* @__PURE__ */ t(l, { className: "eduzz-ui-layout-topbar-logo-mobile", image: a.mobile })
  ] }) : /* @__PURE__ */ i("div", { className: "eduzz-ui-layout-topbar-logo", children: [
    /* @__PURE__ */ t(l, { className: "eduzz-ui-layout-topbar-logo-default", image: a.desktop }),
    /* @__PURE__ */ t(l, { className: "eduzz-ui-layout-topbar-logo-mobile", image: a.mobile })
  ] });
};
export {
  y as default
};
//# sourceMappingURL=index.js.map
