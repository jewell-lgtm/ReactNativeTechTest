import React, { FC } from "react";
import { Text } from "react-native";
import { useGetBlocksQuery } from "../../../graphql.generated";

export const ShowBlocks: FC<unknown> = () => {
  const { loading, error, data } = useGetBlocksQuery();

  if (loading) {
    return <Text>Loading</Text>;
  } else if (error) {
    return <Text>{error.message}</Text>;
  } else if (data) {
    return <Text>{JSON.stringify(data)}</Text>;
  } else {
    // shouldn't ever get here
    return <Text>…</Text>;
  }
};
