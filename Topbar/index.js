import { jsx as t, jsxs as d } from "react/jsx-runtime";
import { memo as M, useEffect as p, useMemo as k } from "react";
import { useContextSelector as r } from "use-context-selector";
import z from "./Action/index.js";
import w from "./Actions/index.js";
import N from "./Apps/index.js";
import C from "./Belt/index.js";
import j from "./context.js";
import S from "./HyperflowSupportChat/index.js";
import $ from "./Logo/index.js";
import D from "./ModeSwitcher/index.js";
import U from "./Search/index.js";
import A from "./UnitySupportChat/index.js";
import q from "./User/index.js";
import E from "./UserMenu/index.js";
import G from "./UserMenu/Divider/index.js";
import L from "./UserMenu/Item/index.js";
import O from "./UserMenu/ItemGroup/index.js";
import i from "../context.js";
import P from "../Icons/Close.js";
import H from "../Icons/Menu.js";
import { cn as I } from "../utils/cn.js";
import R from "../utils/nestedComponent.js";
(function() {
  try {
    if (typeof document < "u") {
      var a = document.createElement("style");
      a.appendChild(document.createTextNode(".eduzz-ui-layout-topbar{height:var(--eduzz-ui-layout-topbar-height-rem)}.eduzz-ui-layout-topbar .eduzz-ui-layout-topbar-user-support{position:absolute;top:0;right:0;background-color:#fbcd02;padding:4px 8px;color:#fff;text-transform:uppercase;font-size:11px;border-bottom-left-radius:5px}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header{background-color:rgb(var(--eduzz-ui-layout-surface-default));color:rgb(var(--eduzz-ui-layout-content-caption));border-bottom:3px solid rgb(var(--eduzz-ui-layout-outline-disabled) / .3);box-sizing:border-box;position:fixed;padding:.5rem 1rem;top:0;left:0;right:0;height:var(--eduzz-ui-layout-topbar-height-rem);display:flex;justify-content:space-between;z-index:105;gap:1rem;transition:.15s ease-out,background-color .3s,border-bottom-color .3s}@media (max-width:575px){.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header{padding:.5rem .5rem .5rem .3rem}}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start{display:flex;align-items:center}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-mobile-menu{cursor:pointer}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-mobile-menu .eduzz-ui-layout-topbar-mobile-menu-icon{margin-top:-2px}@media (min-width:1200px){.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-mobile-menu{display:none}}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-tag{text-transform:capitalize;padding:4px 8px;letter-spacing:.5px;display:block;border-radius:3px;font-size:14px;text-transform:uppercase;margin-left:.5rem;line-height:14px}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-tag.eduzz-ui-layout-topbar-tag-pro{border:1px solid rgb(var(--eduzz-ui-layout-content-disabled))}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-tag.eduzz-ui-layout-topbar-tag-unity{border:1px solid rgb(var(--eduzz-ui-layout-content-title));background:rgb(var(--eduzz-ui-layout-content-title));color:rgb(var(--eduzz-ui-layout-surface-default))}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-tag.eduzz-ui-layout-topbar-tag-partner{background:rgb(var(--eduzz-ui-layout-outline-default))}@media (max-width:575px){.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-tag{display:none}}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-center{display:flex;flex:1;align-items:center;justify-content:center;max-width:400px}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-quick-access{display:flex;align-items:center;justify-content:center}")), document.head.appendChild(a);
    }
  } catch (u) {
    console.error("vite-plugin-css-injected-by-js", u);
  }
})();
const T = M(
  ({
    children: a,
    currentApplication: u,
    logo: n,
    logoMobile: b,
    logoDarkMode: s,
    logoMobileDarkMode: m,
    logoWrapper: c,
    user: e,
    disableApps: y,
    ...f
  }) => {
    const l = r(i, (o) => o.topbar.register), g = r(i, (o) => o.sidebar.toogleOpened), h = r(i, (o) => o.topbar.registerCenterPortal), x = r(i, (o) => o.sidebar.opened);
    p(() => {
      const o = l();
      return () => o();
    }, [l]), p(() => (document.body.classList.add("eduzz-ui-layout-topbar-applied"), () => {
      document.body.classList.remove("eduzz-ui-layout-topbar-applied");
    }), []);
    const v = k(() => ({ currentApplication: u, user: e }), [u, e]);
    return /* @__PURE__ */ t(j.Provider, { value: v, children: /* @__PURE__ */ t("div", { className: "eduzz-ui-layout-topbar", ...f, children: /* @__PURE__ */ d("header", { className: "eduzz-ui-layout-topbar-header", children: [
      (e == null ? void 0 : e.isSupport) && /* @__PURE__ */ t("div", { className: "eduzz-ui-layout-topbar-user-support", children: "Suporte" }),
      /* @__PURE__ */ d("div", { className: "eduzz-ui-layout-topbar-start", children: [
        /* @__PURE__ */ t(
          z,
          {
            className: "eduzz-ui-layout-topbar-mobile-menu",
            icon: x ? /* @__PURE__ */ t(P, { size: 18 }) : /* @__PURE__ */ t(H, { size: 22, className: "eduzz-ui-layout-topbar-mobile-menu-icon" }),
            onClick: g
          }
        ),
        !y && /* @__PURE__ */ t(N, {}),
        /* @__PURE__ */ t(
          $,
          {
            logo: n,
            logoMobile: b,
            logoDarkMode: s,
            logoMobileDarkMode: m,
            wrapper: c
          }
        ),
        !!(e != null && e.tag) && /* @__PURE__ */ t("p", { className: I("eduzz-ui-layout-topbar-tag", `eduzz-ui-layout-topbar-tag-${e.tag}`), children: e.tag })
      ] }),
      /* @__PURE__ */ t("div", { className: "eduzz-ui-layout-topbar-center", ref: h }),
      /* @__PURE__ */ d("div", { className: "eduzz-ui-layout-topbar-quick-access", children: [
        /* @__PURE__ */ t(C, {}),
        /* @__PURE__ */ t(w, { children: a }),
        /* @__PURE__ */ t(q, {})
      ] })
    ] }) }) });
  }
), bt = R(T, {
  Action: z,
  UnitySupportChat: A,
  HyperflowSupportChat: S,
  UserMenu: E,
  UserMenuItem: L,
  UserMenuDivider: G,
  UserMenuGroup: O,
  Search: U,
  ModeSwitcher: D
});
export {
  bt as default
};
//# sourceMappingURL=index.js.map
