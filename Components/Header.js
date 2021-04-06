import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class Header extends Component {
  state = {
    pickerValue: "current",
  };
  render() {
    return (
      <View>
        {/* <Picker
          selectedValue={this.state.pickerValue}
          onValueChange={(value) => this.setState({ pickerValue: value })}
          style={{backgroundColor: "red"}}
        >
          <Picker.Item label="Current" value="current" />
          <Picker.Item label="Prior" value="previous" />
          <Picker.Item label="Future" value="future" />
        </Picker> */}
        <Text>{"Selected term: ______"}</Text>
      </View>
    );
  }
}
