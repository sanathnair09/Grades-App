import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";
 
let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class ClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: props.categories,
      assesement: props.assesement,
      assignment: props.assignment,
      projects: props.projcets,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.categories.map((item, index) => (
          <TouchableHighlight
            key={index}
            onPress={() => console.log("clicked")}
          >
            <CategoryList category={item} />
          </TouchableHighlight>
        ))}
      </View>
    );
  }
}

class CategoryList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>{this.props.category}</Text>
      </View>
    );
  }
}

class AssignmentView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    backgroundColor: "lightblue",
    alignItems: "center",
  },
  categoryContainer: {
    width: deviceWidth,
    height: deviceHeight * 0.1,
    backgroundColor: "lightgreen",
    padding: deviceHeight * 0.01,
  },
  categoryText: {
    fontSize: deviceHeight * 0.04,
  },
});
