import Content from './Content';
import Layout from './Layout';
import Sidebar, { SidebarProps as SidebarPropsExport } from './Sidebar';
import Topbar, { TopbarProps as TopbarPropsExport } from './Topbar';

export { Sidebar, Content, Topbar };

export const TOPBAR_HEIGHT = 64;
export const TOPBAR_DROPDOWN_WIDTH = 336;
export const TOPBAR_MENU_MIN_WIDTH_IN_PX = 260;

export const MENU_WIDTH = 248;

export type SidebarProps = SidebarPropsExport;
export type TopbarProps = TopbarPropsExport;

export default Layout;
