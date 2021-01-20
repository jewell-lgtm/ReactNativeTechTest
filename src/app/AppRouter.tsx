import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { ShowBlocks } from "../components/blocks/ShowBlocks";
import { ShowTransactions } from "../components/transactions/ShowTransactions";

function BlocksScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ShowBlocks />
    </View>
  );
}

function TransactionsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ShowTransactions />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export const AppRouter: FC<unknown> = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Blocks" component={BlocksScreen} />
        <Tab.Screen name="Transactions" component={TransactionsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
