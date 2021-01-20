import { format, formatDistance, formatRelative, subDays } from "date-fns";
import React, { FC } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, View } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { AsyncList } from "../list/AsyncList";

const TRANSACTIONS_QUERY = gql`
  {
    bitcoin {
      transactions(options: { limit: 20, desc: "date.date" }) {
        count
        index
        date {
          date
        }
      }
    }
  }
`;

type BitcoinTransaction = {
  index: number;
  date: {
    date: string;
  };
};

export const ShowTransactions: FC<unknown> = () => {
  const { loading, error, data } = useQuery(TRANSACTIONS_QUERY);

  return (
    <AsyncList<BitcoinTransaction>
      items={data?.bitcoin?.transactions}
      loading={loading}
      error={error}
    >
      {(transaction) => (
        <ShowTransaction
          key={transaction.index + transaction.date.date}
          transaction={transaction}
        />
      )}
    </AsyncList>
  );
};

const ShowTransaction: FC<{ transaction: BitcoinTransaction }> = (props) => {
  const dateStr =
    formatDistance(new Date(), new Date(props.transaction.date.date)) + " ago";

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Icon name="bitcoin" size={30} color="#900" />
      <Text>
        {/* todo: get the hash, presumably from another query */}
        {/*{props.transaction.transactionHash.substr(props.transaction.transactionHash.length - 8)}*/}
      </Text>
      <Text>{props.transaction.index}</Text>
      <Text style={{ fontWeight: "bold" }}>{dateStr}</Text>
    </View>
  );
};
