import { jsx as t } from "react/jsx-runtime";
import { memo as p } from "react";
import { BulbFilled as n, BulbOutlined as u } from "@ant-design/icons";
import { useContextSelector as r } from "use-context-selector";
import m from "../../context.js";
import d from "../Action/index.js";
const f = ({ tooltip: e, badgeDot: l }) => {
  const i = r(m, (o) => o.layout.mode), a = r(m, (o) => o.layout.toggle);
  return /* @__PURE__ */ t(
    d,
    {
      onClick: () => a(),
      badgeDot: l,
      icon: i === "dark" ? /* @__PURE__ */ t(n, {}) : /* @__PURE__ */ t(u, {}),
      tooltip: e ?? "Tema"
    }
  );
}, y = p(f);
export {
  y as default
};
//# sourceMappingURL=index.js.map
