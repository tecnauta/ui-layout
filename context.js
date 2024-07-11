import { createContext as e } from "use-context-selector";
const t = e({
  layout: {
    mode: "light",
    toggle: () => null
  },
  topbar: {
    exists: !1,
    centerPortal: null,
    register: () => () => null,
    registerCenterPortal: () => null
  },
  sidebar: {
    exists: !1,
    opened: !1,
    register: () => () => null,
    toogleOpened: () => null,
    trueOpened: () => null,
    falseOpened: () => null
  },
  userMenu: {
    exists: !1,
    opened: !1,
    containerPortal: null,
    register: () => () => null,
    registerContainerPortal: () => null,
    toogleOpened: () => null,
    trueOpened: () => null,
    falseOpened: () => null
  }
});
export {
  t as default
};
//# sourceMappingURL=context.js.map
