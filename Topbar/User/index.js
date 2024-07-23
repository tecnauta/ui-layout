import { jsxs as p, jsx as u } from "react/jsx-runtime";
import { memo as z, useRef as f } from "react";
import { useContextSelector as t } from "use-context-selector";
import d from "../../Avatar/index.js";
import r from "../../context.js";
import y from "../../hooks/useClickOutside.js";
import v from "../../hooks/useEscapeKey.js";
import x from "../../Icons/CaretDown.js";
import { cn as l } from "../../utils/cn.js";
import C from "../Action/index.js";
import M from "../context.js";
const E = z(() => {
  const i = f(null), n = t(M, (e) => e.user), s = t(r, (e) => e.userMenu.opened), o = t(r, (e) => e.userMenu.exists), m = t(r, (e) => e.userMenu.toogleOpened), a = t(r, (e) => e.userMenu.falseOpened), c = t(r, (e) => e.userMenu.registerContainerPortal);
  return y(i, () => o && a(), [o]), v(() => o && a(), [o]), n ? /* @__PURE__ */ p(
    "div",
    {
      ref: i,
      className: l("uizz-layout-pointer-events-none uizz-layout-relative uizz-layout-z-[1100] uizz-layout-ml-2", {
        "!uizz-layout-pointer-events-auto": o
      }),
      children: [
        /* @__PURE__ */ u(
          C,
          {
            active: o && s,
            icon: /* @__PURE__ */ u(d, { src: n.avatar, children: n.name }),
            className: "[&_.eduzz-ui-layout-topbar-action-button-text]:uizz-layout-font-bold",
            right: o && /* @__PURE__ */ u(
              x,
              {
                size: 16,
                className: l("uizz-layout-hidden  md:uizz-layout-inline-block", { "rotate-180": s })
              }
            ),
            label: n.name,
            onClick: m
          }
        ),
        /* @__PURE__ */ u("div", { ref: c })
      ]
    }
  ) : null;
});
export {
  E as default
};
//# sourceMappingURL=index.js.map
