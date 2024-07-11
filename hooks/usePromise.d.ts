import { DependencyList } from 'react';

export default function usePromise<T>(promiseGenerator: (isSubscribed: () => boolean) => Promise<T>, deps: DependencyList): [T | undefined, any, boolean];
