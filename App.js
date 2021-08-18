import React from "react";
import { LogBox } from "react-native";
import Navigation from "./app/navigations/Navigation";
import Login from "./app/screens/Account/Login";
import { firebaseApp } from "./app/utils/firebase";

LogBox.ignoreLogs([
  "Setting a timer",
  "useNativeDriver",
  "Cannot update a component",
  "Can't perform a React state update",
]);

export default function App() {
  return <Login />;
}
