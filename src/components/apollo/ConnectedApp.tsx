import React, { FC } from "react";
import { ApolloProvider } from "@apollo/client";
import { getSingletonClient } from "./getSingletonClient";

// provides the apollo context to the rest of the app
export const ConnectedApp: FC<unknown> = (props) => {
  return (
    <ApolloProvider client={getSingletonClient()}>
      {props.children}
    </ApolloProvider>
  );
};
