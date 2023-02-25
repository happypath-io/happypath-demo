import { ReactNode, useContext, useEffect, useState } from 'react';
import { HappyPathContextType } from '../context/HappyPathContext';

type EmptyState = {
  header: string;
  description: string;
  primaryActionProps: {
    type: 'primary';
    children: ReactNode;
    onClick: () => void;
  };
};

type Alert = {
  message: string;
};

type Responses = (EmptyState & Alert) | null;

export function createUseHappyPath<T>(
  Context: React.Context<HappyPathContextType<T> | undefined>
) {
  return function useHappyPath<K extends keyof T>({
    resourceId,
  }: {
    resourceId: K;
  }) {
    const context = useContext(Context);
    const [data, setData] = useState<Awaited<T[K]>>();
    const client = context?.client;
    useEffect(() => {
      (async () => {
        const response = await client?.fetch({ resourceId });
        setData(response);
      })();
    }, [resourceId, client]);

    return { data };
  };
}
