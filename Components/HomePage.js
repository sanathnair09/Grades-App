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
import { TouchableHighlight } from "react-native-gesture-handler";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [
        // make this into a class/type?
        {
          teacher: "Bob",
          classname: "Math",
          lastUpdated: "3/29/21",
          grade: "A",
          period: 1,
        },
        {
          teacher: "John",
          classname: "English",
          lastUpdated: "3/29/21",
          grade: "A-",
          period: 2,
        },
        {
          teacher: "Jim",
          classname: "History",
          lastUpdated: "3/29/21",
          grade: "C+",
          period: 3,
        },
        {
          teacher: "Barb",
          classname: "Science",
          lastUpdated: "3/29/21",
          grade: "B+",
          period: 4,
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
              <TouchableHighlight underlayColor="none" onPress={() => console.log(item.classname)}>
                <ClassView
                  key={item.period}
                  grade={item.grade}
                  classname={item.classname}
                  lastUpdated={item.lastUpdated}
                  teacher={item.teacher}
                />
              </TouchableHighlight>
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
        <Text style={styles.grade}>{this.props.grade}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    //backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
  },
  classViewContainer: {
    flex: 1,
    //width: deviceWidth,
    backgroundColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
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
  grade: {
    fontSize: 30,
  },
});
