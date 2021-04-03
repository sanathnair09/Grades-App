import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class ClassPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Class page</Text>
        <Button title={"Back"} onPress={() => {
                console.log(this.props.modalControl)
            }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
  },
});
