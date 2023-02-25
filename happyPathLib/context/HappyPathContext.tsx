import { createContext, ReactNode } from 'react';
import { Client, ClientType } from '../client';
export type HappyPathContextType<T> = {
  client: Client<T>;
};

export function createHappyPathContext<T>() {
  const HappyPathContext = createContext<HappyPathContextType<T> | undefined>(
    undefined
  );
  return HappyPathContext;
}
