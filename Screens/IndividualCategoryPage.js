import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
} from "react-native";
import ListItem from "../Components/ListItem";
import { mockAssignment } from "../data/TestData";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class IndividualCategory extends Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({ item }) => (
    <TouchableHighlight>
      <ListItem title={item.name} grade={item.grade} gradeNum={item.gradeNum} />
    </TouchableHighlight>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={mockAssignment}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
});
