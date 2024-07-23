import { jsx as o, jsxs as p } from "react/jsx-runtime";
import { forwardRef as x, useEffect as f, memo as b } from "react";
import { useContext as h } from "use-context-selector";
import g from "../../Badge/index.js";
import v from "../../Tooltip/index.js";
import { cn as e } from "../../utils/cn.js";
import w from "../Actions/context.js";
const k = x(
  ({ active: a, icon: z, right: l, label: n, onClick: r, tooltip: c, className: y, badgeCount: t, badgeDot: u, ...d }, m) => {
    const i = h(w);
    return f(() => {
      const s = i({ badgeCount: t ?? 0, badgeDot: u ?? !1 });
      return () => s();
    }, [t, u, i]), /* @__PURE__ */ o(
      "div",
      {
        className: e("[&_.anticon]:uizz-layout-align-text-bottom [&_.anticon]:uizz-layout-text-[20px]", y),
        onClick: r,
        ...d,
        ref: m,
        children: /* @__PURE__ */ o(v, { title: c, children: /* @__PURE__ */ o(g, { count: t === 0 ? void 0 : t, dot: t ? !1 : u, children: /* @__PURE__ */ p(
          "div",
          {
            className: e(
              "uizz-layout-mt-0.5 uizz-layout-box-border uizz-layout-flex uizz-layout-h-10 uizz-layout-min-w-[40px] uizz-layout-cursor-pointer uizz-layout-select-none uizz-layout-items-center uizz-layout-justify-center uizz-layout-gap-2 uizz-layout-rounded-[20px] uizz-layout-px-2 uizz-layout-py-0 uizz-layout-text-center uizz-layout-transition hover:uizz-layout-bg-content-title/[0.03] dark:hover:uizz-layout-bg-content-title/[0.08]",
              { "uizz-layout-bg-content-title/[0.03] dark:uizz-layout-bg-content-title/[0.08]": a }
            ),
            children: [
              z,
              /* @__PURE__ */ o("span", { className: "eduzz-ui-layout-topbar-action-button-text uizz-layout-hidden uizz-layout-max-w-[150px] uizz-layout-overflow-hidden uizz-layout-text-ellipsis uizz-layout-whitespace-nowrap empty:uizz-layout-hidden md:uizz-layout-block", children: n }),
              l
            ]
          }
        ) }) })
      }
    );
  }
), E = b(k);
export {
  E as default
};
//# sourceMappingURL=index.js.map
