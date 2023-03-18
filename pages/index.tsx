import React, { useEffect } from 'react';
import remoteConfig from '../happyPath.config';

function useGet<t>(key: string, defaultValue: t) {
  const [value, setValue] = React.useState<t>(defaultValue);
  useEffect(() => {
    (async () => {
      await remoteConfig.waitTillLoaded();
      setValue(remoteConfig.get<t>(key));
    })();
  }, []);
  return value;
}

export default function Home() {
  const name = useGet('name', '');

  const age = remoteConfig.get<string>('age');
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>

      <h1>Home</h1>
      <p>HappyPath Demo</p>
    </div>
  );
}
