function u(t) {
  return parseInt(t, 16);
}
function o(t) {
  var r;
  try {
    if (!t) return null;
    const e = /\w\w/g, [n, c, a] = ((r = t.match(e)) == null ? void 0 : r.map(u)) ?? [];
    return `${n}, ${c}, ${a}`;
  } catch {
    return null;
  }
}
export {
  o as hexToRgbVar
};
//# sourceMappingURL=hextToRgb.js.map
