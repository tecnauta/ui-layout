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
      <div className='eduzz-ui-tw-relative eduzz-ui-tw-hidden eduzz-ui-tw-h-10 eduzz-ui-tw-flex-1 eduzz-ui-tw-items-center eduzz-ui-tw-justify-between eduzz-ui-tw-gap-3 eduzz-ui-tw-px-2 eduzz-ui-tw-py-1 lg:eduzz-ui-tw-flex'>
        <IconSearch size={20} />
        <input
          ref={inputRef}
          className={cx(
            'eduzz-ui-tw-h-10 eduzz-ui-tw-flex-1 eduzz-ui-tw-bg-transparent eduzz-ui-tw-text-base focus-visible:eduzz-ui-tw-outline-none [&:focus+div]:eduzz-ui-tw-border-[var(--eduzz-theme-primary)] [&:focus+div]:eduzz-ui-tw-outline-2 [&:hover+div]:eduzz-ui-tw-border-[var(--eduzz-theme-primary)]',
            {
              '[&+div]:!eduzz-ui-tw-border-red-500 [&:focus+div]:!eduzz-ui-tw-outline-red-200 [&:hover+div]:!eduzz-ui-tw-border-red-500':
                status === 'error',
              '[&+div]:!eduzz-ui-tw-border-yellow-500 [&:focus+div]:!eduzz-ui-tw-outline-yellow-200 [&:hover+div]:!eduzz-ui-tw-border-yellow-500':
                status === 'warning'
            }
          )}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={disableShortcut ? undefined : onKeyDown}
        />
        <div className='eduzz-ui-tw-pointer-events-none eduzz-ui-tw-absolute eduzz-ui-tw-inset-0 eduzz-ui-tw-rounded eduzz-ui-tw-border eduzz-ui-tw-outline eduzz-ui-tw-outline-0 eduzz-ui-tw-outline-offset-0 eduzz-ui-tw-outline-[rgba(var(--eduzz-theme-primary-rgb),0.3)] eduzz-ui-tw-transition' />
        {disableShortcut ? undefined : (
          <div className='eduzz-ui-tw-rounded eduzz-ui-tw-border eduzz-ui-tw-bg-gray-50 eduzz-ui-tw-px-2 eduzz-ui-tw-py-1 eduzz-ui-tw-text-xs'>{`${
            isMacOS ? '⌘' : 'Ctrl'
          }+K`}</div>
        )}
      </div>
    </Portal>
  );
};

export default memo(TopbarSearch);
