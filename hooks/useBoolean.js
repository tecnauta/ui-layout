import { useState as l, useCallback as e } from "react";
function c(a) {
  const [u, t] = l(a ?? !1), o = e(() => t((f) => !f), []), r = e(() => t(() => !0), []), s = e(() => t(() => !1), []);
  return [u, o, r, s];
}
export {
  c as default
};
//# sourceMappingURL=useBoolean.js.map
