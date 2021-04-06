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
            <IndividualCategory />
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
  categoryContainer: {
    width: deviceWidth * 0.95,
    height: deviceHeight * 0.1,
    backgroundColor: "lightgray",
    marginBottom: deviceHeight * 0.01,
    borderRadius: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  categoryText: {
    fontSize: deviceHeight * 0.04,
  },
  listView: {
    flex: 1,
    marginBottom: deviceHeight * 0.01,
  },
  countTxt: {
    fontSize: deviceHeight * 0.02,
  },

  gradeContainer: {
    width: deviceWidth * 0.2,
    height: deviceHeight * 0.1,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  grade: {
    fontSize: deviceHeight * 0.03,
  },
  gradeTxt: {
    fontSize: deviceHeight * 0.02,
  },
});
