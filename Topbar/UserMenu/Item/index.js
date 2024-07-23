import { jsxs as d, jsx as e, Fragment as x } from "react/jsx-runtime";
import { forwardRef as f, useCallback as h } from "react";
import { useContextSelector as b } from "use-context-selector";
import w from "../../../context.js";
import { cn as g } from "../../../utils/cn.js";
const M = f(
  ({ id: a, icon: r, disabled: n, onClick: t, children: s, preventClose: i, className: y, as: z, ...c }, m) => {
    const l = b(w, (u) => u.userMenu.falseOpened), p = h(
      (u) => {
        t && t(u), !i && l();
      },
      [l, t, i]
    );
    let o = /* @__PURE__ */ d(
      "button",
      {
        id: a,
        ref: m,
        onClick: p,
        className: g(
          y,
          "uizz-layout-flex uizz-layout-w-full uizz-layout-cursor-pointer uizz-layout-items-center uizz-layout-gap-2 uizz-layout-rounded-md uizz-layout-border-none uizz-layout-bg-transparent uizz-layout-px-4 uizz-layout-py-2 uizz-layout-text-inherit uizz-layout-transition hover:uizz-layout-bg-content-title/[0.03] disabled:uizz-layout-cursor-not-allowed disabled:uizz-layout-opacity-25 dark:hover:uizz-layout-bg-content-title/[0.08] [&>.anticon]:uizz-layout-text-[20px] [&>svg]:uizz-layout-mr-[5px] [&>svg]:uizz-layout-w-6"
        ),
        disabled: n,
        children: [
          r,
          /* @__PURE__ */ e("span", { className: "uizz-layout-max-w-[235px] uizz-layout-overflow-hidden uizz-layout-text-ellipsis uizz-layout-whitespace-nowrap uizz-layout-text-base", children: s })
        ]
      }
    );
    return z && (o = /* @__PURE__ */ e(z, { id: a, ...c, className: "uizz-layout-text-inherit hover:uizz-layout-text-inherit", children: o })), /* @__PURE__ */ e(x, { children: o });
  }
);
export {
  M as default
};
//# sourceMappingURL=index.js.map
