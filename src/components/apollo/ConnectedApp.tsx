import { Text } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { getSingletonClient } from "./getSingletonClient";

// provides the apollo context to the rest of the app
export const ConnectedApp: FC<unknown> = (props) => {
  const [client, setClient] = useState<any>(null); // todo: remove any type here
  useEffect(() => {
    getSingletonClient().then((client) => setClient(client));
  });
  if (client == null) {
    return <Text>…</Text>;
  }
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};
