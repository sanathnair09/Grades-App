import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  SafeAreaView,
  FlatList,
} from "react-native";
import Modal from "react-native-modal";
import Graph from "../Components/Graph";
import ListItem from "../Components/ListItem";
import IndividualCategory from "../Screens/IndividualCategoryPage";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class ClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      categories: props.categories,
      assesement: props.assesements,
      assignment: props.assignments,
      projects: props.projcets,
    };
  }

  setModalVisible = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  renderItem = ({ item }) => (
    <TouchableHighlight
      onPress={this.setModalVisible}
      underlayColor="none"
      key={item.id}
    >
      <ListItem
        title={item.title}
        subtitle={4 + " " + item.title}
        count={4}
        grade={"D-"}
        gradeNum={"51"}
      />
    </TouchableHighlight>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listView}>
          <FlatList
            data={this.state.categories}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Graph />
        </View>

        <Modal
          isVisible={this.state.modalVisible}
          swipeDirection={["down"]}
          animationInTiming={500}
          onSwipeComplete={this.setModalVisible}
          style={{ margin: 0 }}
        >
          <View style={{ backgroundColor: "lightblue", flex: 1 }}>
            <IndividualCategory />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    alignItems: "center",
  },
  listView: {
    flex: 1,
    marginBottom: deviceHeight * 0.01,
  },
});
