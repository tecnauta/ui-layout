function c(r) {
  return parseInt(r, 16);
}
function o(r) {
  var t;
  try {
    if (!r)
      return null;
    const n = /\w\w/g, [u, a, e] = ((t = r.match(n)) == null ? void 0 : t.map(c)) ?? [];
    return `${u}, ${a}, ${e}`;
  } catch {
    return null;
  }
}
export {
  o as hexToRgbVar
};
//# sourceMappingURL=hextToRgb.js.map
