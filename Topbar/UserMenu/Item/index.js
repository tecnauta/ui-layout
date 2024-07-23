import { jsxs as m, jsx as i, Fragment as x } from "react/jsx-runtime";
import { forwardRef as f, useCallback as h } from "react";
import { useContextSelector as b } from "use-context-selector";
import w from "../../../context.js";
import { cn as g } from "../../../utils/cn.js";
const M = f(
  ({ id: u, icon: r, disabled: n, onClick: t, children: s, preventClose: a, className: y, as: l, ...d }, c) => {
    const z = b(w, (e) => e.userMenu.falseOpened), p = h(
      (e) => {
        t && t(e), !a && z();
      },
      [z, t, a]
    );
    let o = /* @__PURE__ */ m(
      "button",
      {
        id: u,
        ref: c,
        onClick: p,
        className: g(
          y,
          "uizz-layout-flex uizz-layout-w-full uizz-layout-cursor-pointer uizz-layout-items-center uizz-layout-gap-2 uizz-layout-rounded-md uizz-layout-border-none uizz-layout-bg-transparent uizz-layout-px-4 uizz-layout-py-2 uizz-layout-text-inherit uizz-layout-transition hover:uizz-layout-bg-content-title/[0.03] disabled:uizz-layout-cursor-not-allowed disabled:uizz-layout-opacity-25 dark:hover:uizz-layout-bg-content-title/[0.08] [&>.anticon]:uizz-layout-text-[20px] [&>svg]:uizz-layout-mr-[5px] [&>svg]:uizz-layout-w-6"
        ),
        disabled: n,
        children: [
          r,
          /* @__PURE__ */ i("span", { className: "uizz-layout-max-w-[235px] uizz-layout-overflow-hidden uizz-layout-text-ellipsis uizz-layout-whitespace-nowrap uizz-layout-text-base", children: s })
        ]
      }
    );
    return l && (o = /* @__PURE__ */ i(l, { id: u, ...d, className: "uizz-layout-text-inherit hover:uizz-layout-text-inherit", children: o })), /* @__PURE__ */ i(x, { children: o });
  }
);
export {
  M as default
};
//# sourceMappingURL=index.js.map
