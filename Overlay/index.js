import { jsx as z } from "react/jsx-runtime";
import { useEffect as r } from "react";
import n from "../hooks/useScrollBlock.js";
import { cn as s } from "../utils/cn.js";
const b = ({ visible: i, children: u, underTopbar: a, className: e, ...l }) => {
  const { disableScroll: o, enableScroll: t } = n();
  return r(() => (i && o(), () => {
    t();
  }), [t, o, i]), /* @__PURE__ */ z(
    "div",
    {
      "aria-hidden": "true",
      tabIndex: -1,
      className: s(
        e,
        "uizz-layout-invisible uizz-layout-fixed uizz-layout-inset-0 uizz-layout-z-[106] uizz-layout-h-screen uizz-layout-w-screen uizz-layout-bg-content-negative/[0.32] uizz-layout-opacity-0 uizz-layout-backdrop-blur uizz-layout-transition",
        {
          "!uizz-layout-visible uizz-layout-opacity-100": i,
          "!uizz-layout-z-[104]": a
        }
      ),
      ...l,
      children: u
    }
  );
};
export {
  b as default
};
//# sourceMappingURL=index.js.map
