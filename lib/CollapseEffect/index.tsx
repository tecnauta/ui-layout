import * as React from 'react';

import { Collapse as AntdCollapse } from 'antd';

import './styles.css';

export interface CollapseProps {
  id?: string;
  visibled: boolean;
  children?: React.ReactNode;
}

const CollapseEffect = ({ children, visibled, id }: CollapseProps) => {
  return (
    <AntdCollapse
      ghost
      bordered={false}
      activeKey={visibled ? '1' : undefined}
      className='eduzz-ui-layout-collapse-effect'
    >
      <AntdCollapse.Panel key={'1'} header='' id={id}>
        {children}
      </AntdCollapse.Panel>
    </AntdCollapse>
  );
};

export default CollapseEffect;
