import getClient from '@happypath-io/remote-config';

//load config from API on happypath.io
const remoteConfig = getClient({
  apiKey: '1338',
});

export default remoteConfig;
