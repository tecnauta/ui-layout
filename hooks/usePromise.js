import { useState as f, useEffect as s } from "react";
function d(u, a) {
  const [o, n] = f(!0), [c, i] = f(), [l, r] = f();
  return s(() => {
    let t = !0;
    return n(!0), r(void 0), u(() => t).then((e) => {
      t && i(() => e);
    }).catch((e) => {
      t && r(e);
    }).finally(() => n(!1)), () => {
      t = !1;
    };
  }, a), [c, l, o];
}
export {
  d as default
};
//# sourceMappingURL=usePromise.js.map
