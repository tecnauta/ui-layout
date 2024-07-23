export interface TopbarSearchProps {
    status?: '' | 'warning' | 'error';
    placeholder?: string;
    disableEscape?: boolean;
    disableShortcut?: boolean;
    onEnter?: (value: string, clear: () => void) => void;
}
declare const _default: import('react').MemoExoticComponent<({ disableShortcut, disableEscape, onEnter, status, placeholder }: TopbarSearchProps) => import("react/jsx-runtime").JSX.Element | null>;
export default _default;
