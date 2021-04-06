import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class Graph extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.graph}>
        <Text>grades graph</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  graph: {
    flex: 1,
    backgroundColor: "lightgray",
    width: deviceWidth * 0.95,
    alignItems: "center",
    justifyContent: "center",
  },
});
