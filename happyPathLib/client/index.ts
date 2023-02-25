export type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[];

type ClientConfig<T> = {
  json: T;
};
export class Client<T> {
  private config: ClientConfig<T>;
  constructor(config: ClientConfig<T>) {
    this.config = config;
  }

  async fetch<K extends keyof T>({
    resourceId,
  }: {
    resourceId: K;
  }): Promise<T[K]> {
    // get the resource from the server based on the resourceId and the publicKey
    const json = this.config.json;
    return json && json[resourceId];
  }
}

// infer the type of the client from the object
export type ClientType = typeof Client;
