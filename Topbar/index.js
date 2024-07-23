(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".eduzz-ui-layout-topbar{height:var(--eduzz-ui-layout-topbar-height-rem)}.eduzz-ui-layout-topbar .eduzz-ui-layout-topbar-user-support{position:absolute;top:0;right:0;background-color:#fbcd02;padding:4px 8px;color:#fff;text-transform:uppercase;font-size:11px;border-bottom-left-radius:5px}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header{background-color:rgb(var(--eduzz-ui-layout-surface-default));color:rgb(var(--eduzz-ui-layout-content-caption));border-bottom:3px solid rgb(var(--eduzz-ui-layout-outline-disabled) / .3);box-sizing:border-box;position:fixed;padding:.5rem 1rem;top:0;left:0;right:0;height:var(--eduzz-ui-layout-topbar-height-rem);display:flex;justify-content:space-between;z-index:105;gap:1rem;transition:.15s ease-out,background-color .3s,border-bottom-color .3s}@media (max-width:575px){.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header{padding:.5rem .5rem .5rem .3rem}}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start{display:flex;align-items:center}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-mobile-menu{cursor:pointer}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-mobile-menu .eduzz-ui-layout-topbar-mobile-menu-icon{margin-top:-2px}@media (min-width:1200px){.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-mobile-menu{display:none}}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-tag{text-transform:capitalize;padding:4px 8px;letter-spacing:.5px;display:block;border-radius:3px;font-size:14px;text-transform:uppercase;margin-left:.5rem;line-height:14px}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-tag.eduzz-ui-layout-topbar-tag-pro{border:1px solid rgb(var(--eduzz-ui-layout-content-disabled))}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-tag.eduzz-ui-layout-topbar-tag-unity{border:1px solid rgb(var(--eduzz-ui-layout-content-title));background:rgb(var(--eduzz-ui-layout-content-title));color:rgb(var(--eduzz-ui-layout-surface-default))}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-tag.eduzz-ui-layout-topbar-tag-partner{background:rgb(var(--eduzz-ui-layout-outline-default))}@media (max-width:575px){.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-start .eduzz-ui-layout-topbar-tag{display:none}}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-center{display:flex;flex:1;align-items:center;justify-content:center;max-width:400px}.eduzz-ui-layout-topbar>.eduzz-ui-layout-topbar-header>.eduzz-ui-layout-topbar-quick-access{display:flex;align-items:center;justify-content:center}")),document.head.appendChild(t)}}catch(u){console.error("vite-plugin-css-injected-by-js",u)}})();
import { jsx as o, jsxs as i } from "react/jsx-runtime";
import { memo as N, useEffect as s, useMemo as S } from "react";
import { useContextSelector as e } from "use-context-selector";
import u from "./Action/index.js";
import x from "./Actions/index.js";
import M from "./Apps/index.js";
import T from "./Belt/index.js";
import U from "./context.js";
import w from "./HyperflowSupportChat/index.js";
import L from "./Logo/index.js";
import I from "./ModeSwitcher/index.js";
import O from "./Search/index.js";
import P from "./UnitySupportChat/index.js";
import j from "./User/index.js";
import k from "./UserMenu/index.js";
import A from "./UserMenu/Divider/index.js";
import H from "./UserMenu/Item/index.js";
import $ from "./UserMenu/ItemGroup/index.js";
import a from "../context.js";
import q from "../Icons/Close.js";
import B from "../Icons/Menu.js";
import { cn as D } from "../utils/cn.js";
import E from "../utils/nestedComponent.js";

const G = N(
  ({
    children: n,
    currentApplication: p,
    logo: d,
    logoMobile: l,
    logoDarkMode: c,
    logoMobileDarkMode: f,
    logoWrapper: b,
    user: r,
    disableApps: z,
    ...y
  }) => {
    const m = e(a, (t) => t.topbar.register), h = e(a, (t) => t.sidebar.toogleOpened), g = e(a, (t) => t.topbar.registerCenterPortal), C = e(a, (t) => t.sidebar.opened);
    s(() => {
      const t = m();
      return () => t();
    }, [m]), s(() => (document.body.classList.add("eduzz-ui-layout-topbar-applied"), () => {
      document.body.classList.remove("eduzz-ui-layout-topbar-applied");
    }), []);
    const v = S(() => ({ currentApplication: p, user: r }), [p, r]);
    return /* @__PURE__ */ o(U.Provider, { value: v, children: /* @__PURE__ */ o("div", { className: "eduzz-ui-layout-topbar", ...y, children: /* @__PURE__ */ i("header", { className: "eduzz-ui-layout-topbar-header", children: [
      (r == null ? void 0 : r.isSupport) && /* @__PURE__ */ o("div", { className: "eduzz-ui-layout-topbar-user-support", children: "Suporte" }),
      /* @__PURE__ */ i("div", { className: "eduzz-ui-layout-topbar-start", children: [
        /* @__PURE__ */ o(
          u,
          {
            className: "eduzz-ui-layout-topbar-mobile-menu",
            icon: C ? /* @__PURE__ */ o(q, { size: 18 }) : /* @__PURE__ */ o(B, { size: 22, className: "eduzz-ui-layout-topbar-mobile-menu-icon" }),
            onClick: h
          }
        ),
        !z && /* @__PURE__ */ o(M, {}),
        /* @__PURE__ */ o(
          L,
          {
            logo: d,
            logoMobile: l,
            logoDarkMode: c,
            logoMobileDarkMode: f,
            wrapper: b
          }
        ),
        !!(r != null && r.tag) && /* @__PURE__ */ o("p", { className: D("eduzz-ui-layout-topbar-tag", `eduzz-ui-layout-topbar-tag-${r.tag}`), children: r.tag })
      ] }),
      /* @__PURE__ */ o("div", { className: "eduzz-ui-layout-topbar-center", ref: g }),
      /* @__PURE__ */ i("div", { className: "eduzz-ui-layout-topbar-quick-access", children: [
        /* @__PURE__ */ o(T, {}),
        /* @__PURE__ */ o(x, { children: n }),
        /* @__PURE__ */ o(j, {})
      ] })
    ] }) }) });
  }
), fo = E(G, {
  Action: u,
  UnitySupportChat: P,
  HyperflowSupportChat: w,
  UserMenu: k,
  UserMenuItem: H,
  UserMenuDivider: A,
  UserMenuGroup: $,
  Search: O,
  ModeSwitcher: I
});
export {
  fo as default
};
//# sourceMappingURL=index.js.map
