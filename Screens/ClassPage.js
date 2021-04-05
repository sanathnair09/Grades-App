import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Modal from "react-native-modal";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class ClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      categories: props.categories,
      assesement: props.assesement,
      assignment: props.assignment,
      projects: props.projcets,
    };
  }

  setModalVisible = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.categories.map((item, index) => (
          <TouchableHighlight
            key={index}
            onPress={this.setModalVisible}
            underlayColor="none"
          >
            <CategoryList category={item} count={4} />
          </TouchableHighlight>
        ))}
        <View style={styles.graph}>
          <Text>grades graph</Text>
        </View>

        <Modal
          isVisible={this.state.modalVisible}
          swipeDirection={["down"]}
          animationInTiming={500}
          onSwipeComplete={this.setModalVisible}
          style={{ margin: 0 }}
        >
          <SafeAreaView style={{ backgroundColor: "lightblue", flex: 1 }}>
            <TouchableHighlight
              onPress={() => this.setModalVisible()}
              underlayColor="none"
            >
              <Text style={styles.backBtnTxt}>Back</Text>
            </TouchableHighlight>
            <AssignmentView />
          </SafeAreaView>
        </Modal>
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
        <Text style={styles.countTxt}>
          {this.props.count + " " + this.props.category}
        </Text>
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
    alignItems: "center",
  },
  categoryContainer: {
    width: deviceWidth * 0.95,
    height: deviceHeight * 0.1,
    backgroundColor: "skyblue",
    padding: deviceHeight * 0.01,
    marginBottom: deviceHeight * 0.01,
    borderRadius: 10,
    justifyContent: "center",
  },
  categoryText: {
    fontSize: deviceHeight * 0.04,
  },
  countTxt: {
    fontSize: deviceHeight * 0.02,
  },
  graph: {
    flex: 1,
    backgroundColor: "lightgray",
    width: deviceWidth * 0.95,
    alignItems: "center",
    justifyContent: "center",
  },
});
