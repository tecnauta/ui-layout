import { useEffect as d } from "react";
function i(n, t) {
  const o = "Escape";
  d(() => {
    function e(r) {
      r.key === o && n();
    }
    return window.addEventListener("keydown", e), () => {
      window.removeEventListener("keydown", e);
    };
  }, [t]);
}
export {
  i as default
};
//# sourceMappingURL=useEscapeKey.js.map
