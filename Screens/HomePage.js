import React, { Component } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableHighlight,
  FlatList,
} from "react-native";
import ClassPage from "./ClassPage";
import Modal from "react-native-modal";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      classes: [
        // make this into a class/type?
        {
          teacher: "Bob",
          classname: "Math",
          lastUpdated: "3/29/21",
          grade: "A",
          id: 1,
        },
        {
          teacher: "John",
          classname: "English",
          lastUpdated: "3/29/21",
          grade: "A-",
          id: 2,
        },
        {
          teacher: "Jim",
          classname: "History",
          lastUpdated: "3/29/21",
          grade: "C+",
          id: 3,
        },

        {
          teacher: "Barb",
          classname: "Science",
          lastUpdated: "3/29/21",
          grade: "B+",
          id: 4,
        },
      ],
    };
  }

  setModalVisible = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  renderItem = ({ item }) => (
    <TouchableHighlight
      key={item.id}
      underlayColor="none"
      onPress={() => this.setModalVisible()}
    >
      <ClassList
        key={item.id}
        grade={item.grade}
        classname={item.classname}
        lastUpdated={item.lastUpdated}
        teacher={item.teacher}
      />
    </TouchableHighlight>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.classList}>
          <FlatList
            data={this.state.classes}
            render={(item) => this.renderItem(item)}
          />
          {/* <ScrollView>
            {this.state.classes.map((item) => (
              <TouchableHighlight
                key={item.id}
                underlayColor="none"
                onPress={() => this.setModalVisible()}
              >
                <ClassList
                  key={item.id}
                  grade={item.grade}
                  classname={item.classname}
                  lastUpdated={item.lastUpdated}
                  teacher={item.teacher}
                />
              </TouchableHighlight>
            ))}
          </ScrollView> */}

          <Modal
            isVisible={this.state.modalVisible}
            swipeDirection={["down"]}
            onSwipeComplete={this.setModalVisible}
            style={{ margin: 0 }}
            propagateSwipe={true}
            animationInTiming={500}
          >
            <SafeAreaView style={{ backgroundColor: "coral", flex: 1 }}>
              <View
                style={{
                  width: deviceWidth * 0.1,
                  marginLeft: deviceWidth * 0.05,
                }}
              >
                <TouchableHighlight
                  onPress={() => this.setModalVisible()}
                  underlayColor="none"
                >
                  <Text style={styles.backBtnTxt}>Back</Text>
                </TouchableHighlight>
              </View>
              <ClassPage
                categories={["Assignments", "Assesments", "Projects"]}
                assesement={[
                  {
                    title: "Ch 14 Quiz",
                    grade: "98.7",
                    dateCompleted: "3/3/21",
                  },
                  {
                    title: "Ch 15 Quiz",
                    grade: "90.0",
                    dateCompleted: "3/10/21",
                  },
                  {
                    title: "Ch 16 Quiz",
                    grade: "100.0",
                    dateCompleted: "3/17/21",
                  },
                  {
                    title: "Ch 17 Quiz",
                    grade: "85.9",
                    dateCompleted: "3/24/21",
                  },
                ]}
              />
            </SafeAreaView>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}
class ClassList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.classListContainer}>
        <View>
          <Text style={styles.className}>{this.props.classname}</Text>
          <Text style={styles.teacher}>
            {this.props.teacher + " - Room 302"}
          </Text>
          <Text style={styles.date}>
            {"Last Updated: " + this.props.lastUpdated}
          </Text>
        </View>
        <View style={styles.gradeContainer}>
          <Text style={styles.grade}>{this.props.grade}</Text>
          <Text style={styles.gradeTxt}>100%</Text>
        </View>
      </View>
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
    backgroundColor: "lightblue",
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
