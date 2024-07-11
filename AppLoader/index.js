import { jsxs as o, Fragment as a, jsx as t } from "react/jsx-runtime";
import { useState as l, useMemo as p, Suspense as h } from "react";
import { AppLoaderContext as f } from "./context.js";
import x from "./Logo/index.js";
import { cn as r } from "../utils/cn.js";
import b from "../utils/errorFormatter.js";
const k = ({ children: y, logo: n, logoDarkMode: s }) => {
  const [i, e] = l(!0), [u, z] = l(null), c = p(
    () => ({
      show: () => e(!0),
      error: (m, d) => z({
        message: b(m),
        tryAgain: () => {
          d(), z(null);
        }
      }),
      hide: () => e(!1)
    }),
    []
  );
  return /* @__PURE__ */ o(a, { children: [
    /* @__PURE__ */ t(f.Provider, { value: c, children: /* @__PURE__ */ t(h, { children: y }) }),
    /* @__PURE__ */ t(
      "section",
      {
        className: r(
          "uizz-layout-pointer-events-none uizz-layout-fixed uizz-layout-inset-0 uizz-layout-z-[2147483002] uizz-layout-flex uizz-layout-animate-fadeOut uizz-layout-items-center uizz-layout-justify-center uizz-layout-bg-surface-default/[0.32] uizz-layout-backdrop-blur",
          { "!uizz-layout-pointer-events-auto !uizz-layout-animate-fadeIn": i }
        ),
        children: /* @__PURE__ */ t(
          "div",
          {
            className: r(
              "uizz-layout-mt-[-150vh] uizz-layout-flex uizz-layout-w-[200px] uizz-layout-flex-col uizz-layout-items-center uizz-layout-justify-center uizz-layout-transition-[0s,width] uizz-layout-duration-[0.5s]",
              {
                "!uizz-layout-mt-0": i,
                "!uizz-layout-w-[95vw]": u
              }
            ),
            children: u ? /* @__PURE__ */ o(a, { children: [
              /* @__PURE__ */ o("p", { className: "uizz-layout-text-center uizz-layout-text-lg uizz-layout-text-content-title", children: [
                "Não conseguimos carregar a aplicação",
                /* @__PURE__ */ t("small", { className: "uizz-layout-mt-1 uizz-layout-block uizz-layout-opacity-70", children: u.message })
              ] }),
              u.tryAgain && /* @__PURE__ */ t(
                "button",
                {
                  onClick: u.tryAgain,
                  className: "uizz-layout-mt-4 uizz-layout-h-[42px] uizz-layout-cursor-pointer uizz-layout-rounded uizz-layout-border uizz-layout-border-solid uizz-layout-border-content-disabled uizz-layout-bg-transparent uizz-layout-px-4 uizz-layout-py-2 uizz-layout-text-sm uizz-layout-text-content-title uizz-layout-text-inherit uizz-layout-transition-[0.3s] hover:uizz-layout-border-primary hover:uizz-layout-text-primary",
                  children: "Tentar Novamente"
                }
              )
            ] }) : /* @__PURE__ */ o(a, { children: [
              /* @__PURE__ */ t(x, { logo: n, logoDarkMode: s }),
              /* @__PURE__ */ t("div", { className: "uizz-layout-relative uizz-layout-block uizz-layout-h-1 uizz-layout-w-full uizz-layout-overflow-hidden uizz-layout-bg-[#0d2871]/25", children: /* @__PURE__ */ o("div", { className: "uizz-layout-bg-primary", children: [
                /* @__PURE__ */ t("div", { className: "uizz-layout-absolute uizz-layout-inset-y-0 uizz-layout-left-0 uizz-layout-animate-loader uizz-layout-bg-inherit" }),
                /* @__PURE__ */ t("div", { className: "l uizz-layout-absolute uizz-layout-inset-y-0 uizz-layout-left-0 uizz-layout-animate-loaderShort uizz-layout-bg-inherit" })
              ] }) })
            ] })
          }
        )
      }
    )
  ] });
};
export {
  k as default
};
//# sourceMappingURL=index.js.map
