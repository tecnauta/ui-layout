import * as React from 'react';

export default function usePromise<T>(
  promiseGenerator: (isSubscribed: () => boolean) => Promise<T>,
  deps: React.DependencyList
): [T | undefined, any, boolean] {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [result, setResult] = React.useState<T | undefined>();
  const [error, setError] = React.useState<any>();

  React.useEffect(() => {
    let isSubscribed = true;
    setLoading(true);
    setError(undefined);

    promiseGenerator(() => isSubscribed)
      .then(result => {
        if (!isSubscribed) return;
        setResult(() => result);
      })
      .catch(err => {
        if (!isSubscribed) return;
        setError(err);
      })
      .finally(() => setLoading(false));

    return () => {
      isSubscribed = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [result, error, loading];
}
