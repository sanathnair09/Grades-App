import React, { Component } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
} from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "Login",
      password: "Password",
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.login}
            placeholder={this.state.login}
            onChangeText={(text) => this.setState({ login: text })}
          />
          <View>
            <TextInput
              style={styles.password}
              placeholder={this.state.password}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({ login: text })}
            />
          </View>
          <Button
            title={"Sign In"}
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    width: deviceWidth * 0.9,
    padding: 10,
  },
  login: {
    backgroundColor: "lightgreen",
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  password: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "lightblue",
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});
