import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    // title
    // subtitle
    // date
    // count
    // grade
    // gradeNum
  }

  _getColorFromGrade = (grade) => {
    grade = parseFloat(grade);
    if (grade > 90) {
      return "#69ff69";
    } else if (grade > 80) {
      return "lightgreen";
    } else if (grade > 70) {
      return "yellow";
    } else if (grade > 60) {
      return "orange";
    } else {
      return "red";
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.classListContainer}>
          <View>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text
              style={[
                styles.subtitle,
                { display: this.props.subtitle != null ? null : "none" },
              ]}
            >
              {this.props.subtitle}
            </Text>
            <Text
              style={[
                styles.date,
                { display: this.props.date != null ? null : "none" },
              ]}
            >
              {this.props.date}
            </Text>
          </View>
          <View
            style={[
              styles.gradeContainer,
              {
                backgroundColor: this._getColorFromGrade(this.props.gradeNum),
              },
            ]}
          >
            <Text style={styles.grade}>{this.props.grade}</Text>
            <Text style={styles.gradeTxt}>{this.props.gradeNum + "%"}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  classListContainer: {
    flex: 1,
    height: deviceHeight * 0.1,
    width: deviceWidth * 0.95,
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
  title: {
    fontSize: deviceHeight * 0.03,
  },
  subtitle: {
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
});

/** CategoryList
 * <View style={styles.categoryContainer}>
        <View
          style={{ padding: deviceHeight * 0.01, justifyContent: "center" }}
        >
          <Text style={styles.categoryText}>{this.props.category}</Text>
          <Text style={styles.countTxt}>
            {this.props.count + " " + this.props.category}
          </Text>
        </View>

        <View
          style={[
            styles.gradeContainer,
            { backgroundColor: this._getColorFromGrade(this.props.gradeNum) },
          ]}
        >
          <Text style={styles.grade}>{this.props.grade}</Text>
          <Text style={styles.gradeTxt}>{this.props.gradeNum + "%"}</Text>
        </View>
      </View>
 */

/** ClassList
 * <View style={styles.classListContainer}>
        <View>
          <Text style={styles.className}>{this.props.classname}</Text>
          <Text style={styles.teacher}>
            {this.props.teacher + " - Room 302"}
          </Text>
          <Text style={styles.date}>
            {"Last Updated: " + this.props.lastUpdated}
          </Text>
        </View>
        <View
          style={[
            styles.gradeContainer,
            { backgroundColor: this._getColorFromGrade(this.props.gradeNum) },
          ]}
        >
          <Text style={styles.grade}>{this.props.grade}</Text>
          <Text style={styles.gradeTxt}>{this.props.gradeNum + "%"}</Text>
        </View>
      </View>
 */
