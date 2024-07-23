import { useState as n, useEffect as s } from "react";
function h(c, f) {
  const [u, r] = n(!0), [a, i] = n(), [l, o] = n();
  return s(() => {
    let t = !0;
    return r(!0), o(void 0), c(() => t).then((e) => {
      t && i(() => e);
    }).catch((e) => {
      t && o(e);
    }).finally(() => r(!1)), () => {
      t = !1;
    };
  }, f), [a, l, u];
}
export {
  h as default
};
//# sourceMappingURL=usePromise.js.map
