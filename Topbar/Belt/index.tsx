import * as React from 'react';

import { Typography } from 'antd';

import { useContextSelector } from 'use-context-selector';

import styled, { css, cx, StyledProp } from '../../../styled';
import BeltIcon from '../../Icons/Belt';
import TopbarContext from '../context';

const supportedBelts = ['white', 'red', 'orange', 'green', 'black', 'golden'];

const Belt = React.memo<StyledProp>(({ className }) => {
  const belt = useContextSelector(TopbarContext, context => context.user?.belt);

  const [beltColor, setBeltColor] = React.useState('');
  const [beltClass, setBeltClass] = React.useState('');

  React.useEffect(() => {
    if (!belt) {
      setBeltColor('');
      setBeltClass('');
      return;
    }

    const nameBeltClass = belt.toString().toLowerCase().split(' ')[0];

    const classBelt = supportedBelts.includes(nameBeltClass)
      ? nameBeltClass
      : nameBeltClass === 'sensei'
      ? 'black'
      : 'white';

    setBeltColor(belt);
    setBeltClass(classBelt);
  }, [belt]);

  if (!beltColor) {
    return null;
  }

  return (
    <div className={cx(className, `ui-eduzz-topbar-belt-color-${beltClass}`)}>
      <div className='ui-eduzz-topbar-belt-badge'>
        <BeltIcon size={25} className='ui-eduzz-topbar-belt-icon' />
        <Typography className='ui-eduzz-topbar-belt-text'>{beltColor}</Typography>
      </div>
    </div>
  );
});

export default styled(Belt, { label: 'ui-eduzz-topbar-belt' })(
  ({ theme }) => css`
    color: white;
    display: flex;
    align-items: center;
    padding: 8px 16px 8px 16px;
    border-radius: 16px;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
    margin-right: 1.5rem;
    height: ${theme.pxToRem(32)}rem;

    ${theme.mediaQuery.down('md')} {
      display: none;
    }

    ${theme.mediaQuery.down('lg')} {
      padding: 8px 10px 8px 10px;
      border-top-left-radius: 0;
      border-bottom-right-radius: 0;

      & .ui-eduzz-topbar-belt-text {
        display: none;
      }
    }

    &.none {
      display: none;
    }

    &.ui-eduzz-topbar-belt-color-white {
      background-color: ${theme.beltColor.white};
      color: ${theme.beltColor.white};

      .ui-eduzz-topbar-belt-badge {
        color: ${theme.beltForegroundColor?.white ?? 'black'};
      }
    }

    &.ui-eduzz-topbar-belt-color-red {
      background-color: ${theme.beltColor.red};
      color: ${theme.beltColor.red};

      .ui-eduzz-topbar-belt-badge {
        color: ${theme.beltForegroundColor?.red ?? 'white'};
      }
    }

    &.ui-eduzz-topbar-belt-color-orange {
      background-color: ${theme.beltColor.orange};
      color: ${theme.beltColor.orange};

      .ui-eduzz-topbar-belt-badge {
        color: ${theme.beltForegroundColor?.orange ?? 'white'};
      }
    }

    &.ui-eduzz-topbar-belt-color-green {
      background-color: ${theme.beltColor.green};
      color: ${theme.beltColor.green};

      .ui-eduzz-topbar-belt-badge {
        color: ${theme.beltForegroundColor?.green ?? 'white'};
      }
    }

    &.ui-eduzz-topbar-belt-color-black {
      background-color: ${theme.beltColor.black};
      color: ${theme.beltColor.black};

      .ui-eduzz-topbar-belt-badge {
        color: ${theme.beltForegroundColor?.black ?? 'white'};
      }
    }

    &.ui-eduzz-topbar-belt-color-golden {
      background-color: ${theme.beltColor.golden};
      color: ${theme.beltColor.golden};

      .ui-eduzz-topbar-belt-badge {
        color: ${theme.beltForegroundColor?.golden ?? 'white'};
      }
    }

    .ui-eduzz-topbar-belt-badge {
      display: flex;
      align-items: center;

      & > .ui-eduzz-topbar-belt-text {
        color: inherit;
        white-space: nowrap;
        text-transform: uppercase;
        font-style: italic;
        font-size: 14px;
        margin-left: 0.25rem;
      }
    }

    .ui-eduzz-topbar-belt-icon {
      min-width: ${theme.pxToRem(32)}rem;
      display: flex;
      align-items: center;
    }
  `
);
