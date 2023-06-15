import { useEffect, useState } from 'react';

const breakpointsDown = {
  xs: '575px',
  sm: '767px',
  md: '991px',
  lg: '1199px',
  xl: '1599px'
} as const;

const breakpointsUp = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px'
} as const;

export type MediaMediaDownBreakpoints = typeof breakpointsDown;
export type MediaMediaUpBreakpoints = typeof breakpointsUp;

export const mediaQuery = {
  down: (key: keyof MediaMediaDownBreakpoints) => `@media (max-width:${breakpointsDown[key]})`,
  up: (key: keyof MediaMediaUpBreakpoints) => `@media (min-width:${breakpointsUp[key]})`
};

export function useMediaQueryDown(breakpoint: keyof MediaMediaDownBreakpoints) {
  return useMediaQuery(mediaQuery.down(breakpoint));
}

export function useMediaQueryUp(breakpoint: keyof MediaMediaUpBreakpoints) {
  return useMediaQuery(mediaQuery.up(breakpoint));
}

function useMediaQuery(query: string): boolean {
  const formattedQuery = query.replace('@media', '').trim();

  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }

    return false;
  };

  const [matches, setMatches] = useState(getMatches(formattedQuery));

  function handleChange() {
    setMatches(getMatches(formattedQuery));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(formattedQuery);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    const eventName = 'change';
    matchMedia.addEventListener(eventName, handleChange);

    return () => {
      matchMedia.removeEventListener(eventName, handleChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formattedQuery]);

  return matches;
}
