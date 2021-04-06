import React, { Component } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "Login",
      password: "Password",
      showPassword: false,
    };
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <SafeAreaView style={styles.loginContainer}>
          <Text style={styles.loginTxt}>Login</Text>
          <Text style={styles.placeholderTxt}>Email</Text>
          <TextInput
            style={[styles.textInput, styles.login]}
            onChangeText={(text) => this.setState({ login: text })}
            keyboardType="email-address"
          />
          <Text style={styles.placeholderTxt}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.textInput, styles.password]}
              secureTextEntry={!this.state.showPassword}
              onChangeText={(text) => this.setState({ password: text })}
            />
            <TouchableOpacity
              onPress={() =>
                this.setState({ showPassword: !this.state.showPassword })
              }
            >
              <Image
                source={require("../assets/password_eye.png")}
                style={styles.viewPsswd}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.utilityContainer}>
            <TouchableOpacity
              onPress={() =>
                Alert.alert("Forgot Password", "Resetting Password")
              }
            >
              <Text style={styles.forgotPsswd}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text style={styles.loginBtnTxt}>Login</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    width: deviceWidth * 0.9,
    justifyContent: "center",
  },
  loginTxt: {
    fontSize: deviceHeight * 0.05,
    marginBottom: deviceHeight * 0.01,
  },
  placeholderTxt: {
    fontSize: deviceHeight * 0.02,
    marginBottom: deviceHeight * 0.01,
  },
  textInput: {
    backgroundColor: "lightgray",
    padding: 10,
    height: Platform.OS == "ios" ? deviceHeight * 0.05 : deviceHeight * 0.06,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 5,
  },
  login: {
    marginBottom: deviceHeight * 0.01,
  },
  passwordContainer: {
    flexDirection: "row",
    marginBottom: deviceHeight * 0.02,
  },
  password: {
    flex: 1,
  },
  viewPsswd: {
    height: deviceHeight * 0.05,
    width: deviceHeight * 0.05,
    marginLeft: deviceWidth * 0.01,
  },
  utilityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginBtn: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
  },
  loginBtnTxt: {
    fontSize: deviceHeight * 0.02,
  },
  forgotPsswd: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
