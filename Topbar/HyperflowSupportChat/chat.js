import d from "./import.js";
function f(o) {
  return "865b006f4733ca82bc33b5a7a976040e";
}
const m = ({ jwtToHyperflow: o, helpUser: n }) => {
  const i = n, p = d("https://webchat.hyperflow.global/sdk.js"), l = f();
  return p === "ready" && Hyperflow.init(l).on("getStarted", () => {
    var t;
    const a = {
      id: i == null ? void 0 : i.id,
      name: i == null ? void 0 : i.name.split(" ")[0],
      email: i == null ? void 0 : i.email,
      eliteChatToken: l,
      sender: o
    };
    i != null && i.isAccessPolicy && (a.original_id = i == null ? void 0 : i.originalUserId, a.original_name = (t = i == null ? void 0 : i.originalUserName) == null ? void 0 : t.split(" ")[0], a.original_email = i == null ? void 0 : i.originalUserEmail), Hyperflow.initFlow("faknvewds", a);
  }), null;
};
export {
  m as default
};
//# sourceMappingURL=chat.js.map
