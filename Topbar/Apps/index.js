import { jsxs as d, jsx as p } from "react/jsx-runtime";
import { memo as z, useRef as j } from "react";
import { useContextSelector as a } from "use-context-selector";
import v from "./Dropdown/index.js";
import x from "../../hooks/useBoolean.js";
import b from "../../hooks/useClickOutside.js";
import h from "../../hooks/useEscapeKey.js";
import C from "../../hooks/usePromise.js";
import $ from "../../Icons/Apps.js";
import w from "../Action/index.js";
import s from "../context.js";
const E = z(({ id: c, ...f }) => {
  const e = a(s, (o) => {
    var n;
    return ((n = o.user) == null ? void 0 : n.isSupport) ?? !1;
  }), t = a(s, (o) => o.currentApplication), [r, l, , i] = x(), m = j(null), [u] = C(async () => (await (await fetch("https://cdn.eduzzcdn.com/topbar/applications.json")).json()).filter((o) => !o.beta || e ? !0 : o.application === t), [t, e]);
  return b(m, i, []), h(() => {
    r && i();
  }, [r]), /* @__PURE__ */ d("div", { id: `eduzz-ui-layout-topbar-apps${c ?? ""}`, ref: m, ...f, children: [
    /* @__PURE__ */ p(w, { icon: /* @__PURE__ */ p($, { size: 19 }), active: r, onClick: l }),
    /* @__PURE__ */ p(
      v,
      {
        applications: u,
        currentApplication: t,
        opened: r,
        onClose: i
      }
    )
  ] });
});
export {
  E as default
};
//# sourceMappingURL=index.js.map
