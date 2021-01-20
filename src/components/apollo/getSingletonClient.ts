import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

let client: ApolloClient<NormalizedCacheObject>;

export function getSingletonClient(): ApolloClient<NormalizedCacheObject> {
  if (!client) {
    client = new ApolloClient({
      uri: "https://bitquery.io/labs/graphql",
      cache: new InMemoryCache(),
    });
  }

  return client;
}
