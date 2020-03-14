import React from "react";
import { View, Text, Button, Alert } from "react-native";

import { connect } from "react-redux";
import { add, sub } from "./../redux/ActionCreators";

import * as Facebook from "expo-facebook";

const Login = props => {
  const logInFacebook = async () => {
    try {
      console.log("im in try");
      await Facebook.initializeAsync("602380786982978", "NexusProj");
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"]
      });
      console.log("type is ", token);
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        const user = await response.json();
        console.log(user);
      } else {
        // type === 'cancel'
        console.log("i am cancelled ");
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  return (
    <View>
      <Text>{props.counter}</Text>
      <Button onPress={() => props.addCounter()} title="Add" />
      <Button title="Login With Facebook" onPress={logInFacebook} />
    </View>
  );
};

const mapStatetoProps = state => {
  //console.log(state);
  return state.CounterReducer;
};

const mapDispatchtoProps = dispatch => {
  return {
    addCounter: () => dispatch(add())
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Login);
