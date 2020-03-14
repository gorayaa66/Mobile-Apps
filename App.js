import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import CounterReducer from "./src/redux/Reducers/CounterReducer";
import Login from "./src/components/Login";

const reducer = combineReducers({
  CounterReducer
});

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
