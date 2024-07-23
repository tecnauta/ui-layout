import { jsx as e } from "react/jsx-runtime";
import { useEffect as r } from "react";
import n from "../hooks/useScrollBlock.js";
import { cn as y } from "../utils/cn.js";
const d = ({ visible: t, children: i, underTopbar: a, className: z, ...l }) => {
  const { disableScroll: o, enableScroll: u } = n();
  return r(() => (t && o(), () => {
    u();
  }), [u, o, t]), /* @__PURE__ */ e(
    "div",
    {
      "aria-hidden": "true",
      tabIndex: -1,
      className: y(
        z,
        "uizz-layout-invisible uizz-layout-fixed uizz-layout-inset-0 uizz-layout-z-[106] uizz-layout-h-screen uizz-layout-w-screen uizz-layout-bg-content-negative/[0.32] uizz-layout-opacity-0 uizz-layout-backdrop-blur uizz-layout-transition",
        {
          "!uizz-layout-visible uizz-layout-opacity-100": t,
          "!uizz-layout-z-[104]": a
        }
      ),
      ...l,
      children: i
    }
  );
};
export {
  d as default
};
//# sourceMappingURL=index.js.map
