import { useState as r, useEffect as c } from "react";
function m(n, o) {
  const [i, s] = r(!0), [f, a] = r(), [l, u] = r();
  return c(() => {
    let e = !0;
    return s(!0), u(void 0), n(() => e).then((t) => {
      e && a(() => t);
    }).catch((t) => {
      e && u(t);
    }).finally(() => s(!1)), () => {
      e = !1;
    };
  }, o), [f, l, i];
}
export {
  m as default
};
//# sourceMappingURL=usePromise.js.map
