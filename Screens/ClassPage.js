import React, { Component } from "react";
import { Dimensions, StyleSheet, Text, View, Button } from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class ClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: props.categories,
      assesement: props.assesement,
      assignment: props.assignment,
      projects: props.projcets,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.categories.map((item) => (
          <Text>{item}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
