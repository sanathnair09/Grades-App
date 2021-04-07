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
import Modal from "react-native-modal";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class IndividualCategory extends Component {
  state = {
    modalVisible: false,
  };

  constructor(props) {
    super(props);
  }

  renderItem = ({ item }) => (
    <TouchableHighlight>
      <ListItem title={item.name} grade={item.grade} gradeNum={item.gradeNum} />
    </TouchableHighlight>
  );

  setModalVisible = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableHighlight onPress={this.setModalVisible}>
          <Text
            style={{ alignSelf: "center", textAlign: "center", fontSize: 50 }}
          >
            +
          </Text>
        </TouchableHighlight>
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
