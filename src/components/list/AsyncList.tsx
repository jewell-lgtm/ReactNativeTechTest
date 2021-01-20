import React, { PropsWithChildren } from "react";
import { Text, View } from "react-native";
import { getMessage } from "../../utils/getMessage";

export function AsyncList<T>(
  props: PropsWithChildren<{
    items?: T[];
    loading: boolean;
    error?: any;
    children: (item: T, index: number) => JSX.Element;
  }>
) {
  if (props.items && !props.loading && !props.error) {
    return <View>{props.items.map(props.children)}</View>;
  } else {
    if (props.error) {
      return <Text>{getMessage(props.error)}</Text>;
    } else {
      return <Text>Loading…</Text>;
    }
  }
}
