import { jsxs as G, jsx as T } from "react/jsx-runtime";
import { useState as e, useCallback as r, useMemo as j } from "react";
import H from "../Content/index.js";
import I from "../context.js";
import k from "../hooks/useBoolean.js";
import J from "../hooks/useMode.js";
import K from "../Sidebar/index.js";
import L from "../Topbar/index.js";
import { cn as Q } from "../utils/cn.js";
import { hexToRgbVar as B } from "../utils/hextToRgb.js";
import W from "../utils/nestedComponent.js";
const X = ({
  className: N,
  children: q,
  primaryColor: o,
  secondaryColor: t,
  mode: w,
  persistMode: A,
  acceptModeBySearchParam: D,
  onModeChange: E,
  ...R
}) => {
  const [a, m] = e(!1), [s, d] = e(!1), [l, n] = e(!1), [u, U] = e(null), [p, V] = e(null), [c, f, z, h] = k(!1), [y, g, b, x] = k(!1), [C, M] = J({ mode: w, acceptModeBySearchParam: D, onModeChange: E, persistMode: A }), O = r(() => (m(!0), () => m(!1)), []), P = r(() => (d(!0), () => d(!1)), []), $ = r((i) => {
    U(i);
  }, []), S = r(() => (n(!0), () => n(!1)), []), v = r((i) => {
    V(i);
  }, []), Y = j(
    () => ({
      layout: {
        mode: C,
        toggle: M
      },
      topbar: {
        exists: a,
        centerPortal: u,
        register: O,
        registerCenterPortal: $
      },
      sidebar: {
        exists: s,
        opened: y,
        register: P,
        toogleOpened: g,
        trueOpened: b,
        falseOpened: x
      },
      userMenu: {
        opened: c,
        containerPortal: p,
        exists: l,
        register: S,
        registerContainerPortal: v,
        toogleOpened: f,
        trueOpened: z,
        falseOpened: h
      }
    }),
    [
      x,
      h,
      s,
      a,
      l,
      P,
      O,
      $,
      S,
      v,
      y,
      g,
      f,
      u,
      b,
      z,
      p,
      c,
      C,
      M
    ]
  ), F = j(
    () => `
      :root {
        ${o ? `
            --eduzz-theme-primary: ${o ?? "#0d2772"};
            --eduzz-theme-primary-rgb: ${B(o) ?? "13, 38, 115"};
            ` : ""}
      
        ${t ? `
            --eduzz-theme-secondary: ${t ?? "#ffbc00"};
            --eduzz-theme-secondary-rgb: ${B(t) ?? "255, 188, 0"};
            ` : ""}
        
      }
    `,
    [o, t]
  );
  return /* @__PURE__ */ G(I.Provider, { value: Y, children: [
    /* @__PURE__ */ T("style", { children: F }),
    /* @__PURE__ */ T(
      "div",
      {
        className: Q("eduzz-ui-layout uizz-layout-flex uizz-layout-min-h-screen uizz-layout-w-full", N, {
          "uizz-layout-pt-[var(--eduzz-ui-layout-topbar-height-rem)]": a
        }),
        ...R,
        children: q
      }
    )
  ] });
}, le = W(X, {
  Sidebar: K,
  Content: H,
  Topbar: L
});
export {
  le as default
};
//# sourceMappingURL=index.js.map
