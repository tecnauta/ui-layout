import { ReactNode, forwardRef, useMemo, memo } from 'react';

import SidebarGroupContext, { SidebarGroupContextType } from './context';
import CollapseEffect from '../../CollapseEffect';
import useBoolean from '../../hooks/useBoolean';
import cx from '../../utils/cx';

import './styles.css';

export interface SidebarGroupProps {
  label?: ReactNode;
  children: ReactNode;
  tabIndex?: number;
  id?: string;
}

const SidebarGroup = forwardRef<HTMLLIElement, SidebarGroupProps>(({ id, children, label, tabIndex }, ref) => {
  const [isExpanded, toogleExpanded, trueExpanded] = useBoolean(true);

  const contextValue = useMemo<SidebarGroupContextType>(() => {
    return { onItemActive: trueExpanded };
  }, [trueExpanded]);

  return (
    <SidebarGroupContext.Provider value={contextValue}>
      <li id={id} className='eduzz-ui-layout-sidebar-group' ref={ref}>
        {!!label && (
          <div
            className={cx(
              'eduzz-ui-layout-sidebar-group-item',
              isExpanded && 'eduzz-ui-layout-sidebar-group-item-expanded'
            )}
            onClick={toogleExpanded}
            tabIndex={tabIndex ?? 1}
          >
            <div className='eduzz-ui-layout-sidebar-group-indicator' />

            <div className='eduzz-ui-layout-sidebar-group-content'>
              <span className='eduzz-ui-layout-sidebar-group-label'>{label}</span>
            </div>
          </div>
        )}

        <ul className='eduzz-ui-layout-sidebar-group-items'>
          <CollapseEffect visibled={isExpanded}>
            <div className='eduzz-ui-layout-sidebar-group-items-content'>{children}</div>
          </CollapseEffect>
        </ul>
      </li>
    </SidebarGroupContext.Provider>
  );
});

export default memo(SidebarGroup);
