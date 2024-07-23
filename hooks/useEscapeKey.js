import { useEffect as r } from "react";
function f(n, o) {
  const t = "Escape";
  r(() => {
    function e(i) {
      i.key === t && n();
    }
    return window.addEventListener("keydown", e), () => {
      window.removeEventListener("keydown", e);
    };
  }, [o]);
}
export {
  f as default
};
//# sourceMappingURL=useEscapeKey.js.map
