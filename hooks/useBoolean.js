import { useState as n, useCallback as e } from "react";
function l(o) {
  const [r, t] = n(o ?? !1), u = e(() => t((c) => !c), []), a = e(() => t(() => !0), []), s = e(() => t(() => !1), []);
  return [r, u, a, s];
}
export {
  l as default
};
//# sourceMappingURL=useBoolean.js.map
