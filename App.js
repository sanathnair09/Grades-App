import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Image} from "react-native";
import LoginPage from "./Components/LoginPage";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

let deviceWidht = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").width;

const Stack = createStackNavigator();

export default class App extends Component {
  constructor() {
    super()
    // fix navigation thingy
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer >
          <Stack.Navigator >
            <Stack.Screen style={styles.navContainer} name="Hello" component={LoginPage} />
            <Stack.Screen name="Profile" component={LoginPage} />
          </Stack.Navigator>
          
        </NavigationContainer>
        

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  navContainer: {
    backgroundColor: "yellow",
    flex: 1,
  },
  
});
