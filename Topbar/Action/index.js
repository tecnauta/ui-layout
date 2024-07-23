import { jsx as o, jsxs as d } from "react/jsx-runtime";
import { forwardRef as x, useEffect as f, memo as h } from "react";
import { useContext as b } from "use-context-selector";
import v from "../../Badge/index.js";
import w from "../../Tooltip/index.js";
import { cn as e } from "../../utils/cn.js";
import g from "../Actions/context.js";
const A = x(
  ({ active: z, icon: l, right: a, label: r, onClick: n, tooltip: c, className: y, badgeCount: t, badgeDot: i, ...s }, m) => {
    const u = b(g);
    return f(() => {
      const p = u({ badgeCount: t ?? 0, badgeDot: i ?? !1 });
      return () => p();
    }, [t, i, u]), /* @__PURE__ */ o(
      "div",
      {
        className: e("[&_.anticon]:uizz-layout-align-text-bottom [&_.anticon]:uizz-layout-text-[20px]", y),
        onClick: n,
        ...s,
        ref: m,
        children: /* @__PURE__ */ o(w, { title: c, children: /* @__PURE__ */ o(v, { count: t === 0 ? void 0 : t, dot: t ? !1 : i, children: /* @__PURE__ */ d(
          "div",
          {
            className: e(
              "uizz-layout-mt-0.5 uizz-layout-box-border uizz-layout-flex uizz-layout-h-10 uizz-layout-min-w-[40px] uizz-layout-cursor-pointer uizz-layout-select-none uizz-layout-items-center uizz-layout-justify-center uizz-layout-gap-2 uizz-layout-rounded-[20px] uizz-layout-px-2 uizz-layout-py-0 uizz-layout-text-center uizz-layout-transition hover:uizz-layout-bg-content-title/[0.03] dark:hover:uizz-layout-bg-content-title/[0.08]",
              { "uizz-layout-bg-content-title/[0.03] dark:uizz-layout-bg-content-title/[0.08]": z }
            ),
            children: [
              l,
              /* @__PURE__ */ o("span", { className: "eduzz-ui-layout-topbar-action-button-text uizz-layout-hidden uizz-layout-max-w-[150px] uizz-layout-overflow-hidden uizz-layout-text-ellipsis uizz-layout-whitespace-nowrap empty:uizz-layout-hidden md:uizz-layout-block", children: r }),
              a
            ]
          }
        ) }) })
      }
    );
  }
), R = h(A);
export {
  R as default
};
//# sourceMappingURL=index.js.map
