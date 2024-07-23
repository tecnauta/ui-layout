import { jsxs as e, Fragment as o, jsx as a } from "react/jsx-runtime";
import { useMemo as z } from "react";
import i from "./ImageRender/index.js";
const m = () => (
  // This is needed to prevent images to show unstyled before the css loads =[
  /* @__PURE__ */ a("style", { children: `
      #ui-loader-logo {
        display: none;
      }
    ` })
), y = ({ logo: l, logoDarkMode: u }) => {
  const t = z(() => ({ light: l ?? "https://cdn.eduzzcdn.com/topbar/myeduzz.svg", dark: u ?? "https://cdn.eduzzcdn.com/topbar/myeduzz-white.svg" }), [l, u]);
  return /* @__PURE__ */ e(o, { children: [
    /* @__PURE__ */ a(m, {}),
    /* @__PURE__ */ e(
      "div",
      {
        id: "ui-loader-logo",
        className: "uizz-layout-mb-5 !uizz-layout-block uizz-layout-max-h-[5.625rem] uizz-layout-w-[9.375rem]",
        children: [
          /* @__PURE__ */ a("div", { className: "uizz-layout-w-full dark:uizz-layout-hidden", children: /* @__PURE__ */ a(
            i,
            {
              image: t.light,
              className: "uizz-layout-max-h-[5.625rem] uizz-layout-w-full  uizz-layout-max-w-[9.375rem]"
            }
          ) }),
          /* @__PURE__ */ a("div", { className: "uizz-layout-hidden uizz-layout-w-full dark:uizz-layout-block", children: /* @__PURE__ */ a(i, { image: t.dark, className: "uizz-layout-max-h-[5.625rem]  uizz-layout-max-w-[9.375rem]" }) })
        ]
      }
    )
  ] });
};
export {
  y as default
};
//# sourceMappingURL=index.js.map
