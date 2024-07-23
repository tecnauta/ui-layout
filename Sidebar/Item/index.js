import { jsxs as z, jsx as e } from "react/jsx-runtime";
import { forwardRef as b, useEffect as x, createElement as v, memo as g } from "react";
import { useContextSelector as r } from "use-context-selector";
import h from "../../Icons/Bullet.js";
import w from "../../Icons/ExternalLink.js";
import { cn as N } from "../../utils/cn.js";
import _ from "../context.js";
import k from "../Group/context.js";
const I = b(
  ({ children: n, isActive: y, tabIndex: s, className: c, as: m, disabled: d, to: a, isExternal: t, ...o }, p) => {
    t = t ?? (o == null ? void 0 : o.target) === "_blank";
    const f = r(_, (i) => i.isActiveItem), l = r(k, (i) => i.onItemActive), u = y ?? f(a);
    return x(() => {
      u && l();
    }, [u, l]), v(
      m ?? "a",
      {
        ...o,
        ref: p,
        to: a,
        tabIndex: s ?? 1,
        className: N(
          c,
          "uizz-layout-group/menu uizz-layout-mr-[5px] uizz-layout-block uizz-layout-w-full uizz-layout-select-none uizz-layout-rounded-br-[50px] uizz-layout-rounded-tr-[50px] uizz-layout-text-inherit uizz-layout-outline-none uizz-layout-outline-0 hover:uizz-layout-bg-content-title/[0.03] dark:hover:uizz-layout-bg-content-title/[0.08] hover:uizz-layout-text-inherit hover:uizz-layout-outline-none focus-visible:uizz-layout-bg-content-title/[0.03] dark:focus-visible:uizz-layout-bg-content-title/[0.03] focus-visible:uizz-layout-shadow-[0_0_0_2px_#039be5_inset]",
          {
            "--active": u,
            "--disabled": d
          }
        )
      },
      /* @__PURE__ */ z("li", { className: "uizz-layout-box-border uizz-layout-grid uizz-layout-cursor-pointer uizz-layout-grid-cols-[1.625rem_1fr] uizz-layout-items-center uizz-layout-gap-2 uizz-layout-whitespace-nowrap uizz-layout-px-4 uizz-layout-py-1 uizz-layout-leading-[1.2] uizz-layout-no-underline uizz-layout-transition-[left,_background-color] xl:uizz-layout-py-[0.07rem]", children: [
        /* @__PURE__ */ e(
          h,
          {
            className: "uizz-layout-text-[color:var(--eduzz-theme-secondary)] uizz-layout-opacity-0 group-[.--active]/uizz-layout-menu:uizz-layout-bg-secondary group-[.--active]/menu:uizz-layout-opacity-100",
            size: "md"
          }
        ),
        /* @__PURE__ */ z("div", { className: "uizz-layout-flex uizz-layout-items-center uizz-layout-justify-between", children: [
          /* @__PURE__ */ e("span", { className: "uizz-layout-col-[2] uizz-layout-min-w-0 uizz-layout-overflow-hidden uizz-layout-text-ellipsis uizz-layout-text-base uizz-layout-transition-[font-weight] group-[.--active]/menu:uizz-layout-font-bold", children: n }),
          t && /* @__PURE__ */ e(w, { className: "uizz-layout-fill-content-title/[0.88] uizz-layout-opacity-50", size: 20 })
        ] })
      ] })
    );
  }
), D = g(I);
export {
  D as default
};
//# sourceMappingURL=index.js.map
