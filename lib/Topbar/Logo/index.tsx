import * as React from 'react';

import './style.css';

export interface LogoProps {
  logo?: string;
  logoMobile?: string;
  logoDarkMode?: string;
  logoMobileDarkMode?: string;
  wrapper?: React.JSXElementConstructor<{ children: React.ReactNode; className: string }>;
}

const Logo = ({ logo, logoMobile, logoDarkMode, logoMobileDarkMode, wrapper: Wrapper }: LogoProps) => {
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
      <Wrapper className='eduzz-ui-layout-topbar-logo'>
        <img className='eduzz-ui-layout-topbar-logo-default' src={logos.desktop} />
        <img className='eduzz-ui-layout-topbar-logo-mobile' src={logos.mobile} />
      </Wrapper>
    );
  }

  return (
    <div className='eduzz-ui-layout-topbar-logo'>
      <img className='eduzz-ui-layout-topbar-logo-default' src={logos.desktop} />
      <img className='eduzz-ui-layout-topbar-logo-mobile' src={logos.mobile} />
    </div>
  );
};

export default Logo;
