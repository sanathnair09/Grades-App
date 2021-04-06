import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet, Dimensions } from "react-native";
import { assesements, categories } from "../data/TestData";
import ClassPage from "../Screens/ClassPage";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class CategoryView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ClassPage
          categories={categories}
          assesements={assesements}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "coral",
  },
});

/**
 * <SafeAreaView style={{ backgroundColor: "coral", flex: 1 }}>
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
              categories={[
                { title: "Assignments", id: 1 },
                { title: "Assesments", id: 2 },
                { title: "Projects", id: 3 },
                { title: "Lab", id: 4 },
              ]}
              assesement={[
                {
                  title: "Ch 14 Quiz",
                  grade: "98.7",
                  dateCompleted: "3/3/21",
                  id: 1,
                },
                {
                  title: "Ch 15 Quiz",
                  grade: "90.0",
                  dateCompleted: "3/10/21",
                  id: 2,
                },
                {
                  title: "Ch 16 Quiz",
                  grade: "100.0",
                  dateCompleted: "3/17/21",
                  id: 3,
                },
                {
                  title: "Ch 17 Quiz",
                  grade: "85.9",
                  dateCompleted: "3/24/21",
                  id: 4,
                },
              ]}
            />
          </SafeAreaView> 
 */