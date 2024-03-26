import { memo } from 'react';

import { BulbOutlined, BulbFilled } from '@ant-design/icons';

import { useContextSelector } from 'use-context-selector';

import LayoutContext from '../../context';
import Action from '../Action';

export type ThemeSwitcherProps = {
  tooltip?: string;
  badgeDot?: boolean;
};

const ModeSwitcher = ({ tooltip, badgeDot }: ThemeSwitcherProps) => {
  const mode = useContextSelector(LayoutContext, context => context.layout.mode);
  const toggleMode = useContextSelector(LayoutContext, context => context.layout.toggle);

  return (
    <Action
      onClick={() => toggleMode()}
      badgeDot={badgeDot}
      icon={mode === 'dark' ? <BulbFilled /> : <BulbOutlined />}
      tooltip={tooltip ?? 'Tema'}
    />
  );
};

export default memo(ModeSwitcher);
