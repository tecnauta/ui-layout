import { jsx as t, jsxs as l } from "react/jsx-runtime";
import { forwardRef as m, useMemo as d, memo as p } from "react";
import b from "./context.js";
import h from "../../CollapseEffect/index.js";
import x from "../../hooks/useBoolean.js";
import { cn as z } from "../../utils/cn.js";
const f = m(
  ({ id: a, children: e, label: u, tabIndex: r, className: y }, n) => {
    const [i, c, o] = x(!0), s = d(() => ({ onItemActive: o }), [o]);
    return /* @__PURE__ */ t(b.Provider, { value: s, children: /* @__PURE__ */ l("li", { id: a, className: z(y, "uizz-layout-block uizz-layout-select-none"), ref: n, children: [
      !!u && /* @__PURE__ */ l(
        "div",
        {
          className: "uizz-layout-relative uizz-layout-box-border uizz-layout-grid uizz-layout-min-h-[2.2rem] uizz-layout-cursor-pointer uizz-layout-grid-cols-[1.625rem_1fr] uizz-layout-items-center uizz-layout-gap-2 uizz-layout-rounded-br-[50px] uizz-layout-rounded-tr-[50px] uizz-layout-px-4 uizz-layout-py-2 uizz-layout-leading-[1.15] uizz-layout-outline-none uizz-layout-transition-all hover:uizz-layout-bg-content-title/[0.03] active:uizz-layout-bg-content-title/[0.03] dark:hover:uizz-layout-bg-content-title/[0.08] dark:active:uizz-layout-bg-content-title/[0.03] ",
          onClick: c,
          tabIndex: r ?? 1,
          children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: z(
                  "uizz-layout-absolute uizz-layout-left-0 uizz-layout-top-2/4 uizz-layout--mt-0.5 uizz-layout-h-0.5 uizz-layout-w-[30px] uizz-layout-bg-content-title/[0.65] uizz-layout-opacity-30 uizz-layout-transition-[left,_background-color]",
                  {
                    "!uizz-layout-top-[calc(50%_-_1px)] !uizz-layout-mt-[-0.5px] !uizz-layout-h-px !uizz-layout-bg-content-title/[0.45] !uizz-layout-opacity-30": i
                  }
                )
              }
            ),
            /* @__PURE__ */ t("div", { className: "uizz-layout-col-[2] uizz-layout-min-w-0", children: /* @__PURE__ */ t("span", { className: "uizz-layout-overflow-hidden uizz-layout-text-ellipsis uizz-layout-whitespace-nowrap uizz-layout-break-all uizz-layout-text-sm uizz-layout-uppercase uizz-layout-tracking-[0.03em] uizz-layout-text-content-title/[0.65]", children: u }) })
          ]
        }
      ),
      /* @__PURE__ */ t("ul", { className: "uizz-layout-m-0  uizz-layout-block uizz-layout-p-0", children: /* @__PURE__ */ t(h, { visibled: i, children: /* @__PURE__ */ t("div", { className: " uizz-layout-pb-[0.7rem] [&_li]:uizz-layout-mb-0", children: e }) }) })
    ] }) });
  }
), I = p(f);
export {
  I as default
};
//# sourceMappingURL=index.js.map
