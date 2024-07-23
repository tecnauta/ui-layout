import { jsx as a } from "react/jsx-runtime";
import { forwardRef as f } from "react";
const d = f(
  ({ focusable: r = !1, children: s, size: o = "md", ...e }, t) => /* @__PURE__ */ a(
    "svg",
    {
      ref: t,
      width: {
        lg: 32,
        md: 24,
        sm: 16
      }[o] ?? o,
      viewBox: "0 0 192 192",
      focusable: r,
      fill: "currentColor",
      ...e,
      children: s
    }
  )
);
export {
  d as default
};
//# sourceMappingURL=Base.js.map
