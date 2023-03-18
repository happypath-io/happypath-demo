import { client, Provider } from '@/happyPath';
import 'antd/dist/reset.css';
import type { AppProps } from 'next/app';
import path from 'path';
import remoteConfig from '../happyPath.config';
import { useEffect, useState } from 'react';
export default function App({ Component, pageProps }: AppProps) {
  const [isConfigReady, setIsConfigReady] = useState(false);
  useEffect(() => {
    (async () => {
      console.log('loading remote config');
      remoteConfig.init();
      console.log('remote config loaded');
      setIsConfigReady(true);
    })();
  }, []);
  // if (!isConfigReady) {
  //   return <div>Loading...</div>;
  // }
  return (
    <Provider value={{ client }}>
      <Component {...pageProps} />
    </Provider>
  );
}
