import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import HomePage from "./Screens/HomePage";
import LoginPage from "./Screens/LoginPage";
import HomeSetupPage from "./Screens/Setup Screens/HomeSetupPage";
import SetupPage from "./Screens/Setup Screens/SetupPage";

const Stack = createStackNavigator();
export default class App extends Component {
  state={
    isSignedUp: true,
  };
  constructor() {
    super();
    // fix navigation thingy
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={Platform.OS == "ios" ? "dark-content" : "default"}
        />

        <NavigationContainer>
          <Stack.Navigator>
            {this.state.isSignedUp ? (
              <>
                <Stack.Screen
                  options={{
                    headerShown: false,
                  }}
                  name="Login"
                  component={LoginPage}
                />
                <Stack.Screen name="Home" component={HomePage} />
              </>
            ) : (
              <>
                <Stack.Screen
                  options={{
                    headerShown: false,
                  }}
                  name="Setup"
                  component={SetupPage}
                />
                <Stack.Screen name="HomeSetup" component={HomeSetupPage} />
                <Stack.Screen name="Home" component={HomePage} />
              </>
            )}
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
