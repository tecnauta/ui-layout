import { jsx as e, jsxs as b } from "react/jsx-runtime";
import { useEffect as r, useMemo as m } from "react";
import { useContextSelector as o } from "use-context-selector";
import c from "./context.js";
import p from "./Group/index.js";
import f from "./Item/index.js";
import u from "../context.js";
import x from "../Overlay/index.js";
import { cn as h } from "../utils/cn.js";
import w from "../utils/nestedComponent.js";
const g = ({ currentLocation: a, children: z }) => {
  const s = o(u, (t) => t.topbar.exists), i = o(u, (t) => t.sidebar.register), l = o(u, (t) => t.sidebar.opened), d = o(u, (t) => t.sidebar.toogleOpened), n = o(u, (t) => t.sidebar.falseOpened);
  r(() => {
    const t = i();
    return () => t();
  }, [i]);
  const y = m(
    () => ({
      isActiveItem: (t) => t ? t === a : !1
    }),
    [a]
  );
  return r(() => {
    n();
  }, [a]), /* @__PURE__ */ e(c.Provider, { value: y, children: /* @__PURE__ */ b("div", { className: "eduzz-ui-layout-sidebar uizz-layout-relative uizz-layout-box-border uizz-layout-h-auto uizz-layout-text-content-title xl:uizz-layout-w-[var(--eduzz-ui-layout-sidebar-width-rem)]", children: [
    /* @__PURE__ */ e(x, { visible: l, className: "xl:uizz-layout-hidden", onClick: d, underTopbar: !0 }),
    /* @__PURE__ */ e(
      "aside",
      {
        className: h(
          "uizz-layout-fixed uizz-layout-inset-y-0 uizz-layout-left-[calc(var(--eduzz-ui-layout-sidebar-width-rem)*-1)] uizz-layout-z-[104] uizz-layout-inline-flex uizz-layout-w-[var(--eduzz-ui-layout-sidebar-width-rem)] uizz-layout-grow uizz-layout-flex-col uizz-layout-bg-surface-default uizz-layout-shadow-[0px_4px_8px_rgb(0_0_0_/_0.16)] uizz-layout-transition-[left,_background-color] xl:uizz-layout-left-0 xl:uizz-layout-bg-surface-subtle  xl:uizz-layout-shadow-none",
          {
            "uizz-layout-top-[var(--eduzz-ui-layout-topbar-height-rem)]": s,
            "!uizz-layout-left-0": l
          }
        ),
        children: /* @__PURE__ */ e("nav", { className: "uizz-layout-overflow-y-auto uizz-layout-overflow-x-hidden uizz-layout-px-0 uizz-layout-pb-10 uizz-layout-pt-8 [&::-webkit-scrollbar-thumb]:uizz-layout-rounded [&::-webkit-scrollbar-thumb]:uizz-layout-bg-transparent [&::-webkit-scrollbar]:uizz-layout-w-[3px] [&::-webkit-scrollbar]:uizz-layout-bg-transparent [&:hover::-webkit-scrollbar-thumb]:uizz-layout-bg-[#e0e0e0]", children: /* @__PURE__ */ e("ul", { className: "uizz-layout-m-0 uizz-layout-block uizz-layout-p-0", children: z }) })
      }
    )
  ] }) });
}, T = w(g, {
  Item: f,
  Group: p
});
export {
  T as default
};
//# sourceMappingURL=index.js.map
