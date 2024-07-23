import { jsxs as z, jsx as t } from "react/jsx-runtime";
import { memo as g, useCallback as b, useEffect as y } from "react";
import { useContextSelector as f } from "use-context-selector";
import h from "../../../context.js";
import v from "../../../hooks/useBoolean.js";
import w from "../../../Icons/Close.js";
import k from "../../../Icons/Fullscreen.js";
import { cn as p } from "../../../utils/cn.js";
const P = g(({ currentApplication: n, applications: o, opened: e, onClose: d, ...s }) => {
  const [l, i, , c] = v(), m = f(h, (u) => u.layout.mode), x = b((u, a) => {
    const r = new URL(u);
    return r.searchParams.set("eduzzMode", a), r.href;
  }, []);
  return y(() => {
    const u = document.body.style.overflow;
    return document.body.style.overflow = l ? "uizz-layout-hidden" : u, () => {
      document.body.style.overflow = u;
    };
  }, [l]), y(() => {
    e || c();
  }, [e]), /* @__PURE__ */ z(
    "div",
    {
      className: p(
        "uizz-layout-group/apps uizz-layout-invisible uizz-layout-fixed uizz-layout-left-0 uizz-layout-top-[var(--eduzz-ui-layout-topbar-height-rem)] uizz-layout-z-[105] uizz-layout-box-border uizz-layout-max-h-[calc(100vh-var(--eduzz-ui-layout-topbar-height-rem))] uizz-layout-w-full uizz-layout-select-none uizz-layout-overflow-y-auto uizz-layout-rounded-[0_0_0.5rem_0.5rem] uizz-layout-bg-surface-default uizz-layout-shadow-[0px_8px_24px_rgb(var(--eduzz-ui-layout-content-title)_/_0.16)] sm:uizz-layout-left-2 sm:uizz-layout-w-[var(--eduzz-ui-layout-topbar-app-dropdown-width-rem)]",
        {
          "--opened !uizz-layout-visible": e,
          "--expanded !uizz-layout-left-0 uizz-layout-h-[calc(100%-var(--eduzz-ui-layout-topbar-height-rem))] !uizz-layout-w-full uizz-layout-overflow-x-auto uizz-layout-rounded-none uizz-layout-shadow-none": l
        }
      ),
      ...s,
      children: [
        /* @__PURE__ */ z("div", { className: "uizz-layout-box-border uizz-layout-hidden uizz-layout-h-14 uizz-layout-w-full uizz-layout-items-center uizz-layout-justify-between uizz-layout-border-0 uizz-layout-border-b uizz-layout-border-solid uizz-layout-border-gray-200 uizz-layout-px-4 uizz-layout-py-2 group-[.--expanded]/apps:uizz-layout-flex dark:uizz-layout-border-neutral-800 sm:uizz-layout-px-7", children: [
          /* @__PURE__ */ t("h5", { className: "uizz-layout-text-base uizz-layout-font-semibold", children: "Lista de Apps" }),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: i,
              className: "uizz-layout-flex uizz-layout-h-8 uizz-layout-w-8 uizz-layout-cursor-pointer uizz-layout-items-center uizz-layout-justify-center uizz-layout-rounded-full uizz-layout-border-none uizz-layout-bg-transparent uizz-layout-p-0 uizz-layout-text-content-title uizz-layout-transition-all hover:uizz-layout-bg-content-title/[0.03] dark:hover:uizz-layout-bg-content-title/[0.06]",
              children: /* @__PURE__ */ t(w, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ z("div", { className: "uizz-layout-box-border uizz-layout-grid uizz-layout-grid-cols-[repeat(2,1fr)] uizz-layout-flex-wrap uizz-layout-justify-items-center uizz-layout-gap-[0.5rem_0.5rem] uizz-layout-p-4 group-[.--expanded]/apps:uizz-layout-grid-cols-[1fr] group-[.--expanded]/apps:uizz-layout-gap-0 group-[.--expanded]/apps:uizz-layout-p-0 sm:uizz-layout-grid-cols-[repeat(3,1fr)] sm:group-[.--expanded]/apps:uizz-layout-grid-cols-[repeat(2,1fr)] sm:group-[.--expanded]/apps:uizz-layout-gap-6 sm:group-[.--expanded]/apps:uizz-layout-p-6 lg:group-[.--expanded]/apps:uizz-layout-grid-cols-[repeat(3,1fr)] xl:group-[.--expanded]/apps:uizz-layout-grid-cols-[repeat(4,1fr)]", children: [
          !(o != null && o.length) && /* @__PURE__ */ t("div", { className: "uizz-layout-col-start-1 uizz-layout-col-end-4 uizz-layout-flex uizz-layout-w-full uizz-layout-items-center uizz-layout-justify-center uizz-layout-p-12", children: "Carregando..." }),
          o == null ? void 0 : o.map((u) => {
            const a = u.application === n;
            return /* @__PURE__ */ z(
              "a",
              {
                className: p(
                  "uizz-layout-box-border uizz-layout-block uizz-layout-w-full uizz-layout-cursor-pointer uizz-layout-grid-cols-[2rem_1fr] uizz-layout-grid-rows-[1.5rem_auto] uizz-layout-gap-1 uizz-layout-rounded uizz-layout-border-gray-200 uizz-layout-px-2  uizz-layout-py-4 uizz-layout-text-inherit uizz-layout-no-underline visited:uizz-layout-text-inherit hover:uizz-layout-bg-content-title/[0.03] hover:uizz-layout-text-inherit group-[.--expanded]/apps:uizz-layout-grid group-[.--expanded]/apps:uizz-layout-border-b group-[.--expanded]/apps:uizz-layout-p-4 dark:uizz-layout-border-neutral-800 dark:hover:uizz-layout-bg-content-title/[0.06] sm:uizz-layout-grid-cols-[4rem_1fr] sm:group-[.--expanded]/apps:uizz-layout-border",
                  a && "uizz-layout-bg-content-title/[0.03] dark:uizz-layout-bg-content-title/[0.06]"
                ),
                href: a ? void 0 : x(u.url, m),
                rel: "noopener noreferrer",
                target: "_blank",
                onClick: a ? d : void 0,
                children: [
                  /* @__PURE__ */ t(
                    "img",
                    {
                      src: u.icon,
                      className: "uizz-layout-m-auto uizz-layout-mb-2 uizz-layout-block uizz-layout-max-h-10 uizz-layout-max-w-[2.5rem] group-[.--expanded]/apps:uizz-layout-max-h-[1.50rem] group-[.--expanded]/apps:uizz-layout-max-w-[1.50rem] sm:group-[.--expanded]/apps:uizz-layout-max-h-[3.1rem] sm:group-[.--expanded]/apps:uizz-layout-max-w-[3.1rem]"
                    }
                  ),
                  /* @__PURE__ */ t("p", { className: "uizz-layout-m-0 uizz-layout-text-center uizz-layout-text-sm uizz-layout-leading-normal group-[.--expanded]/apps:uizz-layout-text-left group-[.--expanded]/apps:uizz-layout-text-base", children: u.label }),
                  /* @__PURE__ */ t("p", { className: "uizz-layout-col-span-2 uizz-layout-m-0 uizz-layout-mt-0.5 uizz-layout-hidden uizz-layout-overflow-hidden uizz-layout-text-base uizz-layout-leading-normal uizz-layout-text-content-title/[0.45] uizz-layout-opacity-80 group-[.--expanded]/apps:uizz-layout-block sm:uizz-layout-col-span-1 sm:uizz-layout-col-start-2", children: u.description })
                ]
              },
              u.application
            );
          })
        ] }),
        !!(o != null && o.length) && /* @__PURE__ */ z(
          "button",
          {
            className: "uizz-layout-flex uizz-layout-h-[50px] uizz-layout-w-full uizz-layout-cursor-pointer uizz-layout-flex-row uizz-layout-items-center uizz-layout-justify-center uizz-layout-gap-2 uizz-layout-border-none uizz-layout-bg-transparent uizz-layout-text-content-title uizz-layout-transition-all hover:uizz-layout-bg-content-title/[0.04] group-[.--expanded]/apps:uizz-layout-hidden",
            onClick: i,
            children: [
              /* @__PURE__ */ t(k, {}),
              "Expandir"
            ]
          }
        )
      ]
    }
  );
});
export {
  P as default
};
//# sourceMappingURL=index.js.map
