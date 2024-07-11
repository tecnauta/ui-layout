import { useState as r, useCallback as t } from "react";
function f(o) {
  const [a, e] = r(o ?? !1), s = t(() => e((n) => !n), []), l = t(() => e(() => !0), []), u = t(() => e(() => !1), []);
  return [a, s, l, u];
}
export {
  f as default
};
//# sourceMappingURL=useBoolean.js.map
