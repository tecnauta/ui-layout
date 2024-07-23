import { jsxs as e, Fragment as z, jsx as a } from "react/jsx-runtime";
import { useMemo as t } from "react";
import i from "./ImageRender/index.js";
const m = () => (
  // This is needed to prevent images to show unstyled before the css loads =[
  /* @__PURE__ */ a("style", { children: `
      #ui-loader-logo {
        display: none;
      }
    ` })
), c = ({ logo: o, logoDarkMode: l }) => {
  const u = t(() => ({ light: o ?? "https://cdn.eduzzcdn.com/topbar/myeduzz.svg", dark: l ?? "https://cdn.eduzzcdn.com/topbar/myeduzz-white.svg" }), [o, l]);
  return /* @__PURE__ */ e(z, { children: [
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
              image: u.light,
              className: "uizz-layout-max-h-[5.625rem] uizz-layout-w-full  uizz-layout-max-w-[9.375rem]"
            }
          ) }),
          /* @__PURE__ */ a("div", { className: "uizz-layout-hidden uizz-layout-w-full dark:uizz-layout-block", children: /* @__PURE__ */ a(i, { image: u.dark, className: "uizz-layout-max-h-[5.625rem]  uizz-layout-max-w-[9.375rem]" }) })
        ]
      }
    )
  ] });
};
export {
  c as default
};
//# sourceMappingURL=index.js.map
