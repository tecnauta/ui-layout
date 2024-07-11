import { RefObject, DependencyList } from 'react';

type AnyEvent = MouseEvent | TouchEvent;
declare function useClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T> | T | undefined | null, handler: (event: AnyEvent) => void, deps: DependencyList): void;
export default useClickOutside;
