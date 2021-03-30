import React, { Component } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Image } from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

console.log("loaded")
export default class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: "Login",
            password: "Password",
        }

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.loginContainer} >
                    <TextInput style={styles.login} placeholder={this.state.login} onChangeText={(text) => this.setState({ login: text })} />
                    <View>
                        <TextInput style={styles.password} placeholder={this.state.password} secureTextEntry={true} onChangeText={(text) => this.setState({ login: text })} />
                    </View>
                    <Button title={"Login"} style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Home')} />
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
        backgroundColor: "red",
        padding: 10,
    },
    login: {
        backgroundColor: "lightgreen",
        padding: 10,

    },
    password: {
        marginTop: 10,
        backgroundColor: "lightblue",
        padding: 10,
    },
    loginBtn: {
        padding: 10,

    },
});
