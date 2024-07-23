function r(t, e) {
  return t ? (window.LHCChatOptions = {}, window.LHCChatOptions.attr = [], window.LHCChatOptions.attr_prefill = [], window.LHCChatOptions.attr.push({ name: "ID", value: t.id, type: "hidden" }), window.LHCChatOptions.attr.push({ name: "Email", value: t.email, type: "hidden" }), window.LHCChatOptions.attr.push({ name: "Nome", value: t.name ?? t.email, type: "hidden" }), window.LHCChatOptions.attr_prefill.push({ name: "email", value: t.email }), window.LHCChatOptions.attr_prefill.push({ name: "username", value: t.name ?? t.email }), e && (window.LHCChatOptions.attr.push({ name: "Token", value: e, type: "hidden" }), window.LHCChatOptions.attr_prefill.push({ name: "id", value: t.id }), window.LHCChatOptions.attr_prefill.push({ name: "token", value: e })), d(), () => {
    var o;
    window.LHCChatOptions = {}, (o = window.$_LHC) == null || o.eventListener.emitEvent("terminated");
  }) : () => null;
}
async function d() {
  return window.__houston_chat_loader__ ? window.__houston_chat_loader__.then(() => {
    window.$_LHC.eventListener.emitEvent("terminated"), window.$_LHC.init();
  }) : (window.__houston_chat_loader__ = new Promise((t) => {
    window.LHCChatOptions.opt = {
      widget_height: 400,
      widget_width: 340,
      popup_height: 520,
      popup_width: 500
    };
    const e = document.referrer ? encodeURIComponent(document.referrer.substring(document.referrer.indexOf("://") + 1)) : "", o = document.location ? encodeURIComponent(window.location.href.substring(window.location.protocol.length)) : "", n = document.createElement("script");
    n.type = "text/javascript", n.async = !0, n.src = `https://chat.eduzz.com/index.php/por/chat/getstatus/(click)/internal/(position)/bottom_right/(ma)/br/(top)/350/(units)/pixels/(leaveamessage)/true/(department)/23/(theme)/12?r=${e}&l=${o};`, document.head.appendChild(n), document.body.classList.add("houston-topbar-chat-applied"), n.onload = async () => {
      let i = 0;
      for (; !window.$_LHC && i < 20; )
        i++, await new Promise((a) => setTimeout(() => a(), 1e3));
      t();
    };
  }), window.__houston_chat_loader__);
}
export {
  r as default
};
//# sourceMappingURL=chat.js.map
