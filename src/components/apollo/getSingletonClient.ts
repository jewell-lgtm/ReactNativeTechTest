import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageWrapper, persistCache } from "apollo3-cache-persist";

let client: ApolloClient<NormalizedCacheObject>;

export async function getSingletonClient(): Promise<
  ApolloClient<NormalizedCacheObject>
> {
  if (!client) {
    const cache = new InMemoryCache();
    await persistCache({
      cache,
      storage: new AsyncStorageWrapper(AsyncStorage),
    });

    client = new ApolloClient({
      uri: "https://graphql.bitquery.io",
      cache,
    });
  }

  return client;
}
