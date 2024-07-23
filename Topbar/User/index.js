import { jsxs as f, jsx as u } from "react/jsx-runtime";
import { memo as p, useRef as c } from "react";
import { useContextSelector as t } from "use-context-selector";
import d from "../../Avatar/index.js";
import r from "../../context.js";
import y from "../../hooks/useClickOutside.js";
import v from "../../hooks/useEscapeKey.js";
import x from "../../Icons/CaretDown.js";
import { cn as l } from "../../utils/cn.js";
import b from "../Action/index.js";
import M from "../context.js";
const R = p(() => {
  const n = c(null), i = t(M, (e) => e.user), a = t(r, (e) => e.userMenu.opened), o = t(r, (e) => e.userMenu.exists), s = t(r, (e) => e.userMenu.toogleOpened), m = t(r, (e) => e.userMenu.falseOpened), z = t(r, (e) => e.userMenu.registerContainerPortal);
  return y(n, () => o && m(), [o]), v(() => o && m(), [o]), i ? /* @__PURE__ */ f(
    "div",
    {
      ref: n,
      className: l("uizz-layout-pointer-events-none uizz-layout-relative uizz-layout-z-[1100] uizz-layout-ml-2", {
        "!uizz-layout-pointer-events-auto": o
      }),
      children: [
        /* @__PURE__ */ u(
          b,
          {
            active: o && a,
            icon: /* @__PURE__ */ u(d, { src: i.avatar, children: i.name }),
            className: "[&_.eduzz-ui-layout-topbar-action-button-text]:uizz-layout-font-bold",
            right: o && /* @__PURE__ */ u(
              x,
              {
                size: 16,
                className: l("uizz-layout-hidden  md:uizz-layout-inline-block", { "rotate-180": a })
              }
            ),
            label: i.name,
            onClick: s
          }
        ),
        /* @__PURE__ */ u("div", { ref: z })
      ]
    }
  ) : null;
});
export {
  R as default
};
//# sourceMappingURL=index.js.map
