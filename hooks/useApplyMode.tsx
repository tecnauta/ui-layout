import { useCallback, useEffect } from 'react';

export default function useApplyMode(mode: 'dark' | 'light', onModeChange?: (newTheme: 'light' | 'dark') => void) {
  const applyModeChange = useCallback((desiredTheme: 'light' | 'dark') => {
    if (!document?.body) {
      return;
    }

    document.body.setAttribute('data-eduzz-theme', desiredTheme);
  }, []);

  useEffect(() => {
    console.log('mode ->', mode);
    applyModeChange(mode);

    if (onModeChange) {
      onModeChange(mode);
    }
  }, [mode]);
}
