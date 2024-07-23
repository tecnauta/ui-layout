import { jsx as r } from "react/jsx-runtime";
import { useState as i, useMemo as z, useCallback as s } from "react";
function n(e) {
  let t = "";
  const o = e.split(" ");
  for (const u of o)
    if (t += u.charAt(0), t.length >= 2) break;
  return t;
}
const c = ({ src: e, children: t }) => {
  const [o, u] = i(!1), a = z(() => n(t ?? ""), [t]), l = s(() => u(!0), []);
  return /* @__PURE__ */ r("div", { className: "uizz-layout-flex uizz-layout-h-7 uizz-layout-w-7 uizz-layout-items-center uizz-layout-justify-center uizz-layout-overflow-hidden uizz-layout-rounded-[50%] uizz-layout-bg-[var(--eduzz-theme-primary)] uizz-layout-text-xs uizz-layout-text-white dark:uizz-layout-text-black", children: e && !o ? /* @__PURE__ */ r("img", { src: e, onError: l, className: "uizz-layout-max-h-full uizz-layout-max-w-full" }) : a });
};
export {
  c as default
};
//# sourceMappingURL=index.js.map
