function o() {
  if ((() => {
    try {
      return !!window.localStorage;
    } catch {
      return !1;
    }
  })())
    return window.localStorage;
  console.warn("Cannot find localStorage, features that depend on it will not work!");
}
export {
  o as getLocalStorageInstance
};
//# sourceMappingURL=localStorage.js.map
