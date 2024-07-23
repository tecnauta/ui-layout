import { jsx as l, jsxs as i } from "react/jsx-runtime";
import { memo as z, useState as b, useEffect as c } from "react";
import { useContextSelector as n } from "use-context-selector";
import p from "../../Icons/Belt.js";
import { cn as y } from "../../utils/cn.js";
import g from "../context.js";
(function() {
  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.appendChild(document.createTextNode(".eduzz-ui-layout-topbar-belt{color:#fff;display:flex;align-items:center;padding:8px 16px;border-radius:0 16px;margin-right:1.5rem;height:2rem;box-sizing:border-box}@media (max-width: 991px){.eduzz-ui-layout-topbar-belt{display:none}}@media (max-width: 1199px){.eduzz-ui-layout-topbar-belt{padding:8px 10px;border-top-left-radius:0;border-bottom-right-radius:0}.eduzz-ui-layout-topbar-belt .eduzz-ui-layout-topbar-belt-text{display:none}}.eduzz-ui-layout-topbar-belt.none{display:none}.eduzz-ui-layout-topbar-belt.eduzz-ui-layout-topbar-belt-color-white{background-color:var(--eduzz-ui-layout-belt-color-white);color:var(--eduzz-ui-layout-belt-color-white)}.eduzz-ui-layout-topbar-belt.eduzz-ui-layout-topbar-belt-color-white .eduzz-ui-layout-topbar-belt-badge{color:var(--eduzz-ui-layout-belt-foreground-white)}.eduzz-ui-layout-topbar-belt.eduzz-ui-layout-topbar-belt-color-red{background-color:var(--eduzz-ui-layout-belt-color-red);color:var(--eduzz-ui-layout-belt-color-red)}.eduzz-ui-layout-topbar-belt.eduzz-ui-layout-topbar-belt-color-red .eduzz-ui-layout-topbar-belt-badge{color:var(--eduzz-ui-layout-belt-foreground-red)}.eduzz-ui-layout-topbar-belt.eduzz-ui-layout-topbar-belt-color-orange{background-color:var(--eduzz-ui-layout-belt-color-orange);color:var(--eduzz-ui-layout-belt-color-orange)}.eduzz-ui-layout-topbar-belt.eduzz-ui-layout-topbar-belt-color-orange .eduzz-ui-layout-topbar-belt-badge{color:var(--eduzz-ui-layout-belt-foreground-orange)}.eduzz-ui-layout-topbar-belt.eduzz-ui-layout-topbar-belt-color-green{background-color:var(--eduzz-ui-layout-belt-color-green);color:var(--eduzz-ui-layout-belt-color-green)}.eduzz-ui-layout-topbar-belt.eduzz-ui-layout-topbar-belt-color-green .eduzz-ui-layout-topbar-belt-badge{color:var(--eduzz-ui-layout-belt-foreground-green)}.eduzz-ui-layout-topbar-belt.eduzz-ui-layout-topbar-belt-color-black{background-color:var(--eduzz-ui-layout-belt-color-black);color:var(--eduzz-ui-layout-belt-color-black)}.eduzz-ui-layout-topbar-belt.eduzz-ui-layout-topbar-belt-color-black .eduzz-ui-layout-topbar-belt-badge{color:var(--eduzz-ui-layout-belt-foreground-black)}.eduzz-ui-layout-topbar-belt.eduzz-ui-layout-topbar-belt-color-golden{background-color:var(--eduzz-ui-layout-belt-color-golden);color:var(--eduzz-ui-layout-belt-color-golden)}.eduzz-ui-layout-topbar-belt.eduzz-ui-layout-topbar-belt-color-golden .eduzz-ui-layout-topbar-belt-badge{color:var(--eduzz-ui-layout-belt-foreground-golden)}.eduzz-ui-layout-topbar-belt .eduzz-ui-layout-topbar-belt-badge{display:flex;align-items:center}.eduzz-ui-layout-topbar-belt .eduzz-ui-layout-topbar-belt-badge>.eduzz-ui-layout-topbar-belt-text{color:inherit;white-space:nowrap;text-transform:uppercase;font-style:italic;font-size:14px;margin-left:.25rem}.eduzz-ui-layout-topbar-belt .eduzz-ui-layout-topbar-belt-icon{min-width:2rem;display:flex;align-items:center}")), document.head.appendChild(o);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
const s = ["white", "red", "orange", "green", "black", "golden"], w = z(() => {
  const o = n(g, (e) => {
    var u;
    return (u = e.user) == null ? void 0 : u.belt;
  }), [t, r] = b(""), [d, a] = b("");
  return c(() => {
    if (!o) {
      r(""), a("");
      return;
    }
    const e = o.toString().toLowerCase().split(" ")[0], u = s.includes(e) ? e : e === "sensei" ? "black" : "white";
    r(o), a(u);
  }, [o]), t ? /* @__PURE__ */ l("div", { className: y("eduzz-ui-layout-topbar-belt", `eduzz-ui-layout-topbar-belt-color-${d}`), children: /* @__PURE__ */ i("div", { className: "eduzz-ui-layout-topbar-belt-badge", children: [
    /* @__PURE__ */ l(p, { size: 25, className: "eduzz-ui-layout-topbar-belt-icon" }),
    /* @__PURE__ */ l("p", { className: "eduzz-ui-layout-topbar-belt-text", children: t })
  ] }) }) : null;
});
export {
  w as default
};
//# sourceMappingURL=index.js.map
