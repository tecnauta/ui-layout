import { jsx as t } from "react/jsx-runtime";
import { memo as c } from "react";
import { BulbFilled as d, BulbOutlined as u } from "@ant-design/icons";
import { useContextSelector as e } from "use-context-selector";
import r from "../../context.js";
import p from "../Action/index.js";
const a = ({ tooltip: m, badgeDot: i }) => {
  const l = e(r, (o) => o.layout.mode), n = e(r, (o) => o.layout.toggle);
  return /* @__PURE__ */ t(
    p,
    {
      onClick: () => n(),
      badgeDot: i,
      icon: l === "dark" ? /* @__PURE__ */ t(d, {}) : /* @__PURE__ */ t(u, {}),
      tooltip: m ?? "Tema"
    }
  );
}, M = c(a);
export {
  M as default
};
//# sourceMappingURL=index.js.map
