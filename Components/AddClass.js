import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { toTitleCase } from "../src/helper";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class AddClass extends Component {
  constructor(props) {
    super(props);
  }

  closeModal = () => {
    if (this.state == null) {
      Alert.alert("Please fill out the form");
    } else if (this.state.className == null) {
      Alert.alert("Please add a Class Name");
    } else if (this.state.teacher == null) {
      Alert.alert("Please add the teacher");
    } else if (this.state.period == null) {
      Alert.alert("Please add the period");
    } else if (this.state.room == null) {
      Alert.alert("Please add the room number");
    } else {
      this.props.closeModal(this.state);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleTxt}>Add Class</Text>
        <View style={styles.entryContainer}>
          <Text style={styles.placeholderTxt}>Class Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) =>
              this.setState({ className: toTitleCase(text) })
            }
          />
        </View>
        <View style={styles.entryContainer}>
          <Text style={styles.placeholderTxt}>Teacher</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) =>
              this.setState({ teacher: toTitleCase(text) })
            }
          />
        </View>
        <View style={styles.entryContainer}>
          <Text style={styles.placeholderTxt}>Period</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) =>
              this.setState({ period: toTitleCase(text) })
            }
            keyboardType="number-pad"
          />
        </View>

        <View style={styles.entryContainer}>
          <Text style={styles.placeholderTxt}>Room</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({ room: toTitleCase(text) })}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={this.closeModal}>
          <Text style={styles.loginBtnTxt}>Add Class?</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  entryContainer: {
    width: deviceWidth * 0.95,
    marginBottom: deviceHeight * 0.01,
  },
  titleTxt: {
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
  loginBtn: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    alignSelf: "flex-end",
    marginRight: deviceWidth * 0.025,
    marginTop: deviceHeight * 0.01,
  },
  loginBtnTxt: {
    fontSize: deviceHeight * 0.02,
  },
});
