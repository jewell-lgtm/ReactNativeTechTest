import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

let client: ApolloClient<NormalizedCacheObject>;

export function getSingletonClient(): ApolloClient<NormalizedCacheObject> {
  if (!client) {
    client = new ApolloClient({
      uri: "https://graphql.bitquery.io",
      cache: new InMemoryCache(),
    });
  }

  return client;
}
