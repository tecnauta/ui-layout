import { jsx as e } from "react/jsx-runtime";
import { useState as i, useMemo as r, useCallback as s } from "react";
function c(u) {
  let t = "";
  const o = u.split(" ");
  for (const a of o)
    if (t += a.charAt(0), t.length >= 2)
      break;
  return t;
}
const m = ({ src: u, children: t }) => {
  const [o, a] = i(!1), l = r(() => c(t ?? ""), [t]), z = s(() => a(!0), []);
  return /* @__PURE__ */ e("div", { className: "uizz-layout-flex uizz-layout-h-7 uizz-layout-w-7 uizz-layout-items-center uizz-layout-justify-center uizz-layout-overflow-hidden uizz-layout-rounded-[50%] uizz-layout-bg-[var(--eduzz-theme-primary)] uizz-layout-text-xs uizz-layout-text-white dark:uizz-layout-text-black", children: u && !o ? /* @__PURE__ */ e("img", { src: u, onError: z, className: "uizz-layout-max-h-full uizz-layout-max-w-full" }) : l });
};
export {
  m as default
};
//# sourceMappingURL=index.js.map
