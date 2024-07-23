function s(e) {
  var o, a;
  if (typeof e == "string")
    return e;
  switch ((e || {}).message) {
    case "no-internet":
    case "NETWORK_ERROR":
      return "Sem conexão com a internet";
    case "api-error":
      return e.status === 400 ? (o = e.data) != null && o.message ? `Dados inválidos: ${(a = e.data) == null ? void 0 : a.message}` : "Dados inválidos" : {
        "-1": "Não conseguimos se comunicar com o servidor",
        401: "Sem permissão de acesso",
        403: "Sem permissão de acesso",
        404: "Não encontrado",
        422: "Dados inválidos"
      }[e.status] || "Algo deu errado...";
    default:
      return "Algo deu errado...";
  }
}
export {
  s as default
};
//# sourceMappingURL=errorFormatter.js.map
