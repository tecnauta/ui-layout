import { jsx as t } from "react/jsx-runtime";
import { memo as p } from "react";
import { BulbFilled as f, BulbOutlined as u } from "@ant-design/icons";
import { useContextSelector as r } from "use-context-selector";
import m from "../../context.js";
import d from "../Action/index.js";
const n = ({ tooltip: e, badgeDot: i }) => {
  const l = r(m, (o) => o.layout.mode), a = r(m, (o) => o.layout.toggle);
  return /* @__PURE__ */ t(
    d,
    {
      onClick: () => a(),
      badgeDot: i,
      icon: l === "dark" ? /* @__PURE__ */ t(f, {}) : /* @__PURE__ */ t(u, {}),
      tooltip: e ?? "Tema"
    }
  );
}, k = p(n);
export {
  k as default
};
//# sourceMappingURL=index.js.map
