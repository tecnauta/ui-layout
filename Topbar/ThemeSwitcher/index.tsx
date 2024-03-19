import { memo, useEffect } from 'react';

import { BulbOutlined, BulbFilled } from '@ant-design/icons';

import { useContextSelector } from 'use-context-selector';

import LayoutContext from '../../context';
import Action from '../Action';

const applyThemeChange = (desiredTheme: 'light' | 'dark') => {
  if (!document?.body) {
    return;
  }

  document.body.setAttribute('data-eduzz-theme', desiredTheme);
};

export type ThemeSwitcherProps = {
  tooltip?: string;
  badgeDot?: boolean;
  onChange?: (newTheme: 'light' | 'dark') => void;
};

const ThemeSwitcher = ({ tooltip, badgeDot, onChange }: ThemeSwitcherProps) => {
  const theme = useContextSelector(LayoutContext, context => context.layout.theme);
  const toggleTheme = useContextSelector(LayoutContext, context => context.layout.toggle);

  useEffect(() => {
    applyThemeChange(theme);

    if (onChange) {
      onChange(theme);
    }
  }, [theme]);

  return (
    <Action
      onClick={() => toggleTheme()}
      badgeDot={badgeDot}
      icon={theme === 'dark' ? <BulbFilled /> : <BulbOutlined />}
      tooltip={tooltip ?? 'Tema'}
    />
  );
};

export default memo(ThemeSwitcher);
