import d from "./import.js";
function r(e) {
  const a = "3880e664e69b156d6041b75c2e0abb1b", l = "133078e7bc2207b2cc245aa7cbaed56d", o = "95abf83ad8a1ba348a65eba0f9ee4d97", i = ["Black", "Golden", "Sensei"].includes(((e == null ? void 0 : e.belt) || "").split(" ")[0]);
  return (e == null ? void 0 : e.tag) === "unity" ? a : i || e != null && e.isClubeBlack ? l : o;
}
const u = ({ jwtToHyperflow: e, helpUser: a }) => {
  const l = a, o = d("https://webchat.hyperflow.global/sdk.js"), i = r(l);
  return o === "ready" && Hyperflow.init(i).on("getStarted", () => {
    var t;
    const n = {
      id: l == null ? void 0 : l.id,
      name: l == null ? void 0 : l.name.split(" ")[0],
      email: l == null ? void 0 : l.email,
      eliteChatToken: i,
      sender: e
    };
    l != null && l.isAccessPolicy && (n.original_id = l == null ? void 0 : l.originalUserId, n.original_name = (t = l == null ? void 0 : l.originalUserName) == null ? void 0 : t.split(" ")[0], n.original_email = l == null ? void 0 : l.originalUserEmail), Hyperflow.initFlow("faknvewds", n);
  }), null;
};
export {
  u as default
};
//# sourceMappingURL=chat.js.map
