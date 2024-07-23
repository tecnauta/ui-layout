import { jsx as o, jsxs as d } from "react/jsx-runtime";
import { memo as M, useEffect as p, useMemo as k } from "react";
import { useContextSelector as u } from "use-context-selector";
import z from "./Action/index.js";
import N from "./Actions/index.js";
import w from "./Apps/index.js";
import S from "./Belt/index.js";
import j from "./context.js";
import C from "./HyperflowSupportChat/index.js";
import $ from "./Logo/index.js";
import D from "./ModeSwitcher/index.js";
import U from "./Search/index.js";
import A from "./UnitySupportChat/index.js";
import E from "./User/index.js";
import T from "./UserMenu/index.js";
import q from "./UserMenu/Divider/index.js";
import H from "./UserMenu/Item/index.js";
import L from "./UserMenu/ItemGroup/index.js";
import i from "../context.js";
import P from "../Icons/Close.js";
import G from "../Icons/Menu.js";
import { cn as I } from "../utils/cn.js";
import O from "../utils/nestedComponent.js";
(function() {
  try {
    if (typeof document < "u") {
      var a = document.createElement("style");
      a.appendChild(document.createTextNode(".eduzz-ui-layout-topbar{height:var(--eduzz-ui-layout-topbar-height-rem)}.eduzz-ui-layout-topbar .eduzz-ui-layout-topbar-user-support{position:absolute;top:0;right:0;background-color:#fbcd02;padding:4px 8px;color:#fff;text-transform:uppercase;font-size:11px;border-bottom-left-radius:5px}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header{background-color:rgb(var(--eduzz-ui-layout-surface-default));color:rgb(var(--eduzz-ui-layout-content-caption));border-bottom:3px solid rgb(var(--eduzz-ui-layout-outline-disabled) / .3);box-sizing:border-box;position:fixed;padding:.5rem 1rem;top:0;left:0;right:0;height:var(--eduzz-ui-layout-topbar-height-rem);display:flex;justify-content:space-between;z-index:105;gap:1rem;transition:.15s ease-out,background-color .3s,border-bottom-color .3s}@media (max-width:575px){.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header{padding:.5rem .5rem .5rem .3rem}}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start{display:flex;align-items:center}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-mobile-menu{cursor:pointer}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-mobile-menu .eduzz-ui-layout-topbar-mobile-menu-icon{margin-top:-2px}@media (min-width:1200px){.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-mobile-menu{display:none}}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-tag{text-transform:capitalize;padding:4px 8px;letter-spacing:.5px;display:block;border-radius:3px;font-size:14px;text-transform:uppercase;margin-left:.5rem;line-height:14px}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-tag.eduzz-ui-layout-topbar-tag-pro{border:1px solid rgb(var(--eduzz-ui-layout-content-disabled))}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-tag.eduzz-ui-layout-topbar-tag-unity{border:1px solid rgb(var(--eduzz-ui-layout-content-title));background:rgb(var(--eduzz-ui-layout-content-title));color:rgb(var(--eduzz-ui-layout-surface-default))}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-tag.eduzz-ui-layout-topbar-tag-partner{background:rgb(var(--eduzz-ui-layout-outline-default))}@media (max-width:575px){.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-tag{display:none}}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-center{display:flex;flex:1;align-items:center;justify-content:center;max-width:400px}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-quick-access{display:flex;align-items:center;justify-content:center}")), document.head.appendChild(a);
    }
  } catch (r) {
    console.error("vite-plugin-css-injected-by-js", r);
  }
})();
const W = M(
  ({
    children: a,
    currentApplication: r,
    logo: b,
    logoMobile: n,
    logoDarkMode: s,
    logoMobileDarkMode: m,
    logoWrapper: c,
    user: e,
    disableApps: y,
    ...g
  }) => {
    const l = u(i, (t) => t.topbar.register), f = u(i, (t) => t.sidebar.toogleOpened), h = u(i, (t) => t.topbar.registerCenterPortal), x = u(i, (t) => t.sidebar.opened);
    p(() => {
      const t = l();
      return () => t();
    }, [l]), p(() => (document.body.classList.add("eduzz-ui-layout-topbar-applied"), () => {
      document.body.classList.remove("eduzz-ui-layout-topbar-applied");
    }), []);
    const v = k(() => ({ currentApplication: r, user: e }), [r, e]);
    return /* @__PURE__ */ o(j.Provider, { value: v, children: /* @__PURE__ */ o("div", { className: "eduzz-ui-layout-topbar", ...g, children: /* @__PURE__ */ d("header", { className: "eduzz-ui-layout-topbar-header", children: [
      (e == null ? void 0 : e.isSupport) && /* @__PURE__ */ o("div", { className: "eduzz-ui-layout-topbar-user-support", children: "Suporte" }),
      /* @__PURE__ */ d("div", { className: "eduzz-ui-layout-topbar-start", children: [
        /* @__PURE__ */ o(
          z,
          {
            className: "eduzz-ui-layout-topbar-mobile-menu",
            icon: x ? /* @__PURE__ */ o(P, { size: 18 }) : /* @__PURE__ */ o(G, { size: 22, className: "eduzz-ui-layout-topbar-mobile-menu-icon" }),
            onClick: f
          }
        ),
        !y && /* @__PURE__ */ o(w, {}),
        /* @__PURE__ */ o(
          $,
          {
            logo: b,
            logoMobile: n,
            logoDarkMode: s,
            logoMobileDarkMode: m,
            wrapper: c
          }
        ),
        !!(e != null && e.tag) && /* @__PURE__ */ o("p", { className: I("eduzz-ui-layout-topbar-tag", `eduzz-ui-layout-topbar-tag-${e.tag}`), children: e.tag })
      ] }),
      /* @__PURE__ */ o("div", { className: "eduzz-ui-layout-topbar-center", ref: h }),
      /* @__PURE__ */ d("div", { className: "eduzz-ui-layout-topbar-quick-access", children: [
        /* @__PURE__ */ o(S, {}),
        /* @__PURE__ */ o(N, { children: a }),
        /* @__PURE__ */ o(E, {})
      ] })
    ] }) }) });
  }
), so = O(W, {
  Action: z,
  UnitySupportChat: A,
  HyperflowSupportChat: C,
  UserMenu: T,
  UserMenuItem: H,
  UserMenuDivider: q,
  UserMenuGroup: L,
  Search: U,
  ModeSwitcher: D
});
export {
  so as default
};
//# sourceMappingURL=index.js.map
