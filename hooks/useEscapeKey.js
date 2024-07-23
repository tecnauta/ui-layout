import { useEffect as r } from "react";
function i(n, t) {
  const o = "Escape";
  r(() => {
    function e(s) {
      s.key === o && n();
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
