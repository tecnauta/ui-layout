import { jsx as o, jsxs as b } from "react/jsx-runtime";
import { useEffect as r, useMemo as c } from "react";
import { useContextSelector as u } from "use-context-selector";
import m from "./context.js";
import p from "./Group/index.js";
import f from "./Item/index.js";
import e from "../context.js";
import x from "../Overlay/index.js";
import { cn as h } from "../utils/cn.js";
import w from "../utils/nestedComponent.js";
const v = ({ currentLocation: i, children: z }) => {
  const s = u(e, (t) => t.topbar.exists), a = u(e, (t) => t.sidebar.register), l = u(e, (t) => t.sidebar.opened), d = u(e, (t) => t.sidebar.toogleOpened), y = u(e, (t) => t.sidebar.falseOpened);
  r(() => {
    const t = a();
    return () => t();
  }, [a]);
  const n = c(
    () => ({
      isActiveItem: (t) => t ? t === i : !1
    }),
    [i]
  );
  return r(() => {
    y();
  }, [i]), /* @__PURE__ */ o(m.Provider, { value: n, children: /* @__PURE__ */ b("div", { className: "eduzz-ui-layout-sidebar uizz-layout-relative uizz-layout-box-border uizz-layout-h-auto uizz-layout-text-content-title xl:uizz-layout-w-[var(--eduzz-ui-layout-sidebar-width-rem)]", children: [
    /* @__PURE__ */ o(x, { visible: l, className: "xl:uizz-layout-hidden", onClick: d, underTopbar: !0 }),
    /* @__PURE__ */ o(
      "aside",
      {
        className: h(
          "uizz-layout-fixed uizz-layout-inset-y-0 uizz-layout-left-[calc(var(--eduzz-ui-layout-sidebar-width-rem)*-1)] uizz-layout-z-[104] uizz-layout-inline-flex uizz-layout-w-[var(--eduzz-ui-layout-sidebar-width-rem)] uizz-layout-grow uizz-layout-flex-col uizz-layout-bg-surface-default uizz-layout-shadow-[0px_4px_8px_rgb(0_0_0_/_0.16)] uizz-layout-transition-[left,_background-color] xl:uizz-layout-left-0 xl:uizz-layout-bg-surface-subtle  xl:uizz-layout-shadow-none",
          {
            "uizz-layout-top-[var(--eduzz-ui-layout-topbar-height-rem)]": s,
            "!uizz-layout-left-0": l
          }
        ),
        children: /* @__PURE__ */ o("nav", { className: "uizz-layout-overflow-y-auto uizz-layout-overflow-x-hidden uizz-layout-px-0 uizz-layout-pb-10 uizz-layout-pt-8 [&::-webkit-scrollbar-thumb]:uizz-layout-rounded [&::-webkit-scrollbar-thumb]:uizz-layout-bg-transparent [&::-webkit-scrollbar]:uizz-layout-w-[3px] [&::-webkit-scrollbar]:uizz-layout-bg-transparent [&:hover::-webkit-scrollbar-thumb]:uizz-layout-bg-[#e0e0e0]", children: /* @__PURE__ */ o("ul", { className: "uizz-layout-m-0 uizz-layout-block uizz-layout-p-0", children: z }) })
      }
    )
  ] }) });
}, $ = w(v, {
  Item: f,
  Group: p
});
export {
  $ as default
};
//# sourceMappingURL=index.js.map
