import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  View,
  Platform,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import AddClass from "../../Components/AddClass";
import { classes } from "../../data/TestData";
import ListItem from "../../Components/ListItem";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class HomeSetupPage extends Component {
  state = {
    modalVisible: false,
    classes: [],
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableHighlight
          style={styles.addClass}
          onPress={this.setModalVisible}
          underlayColor="none"
        >
          <Text style={{ fontSize: deviceWidth * 0.1 }}>+</Text>
        </TouchableHighlight>
      ),
    });
  }

  setModalVisible = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  addClass = (values) => {
    this.setModalVisible();
    let classes = this.state.classes;
    classes.push(values);
    this.setState({ classes: classes });
  };

  renderItem = ({ item }) => {
    return (
      <TouchableHighlight underlayColor="none" key={item.id}>
        <ListItem
          title={item.className}
          subtitle={item.teacher + " - " + item.room}
        />
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Modal
          isVisible={this.state.modalVisible}
          onSwipeComplete={this.setModalVisible}
          swipeDirection={["down"]}
          animationInTiming={500}
          style={{ margin: 0 }}
        >
          <AddClass closeModal={this.addClass} />
        </Modal>
        <FlatList
          data={this.state.classes}
          extraData={this.state}
          renderItem={this.renderItem}
          style={[{ flex: 1 }]}
          keyExtractor={(item) => item.period.toString()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  addClass: {
    marginRight: deviceWidth * 0.05,
  },
});
