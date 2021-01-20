import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ConnectedApp } from "./src/components/apollo/ConnectedApp";
import { ShowBlocks } from "./src/components/blocks/ShowBlocks";

export default function App() {
  return (
    <ConnectedApp>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <ShowBlocks />
        <StatusBar style="auto" />
      </View>
    </ConnectedApp>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
