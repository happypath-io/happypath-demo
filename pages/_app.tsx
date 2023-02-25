import { client, Provider } from '@/happyPath';
import 'antd/dist/reset.css';
import type { AppProps } from 'next/app';
import path from 'path';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={{ client }}>
      <Component {...pageProps} />
    </Provider>
  );
}
