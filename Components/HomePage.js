import React, { Component } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [ // make this into a class/type?
        {
          teacher: "Bob",
          classname: "Math",
          lastUpdated: "3/29/21",
          grade: "A",
        },
        {
          teacher: "John",
          classname: "English",
          lastUpdated: "3/29/21",
          grade: "A-",
        },
        {
          teacher: "Jim",
          classname: "History",
          lastUpdated: "3/29/21",
          grade: "C+",
        },
        {
          teacher: "Barb",
          classname: "Science",
          lastUpdated: "3/29/21",
          grade: "B+",
        },
      ],
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.classList}>
          <ScrollView>
            {this.state.classes.map((item) => (
              <ClassView
                grade={item.grade}
                classname={item.classname}
                lastUpdated={item.lastUpdated}
                teacher={item.teacher}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

class ClassView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.classViewContainer}>
        <View style={styles.classInfo}>
          <Text style={styles.className}>{this.props.classname}</Text>
          <Text style={styles.teacher}>{this.props.teacher}</Text>
          <Text style={styles.date}>{this.props.lastUpdated}</Text>
        </View>
        <Text>{this.props.grade}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  classViewContainer: {
    flex: 1,
    //width: deviceWidth,
    backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
    padding: 10,
  },
  classList: {
    flex: 1,
    width: deviceWidth,
  },
  className: {
    fontSize: 30,
  },
  teacher: {
    fontSize: 20,
  },
  date: {
    fontSize: 10,
  },
});
