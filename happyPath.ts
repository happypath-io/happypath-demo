import happyConfig from './happyConfig.json';
import { Client } from './happyPathLib/client';
import { createHappyPathContext } from './happyPathLib/context/HappyPathContext';
import { createUseHappyPath } from './happyPathLib/hooks';
type JSONData = typeof happyConfig;

const client = new Client<JSONData>({
  json: happyConfig,
});
const Context = createHappyPathContext<JSONData>();
const Provider = Context.Provider;
const useHappyPath = createUseHappyPath<JSONData>(Context);
export { client, Context, Provider, useHappyPath };
