import React, { Component } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Image } from "react-native";

let deviceWidht = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").width;



export default class LoginPage extends Component {
    constructor() {
        super()
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
                    <Button title={"Login"} style={styles.loginBtn} />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    loginContainer: {
        width: deviceWidht * 0.9,
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
