import m from "./import.js";
function k(i, a) {
  const o = a.chatUnityID, d = a.chatBlackID, p = a.chatEliteID, h = ["Black", "Golden", "Sensei"].includes(((i == null ? void 0 : i.belt) || "").split(" ")[0]);
  return (i == null ? void 0 : i.tag) === "unity" ? o : h || i != null && i.isClubeBlack ? d : p;
}
const w = ({ jwtToHyperflow: i, currentUser: a, hyperflowConfig: o }) => {
  const d = m("https://webchat.hyperflow.global/sdk.js"), p = k(a, o);
  return d === "ready" && Hyperflow.init(p).on("getStarted", () => {
    var h;
    const l = {
      id: a == null ? void 0 : a.id,
      name: a == null ? void 0 : a.name.split(" ")[0],
      email: a == null ? void 0 : a.email,
      sender: i
    };
    a != null && a.isAccessPolicy && (l.original_id = a == null ? void 0 : a.originalUserId, l.original_name = (h = a == null ? void 0 : a.originalUserName) == null ? void 0 : h.split(" ")[0], l.original_email = a == null ? void 0 : a.originalUserEmail), Hyperflow.initFlow(o.flowId, l);
  }), null;
};
export {
  w as default
};
//# sourceMappingURL=chat.js.map
