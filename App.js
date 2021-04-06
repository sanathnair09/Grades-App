import React, { Component } from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Dimensions } from "react-native";
import LoginPage from "./Screens/LoginPage";
import HomePage from "./Screens/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

let deviceHeight = Dimensions.get("window").height;

const Stack = createStackNavigator();
export default class App extends Component {
  constructor() {
    super();
    // fix navigation thingy
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={Platform.OS == "ios" ? "dark-content" : "default"} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Login"
              component={LoginPage}
            />
            <Stack.Screen name="Home" component={HomePage}  />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
