import React, { Component } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  FlatList,
} from "react-native";
import Modal from "react-native-modal";
import ListItem from "../Components/ListItem";
import CategoryView from "../Components/Categories";
import { classes } from "../data/TestData";
import { newClasses } from "../src/dataGatherer";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      classes: newClasses,
    };
  }

  setModalVisible = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  renderItem = ({ item }) => (
    <TouchableHighlight
      underlayColor="none"
      onPress={() => this.setModalVisible()}
    >
      {/* <ClassList
        gradeNum={item.gradeNum}
        grade={item.grade}
        classname={item.classname}
        lastUpdated={item.lastUpdated}
        teacher={item.teacher}
      /> */}
      <ListItem
        title={item["CourseName"]}
        subtitle={item["TeacherName"] + " - " + item["RoomNumber"]}
        date={"Last Updated: " + item["LastUpdated"]}
        grade={item["CurrentMark"]}
        gradeNum={item["Percent"]}
      />
    </TouchableHighlight>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.classes}
          renderItem={this.renderItem}
          extraData={this.state} //idk if i need this
          keyExtractor={(item) => item["Period"].toString()}
          style={styles.classList}
          // ListHeaderComponent={<HeaderComponent />}
          // ListHeaderComponentStyle={{ margin: deviceHeight * 0.01 }}
        />
        <Modal
          isVisible={this.state.modalVisible}
          swipeDirection={["down"]}
          onSwipeComplete={this.setModalVisible}
          style={{ margin: 0 }}
          propagateSwipe={true}
          animationInTiming={500}
        >
          <CategoryView />
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  classList: {
    flex: 1,
    width: deviceWidth,
  },
  backBtnTxt: {
    fontSize: deviceHeight * 0.02,
    color: "black",
  },
});
