function c(n) {
  return parseInt(n, 16);
}
function o(n) {
  var r;
  try {
    if (!n)
      return null;
    const t = /\w\w/g, [u, a, e] = ((r = n.match(t)) == null ? void 0 : r.map(c)) ?? [];
    return `${u}, ${a}, ${e}`;
  } catch {
    return null;
  }
}
export {
  o as hexToRgbVar
};
//# sourceMappingURL=hextToRgb.js.map
