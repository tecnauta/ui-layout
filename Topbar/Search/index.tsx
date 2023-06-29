import {
  useCallback,
  KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useRef,
  memo,
  useState,
  ChangeEvent
} from 'react';

import { useContextSelector } from 'use-context-selector';

import LayoutContext from '../../context';
import IconSearch from '../../Icons/Search';
import Portal from '../../Portal';
import cx from '../../utils/cx';

export interface TopbarSearchProps {
  status?: '' | 'warning' | 'error';
  placeholder?: string;
  disableEscape?: boolean;
  disableShortcut?: boolean;
  onEnter?: (value: string, clear: () => void) => void;
}

const isMacOS = typeof window !== 'undefined' ? navigator.userAgent.toLowerCase().includes('mac os') : false;

const TopbarSearch = ({
  disableShortcut,
  disableEscape,
  onEnter,
  status,
  placeholder = 'Pesquisar'
}: TopbarSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState<string>();
  const container = useContextSelector(LayoutContext, context => context.topbar.centerPortal);

  const onKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLInputElement>) => {
      const input = event.currentTarget;

      if (!disableEscape && event.key === 'Escape') {
        setValue('');
        input.blur();
        return;
      }

      if (event.key !== 'Enter') return;
      onEnter &&
        onEnter(input.value, () => {
          setValue('');
          input.blur();
        });
    },
    [disableEscape, onEnter]
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.target !== document.body || !inputRef.current) return;

      const metaKey = isMacOS ? e.metaKey : e.ctrlKey;
      if (e.key.toLowerCase() !== 'k' || !metaKey) return;

      e.preventDefault();
      e.stopPropagation();

      inputRef.current.focus();
    };

    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  if (!container) return null;

  return (
    <Portal target={container}>
      <div className='relative hidden h-10 flex-1 items-center justify-between gap-3 px-2 py-1 lg:flex'>
        <IconSearch size={20} />
        <input
          ref={inputRef}
          className={cx(
            'h-10 flex-1 bg-transparent text-base focus-visible:outline-none [&:focus+div]:border-[var(--eduzz-theme-primary)] [&:focus+div]:outline-2 [&:hover+div]:border-[var(--eduzz-theme-primary)]',
            {
              '[&+div]:!border-red-500 [&:focus+div]:!outline-red-200 [&:hover+div]:!border-red-500':
                status === 'error',
              '[&+div]:!border-yellow-500 [&:focus+div]:!outline-yellow-200 [&:hover+div]:!border-yellow-500':
                status === 'warning'
            }
          )}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={disableShortcut ? undefined : onKeyDown}
        />
        <div className='pointer-events-none absolute inset-0 rounded border outline outline-0 outline-offset-0 outline-[rgba(var(--eduzz-theme-primary-rgb),0.3)] transition' />
        {disableShortcut ? undefined : (
          <div className='rounded border bg-gray-50 px-2 py-1 text-xs'>{`${isMacOS ? '⌘' : 'Ctrl'}+K`}</div>
        )}
      </div>
    </Portal>
  );
};

export default memo(TopbarSearch);
