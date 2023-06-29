import Content from './Content';
import Layout from './Layout';
import Sidebar, { SidebarProps as SidebarPropsExport } from './Sidebar';
import Topbar, { TopbarProps as TopbarPropsExport } from './Topbar';

import './index.css';

console.log('here');

export { Sidebar, Content, Topbar };

export type SidebarProps = SidebarPropsExport;
export type TopbarProps = TopbarPropsExport;

export default Layout;
