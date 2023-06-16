import * as React from 'react';

import styled from '@emotion/styled';

import { TOPBAR_HEIGHT } from '../../context';

export interface LogoProps {
  logo?: string;
  logoMobile?: string;
  logoDarkMode?: string;
  logoMobileDarkMode?: string;
  className?: string;
  wrapper?: React.JSXElementConstructor<{ children: React.ReactNode; className: string }>;
}

const Logo = ({ logo, logoMobile, logoDarkMode, logoMobileDarkMode, className, wrapper: Wrapper }: LogoProps) => {
  function getLogos() {
    // if (theme.mode === 'dark') {
    //   return {
    //     desktop: logoDarkMode ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/myeduzz-white.svg',
    //     mobile: logoMobileDarkMode ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/myeduzz-mobile.svg'
    //   };
    // }

    return {
      desktop: logo ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/myeduzz.svg',
      mobile: logoMobile ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/myeduzz-mobile.svg'
    };
  }

  const logos = getLogos();

  if (Wrapper) {
    return (
      <Wrapper className={className as string}>
        <img className='ui-eduzz-layout-topbar-logo-default' src={logos.desktop} />
        <img className='ui-eduzz-layout-topbar-logo-mobile' src={logos.mobile} />
      </Wrapper>
    );
  }

  return (
    <div className={className}>
      <img className='ui-eduzz-layout-topbar-logo-default' src={logos.desktop} />
      <img className='ui-eduzz-layout-topbar-logo-mobile' src={logos.mobile} />
    </div>
  );
};

export default styled(Logo, { label: 'ui-eduzz-layout-topbar-logo' })`
  height: 80%;
  width: auto;
  margin-inline: 0.5rem;

  & > img {
    max-width: 100%;
    max-height: 100%;
    height: ${TOPBAR_HEIGHT}px;
  }

  & > .ui-eduzz-layout-topbar-logo-mobile {
    display: none;
  }

  @media (max-width: 1199px) {
    width: 2rem;

    & .ui-eduzz-layout-topbar-logo-default {
      display: none;
    }

    & .ui-eduzz-layout-topbar-logo-mobile {
      display: block;
    }
  }
`;
