import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./src/components/common";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Tech Stack" />
        </View>
      </Provider>
    );
  }
}