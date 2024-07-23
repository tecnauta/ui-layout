import { jsxs as w, jsx as i } from "react/jsx-runtime";
import { memo as A, useRef as b } from "react";
import { useContextSelector as a } from "use-context-selector";
import x from "./Dropdown/index.js";
import z from "../../hooks/useBoolean.js";
import C from "../../hooks/useClickOutside.js";
import D from "../../hooks/useEscapeKey.js";
import j from "../../hooks/usePromise.js";
import h from "../../Icons/Apps.js";
import y from "../Action/index.js";
import u from "../context.js";
const O = A(({ id: m, ...f }) => {
  const n = a(u, (r) => {
    var p;
    return ((p = r.user) == null ? void 0 : p.isSupport) ?? !1;
  }), t = a(u, (r) => r.currentApplication), [o, l, , e] = z(), s = b(null), [d] = j(async () => (await (await fetch("https://cdn.eduzzcdn.com/topbar/applications.json")).json()).filter((c) => !c.beta || n ? !0 : c.application === t), [t, n]);
  return C(s, e, []), D(() => {
    o && e();
  }, [o]), /* @__PURE__ */ w("div", { id: `eduzz-ui-layout-topbar-apps${m ?? ""}`, ref: s, ...f, children: [
    /* @__PURE__ */ i(y, { icon: /* @__PURE__ */ i(h, { size: 19 }), active: o, onClick: l }),
    /* @__PURE__ */ i(
      x,
      {
        applications: d,
        currentApplication: t,
        opened: o,
        onClose: e
      }
    )
  ] });
});
export {
  O as default
};
//# sourceMappingURL=index.js.map
