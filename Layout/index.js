import { jsxs as E, jsx as j } from "react/jsx-runtime";
import { useState as e, useCallback as r, useMemo as B } from "react";
import G from "../Content/index.js";
import H from "../context.js";
import N from "../hooks/useBoolean.js";
import I from "../hooks/useMode.js";
import J from "../Sidebar/index.js";
import K from "../Topbar/index.js";
import { cn as L } from "../utils/cn.js";
import { hexToRgbVar as T } from "../utils/hextToRgb.js";
import Q from "../utils/nestedComponent.js";
const W = ({
  className: V,
  children: k,
  primaryColor: o,
  secondaryColor: t,
  mode: w,
  persistMode: F,
  acceptModeBySearchParam: R,
  onModeChange: U,
  ...X
}) => {
  const [a, m] = e(!1), [s, l] = e(!1), [d, n] = e(!1), [u, Y] = e(null), [p, q] = e(null), [c, z, f, h] = N(!1), [y, g, b, x] = N(!1), [C, M] = I({ mode: w, acceptModeBySearchParam: R, onModeChange: U, persistMode: F }), P = r(() => (m(!0), () => m(!1)), []), O = r(() => (l(!0), () => l(!1)), []), v = r((i) => {
    Y(i);
  }, []), S = r(() => (n(!0), () => n(!1)), []), $ = r((i) => {
    q(i);
  }, []), A = B(
    () => ({
      layout: {
        mode: C,
        toggle: M
      },
      topbar: {
        exists: a,
        centerPortal: u,
        register: P,
        registerCenterPortal: v
      },
      sidebar: {
        exists: s,
        opened: y,
        register: O,
        toogleOpened: g,
        trueOpened: b,
        falseOpened: x
      },
      userMenu: {
        opened: c,
        containerPortal: p,
        exists: d,
        register: S,
        registerContainerPortal: $,
        toogleOpened: z,
        trueOpened: f,
        falseOpened: h
      }
    }),
    [
      x,
      h,
      s,
      a,
      d,
      O,
      P,
      v,
      S,
      $,
      y,
      g,
      z,
      u,
      b,
      f,
      p,
      c,
      C,
      M
    ]
  ), D = B(
    () => `
      :root {
        ${o ? `
            --eduzz-theme-primary: ${o ?? "#0d2772"};
            --eduzz-theme-primary-rgb: ${T(o) ?? "13, 38, 115"};
            ` : ""}
      
        ${t ? `
            --eduzz-theme-secondary: ${t ?? "#ffbc00"};
            --eduzz-theme-secondary-rgb: ${T(t) ?? "255, 188, 0"};
            ` : ""}
        
      }
    `,
    [o, t]
  );
  return /* @__PURE__ */ E(H.Provider, { value: A, children: [
    /* @__PURE__ */ j("style", { children: D }),
    /* @__PURE__ */ j(
      "div",
      {
        className: L("eduzz-ui-layout uizz-layout-flex uizz-layout-min-h-screen uizz-layout-w-full", V, {
          "uizz-layout-pt-[var(--eduzz-ui-layout-topbar-height-rem)]": a
        }),
        ...X,
        children: k
      }
    )
  ] });
}, de = Q(W, {
  Sidebar: J,
  Content: G,
  Topbar: K
});
export {
  de as default
};
//# sourceMappingURL=index.js.map
