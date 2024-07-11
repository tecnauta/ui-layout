import n from "./import.js";
function f(i) {
  const o = "3880e664e69b156d6041b75c2e0abb1b", a = "133078e7bc2207b2cc245aa7cbaed56d", t = "95abf83ad8a1ba348a65eba0f9ee4d97", l = ["Black", "Golden", "Sensei"].includes(((i == null ? void 0 : i.belt) || "").split(" ")[0]);
  return (i == null ? void 0 : i.tag) === "unity" ? o : l || i != null && i.isClubeBlack ? a : t;
}
const h = ({ jwtToHyperflow: i, helpUser: o }) => {
  const a = o, t = n("https://webchat.hyperflow.global/sdk.js"), b = f(a);
  return t === "ready" && Hyperflow.init(b).on("getStarted", () => {
    var d;
    const l = {
      id: a == null ? void 0 : a.id,
      name: a == null ? void 0 : a.name.split(" ")[0],
      email: a == null ? void 0 : a.email,
      eliteChatToken: b,
      sender: i
    };
    a != null && a.isAccessPolicy && (l.original_id = a == null ? void 0 : a.originalUserId, l.original_name = (d = a == null ? void 0 : a.originalUserName) == null ? void 0 : d.split(" ")[0], l.original_email = a == null ? void 0 : a.originalUserEmail), Hyperflow.initFlow("faknvewds", l);
  }), null;
};
export {
  h as default
};
//# sourceMappingURL=chat.js.map
