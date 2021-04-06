import React, { Component } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  FlatList,
} from "react-native";
import ClassPage from "./ClassPage";
import Modal from "react-native-modal";
import ListItem from "../Components/ListItem";
import CategoryView from "../Components/Categories";
import { classes } from "../data/TestData";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      classes: classes
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
        title={item.classname}
        subtitle={item.teacher + " - Room 302"}
        date={"Last Updated: " + item.lastUpdated}
        grade={item.grade}
        gradeNum={item.gradeNum}
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
          keyExtractor={(item) => item.id.toString()}
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
  classListContainer: {
    flex: 1,
    height: deviceHeight * 0.1,
    backgroundColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  classList: {
    flex: 1,
    width: deviceWidth,
  },
  className: {
    //flex: 1,
    fontSize: deviceHeight * 0.03,
  },
  teacher: {
    fontSize: deviceHeight * 0.02,
  },
  date: {
    fontSize: deviceHeight * 0.015,
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
  backBtnTxt: {
    fontSize: deviceHeight * 0.02,
    color: "black",
  },
});
