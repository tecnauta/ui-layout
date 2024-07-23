import { jsxs as F, jsx as P } from "react/jsx-runtime";
import { useState as e, useCallback as t, useMemo as v } from "react";
import G from "../Content/index.js";
import I from "../context.js";
import L from "../hooks/useBoolean.js";
import J from "../hooks/useMode.js";
import K from "../Sidebar/index.js";
import Q from "../Topbar/index.js";
import { cn as W } from "../utils/cn.js";
import { hexToRgbVar as H } from "../utils/hextToRgb.js";
import X from "../utils/nestedComponent.js";
const Y = ({
  className: V,
  children: j,
  primaryColor: r,
  secondaryColor: o,
  mode: k,
  persistMode: w,
  acceptModeBySearchParam: B,
  onModeChange: N,
  ...R
}) => {
  const [n, a] = e(!1), [u, i] = e(!1), [d, l] = e(!1), [p, q] = e(null), [m, A] = e(null), [c, f, b, g] = L(!1), [z, M, O, h] = L(!1), [x, y] = J({ mode: k, acceptModeBySearchParam: B, onModeChange: N, persistMode: w }), C = t(() => (a(!0), () => a(!1)), []), S = t(() => (i(!0), () => i(!1)), []), U = t((s) => {
    q(s);
  }, []), T = t(() => (l(!0), () => l(!1)), []), $ = t((s) => {
    A(s);
  }, []), D = v(
    () => ({
      layout: {
        mode: x,
        toggle: y
      },
      topbar: {
        exists: n,
        centerPortal: p,
        register: C,
        registerCenterPortal: U
      },
      sidebar: {
        exists: u,
        opened: z,
        register: S,
        toogleOpened: M,
        trueOpened: O,
        falseOpened: h
      },
      userMenu: {
        opened: c,
        containerPortal: m,
        exists: d,
        register: T,
        registerContainerPortal: $,
        toogleOpened: f,
        trueOpened: b,
        falseOpened: g
      }
    }),
    [
      h,
      g,
      u,
      n,
      d,
      S,
      C,
      U,
      T,
      $,
      z,
      M,
      f,
      p,
      O,
      b,
      m,
      c,
      x,
      y
    ]
  ), E = v(
    () => `
      :root {
        ${r ? `
            --eduzz-theme-primary: ${r ?? "#0d2772"};
            --eduzz-theme-primary-rgb: ${H(r) ?? "13, 38, 115"};
            ` : ""}
      
        ${o ? `
            --eduzz-theme-secondary: ${o ?? "#ffbc00"};
            --eduzz-theme-secondary-rgb: ${H(o) ?? "255, 188, 0"};
            ` : ""}
        
      }
    `,
    [r, o]
  );
  return /* @__PURE__ */ F(I.Provider, { value: D, children: [
    /* @__PURE__ */ P("style", { children: E }),
    /* @__PURE__ */ P(
      "div",
      {
        className: W("eduzz-ui-layout uizz-layout-flex uizz-layout-min-h-screen uizz-layout-w-full", V, {
          "uizz-layout-pt-[var(--eduzz-ui-layout-topbar-height-rem)]": n
        }),
        ...R,
        children: j
      }
    )
  ] });
}, de = X(Y, {
  Sidebar: K,
  Content: G,
  Topbar: Q
});
export {
  de as default
};
//# sourceMappingURL=index.js.map
