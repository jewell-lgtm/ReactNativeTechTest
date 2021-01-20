import React from "react";
import { ConnectedApp } from "./src/components/apollo/ConnectedApp";
import { AppRouter } from "./src/app/AppRouter";

export default function App() {
  return (
    <ConnectedApp>
      <AppRouter />
    </ConnectedApp>
  );
}
