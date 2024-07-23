import { jsx as o, jsxs as v } from "react/jsx-runtime";
import { memo as f, useRef as p, useState as g, useCallback as h, useEffect as w } from "react";
import { useContextSelector as x } from "use-context-selector";
import k from "../../context.js";
import E from "../../Icons/Search.js";
import C from "../../Portal/index.js";
import { cn as L } from "../../utils/cn.js";
const y = typeof window < "u" ? navigator.userAgent.toLowerCase().includes("mac os") : !1, K = ({
  disableShortcut: a,
  disableEscape: l,
  onEnter: t,
  status: z,
  placeholder: d = "Pesquisar"
}) => {
  const r = p(null), [s, i] = g(), n = x(k, (e) => e.topbar.centerPortal), c = h(
    (e) => {
      const u = e.currentTarget;
      if (!l && e.key === "Escape") {
        i(""), u.blur();
        return;
      }
      e.key === "Enter" && t && t(u.value, () => {
        i(""), u.blur();
      });
    },
    [l, t]
  ), m = (e) => {
    i(e.currentTarget.value);
  };
  return w(() => {
    const e = (u) => {
      if (u.target !== document.body || !r.current)
        return;
      const b = y ? u.metaKey : u.ctrlKey;
      u.key.toLowerCase() !== "k" || !b || (u.preventDefault(), u.stopPropagation(), r.current.focus());
    };
    return window.addEventListener("keydown", e), () => {
      window.removeEventListener("keydown", e);
    };
  }, []), n ? /* @__PURE__ */ o(C, { target: n, children: /* @__PURE__ */ v("div", { className: "uizz-layout-relative uizz-layout-box-border uizz-layout-hidden uizz-layout-h-10 uizz-layout-flex-1 uizz-layout-items-center uizz-layout-justify-between uizz-layout-gap-3 uizz-layout-px-2 uizz-layout-py-1 lg:uizz-layout-flex", children: [
    /* @__PURE__ */ o(E, { size: 20 }),
    /* @__PURE__ */ o(
      "input",
      {
        ref: r,
        className: L(
          "[&:focus+div]:uizz-layout-outline-disabled uizz-layout-h-10 uizz-layout-flex-1 uizz-layout-border-none uizz-layout-bg-transparent uizz-layout-text-base uizz-layout-text-content-title focus-visible:uizz-layout-outline-none [&:focus+div]:uizz-layout-border-[var(--eduzz-theme-primary)] [&:hover+div]:uizz-layout-border-[var(--eduzz-theme-primary)]",
          {
            "[&+div]:!uizz-layout-border-red-500 [&:focus+div]:!uizz-layout-outline-red-200 [&:hover+div]:!uizz-layout-border-red-500": z === "error",
            "[&+div]:!uizz-layout-border-yellow-500 [&:focus+div]:!uizz-layout-outline-yellow-200 [&:hover+div]:!uizz-layout-border-yellow-500": z === "warning"
          }
        ),
        placeholder: d,
        value: s,
        onChange: m,
        onKeyDown: a ? void 0 : c
      }
    ),
    /* @__PURE__ */ o("div", { className: "uizz-layout-pointer-events-none uizz-layout-absolute uizz-layout-inset-0 uizz-layout-rounded uizz-layout-border uizz-layout-border-solid uizz-layout-border-neutral-300 uizz-layout-outline uizz-layout-outline-0 uizz-layout-outline-offset-0 uizz-layout-outline-[rgba(var(--eduzz-theme-primary-rgb),0.3)] uizz-layout-transition dark:uizz-layout-border-neutral-700" }),
    a ? void 0 : /* @__PURE__ */ o("div", { className: "uizz-layout-rounded uizz-layout-border uizz-layout-bg-gray-50 uizz-layout-px-2 uizz-layout-py-1 uizz-layout-text-xs dark:uizz-layout-bg-gray-950", children: `${y ? "⌘" : "Ctrl"}+K` })
  ] }) }) : null;
}, q = f(K);
export {
  q as default
};
//# sourceMappingURL=index.js.map
