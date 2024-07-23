function a(s) {
  var e, o;
  if (typeof s == "string")
    return s;
  switch ((s || {}).message) {
    case "no-internet":
    case "NETWORK_ERROR":
      return "Sem conexão com a internet";
    case "api-error":
      return s.status === 400 ? (e = s.data) != null && e.message ? `Dados inválidos: ${(o = s.data) == null ? void 0 : o.message}` : "Dados inválidos" : {
        "-1": "Não conseguimos se comunicar com o servidor",
        401: "Sem permissão de acesso",
        403: "Sem permissão de acesso",
        404: "Não encontrado",
        422: "Dados inválidos"
      }[s.status] || "Algo deu errado...";
    default:
      return "Algo deu errado...";
  }
}
export {
  a as default
};
//# sourceMappingURL=errorFormatter.js.map
