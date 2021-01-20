import { format, formatDistance, formatRelative, subDays } from "date-fns";
import React, { FC } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, View } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { AsyncList } from "../list/AsyncList";

const BLOCKS_QUERY = gql`
  {
    bitcoin {
      blocks(options: { limit: 20, desc: "timestamp.iso8601" }) {
        __typename
        height
        blockHash
        timestamp {
          iso8601
        }
        count
      }
    }
  }
`;

type BitcoinBlock = {
  height: string;
  blockHash: string;
  timestamp: {
    iso8601: string;
  };
};

export const ShowBlocks: FC<unknown> = () => {
  const { loading, error, data } = useQuery(BLOCKS_QUERY);

  return (
    <AsyncList<BitcoinBlock>
      items={data?.bitcoin?.blocks}
      loading={loading}
      error={error}
    >
      {(block) => <ShowBlock key={block.blockHash} block={block} />}
    </AsyncList>
  );
};

const ShowBlock: FC<{ block: BitcoinBlock }> = (props) => {
  console.log("props.block.timestamp.iso8601", props.block.timestamp.iso8601);
  const dateStr =
    formatDistance(new Date(), new Date(props.block.timestamp.iso8601)) +
    " ago";

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Icon name="cube" size={30} color="#900" />
      <Text>
        {props.block.blockHash.substr(props.block.blockHash.length - 8)}
      </Text>
      <Text>{props.block.height}</Text>
      <Text style={{ fontWeight: "bold" }}>{dateStr}</Text>
    </View>
  );
};
