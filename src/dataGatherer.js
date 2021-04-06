const dummyData = require("../data/dummyData.json")

/**
 * Period - int
 * RoomNumber - string
 * CourseName - string
 * TeacherName - string
 * Percent - string
 * CurrentMark - string
 * NumMissingAssignment - int
 * LastUpdated - string
 * TermGrouping - string
 */


getClassList = (data) => {
  let array = [];
  data.forEach((item) => {
    let innerArray = {};
    for (key in item) {
      switch (key) {
        case "Period":
          innerArray["Period"] = item[key];
          break;
        case "RoomNumber":
          innerArray["RoomNumber"] = item[key];
          break;
        case "CourseName":
          innerArray["CourseName"] = item[key];
          break;
        case "TeacherName":
          innerArray["TeacherName"] = item[key];
          break;
        case "Percent":
          innerArray["Percent"] = item[key];
          break;
        case "CurrentMark":
          innerArray["CurrentMark"] = item[key];
          break;
        case "NumMissingAssignment":
          innerArray["NumMissingAssignment"] = item[key];
          break;
        case "LastUpdated":
          innerArray["LastUpdated"] = item[key];
          break;
        case "TermGrouping":
          innerArray["TermGrouping"] = item[key];
          break;
        default:
          break;
      }
    }
    array.push(innerArray);
  });
  return array;
};

separateOldClasses = (data) => {
  let classes = getClassList(data);
  let oldClasses = [];
  let newClasses = [];
  classes.forEach((item) => {
    for (key in item) {
      if (key == "TermGrouping" && item[key] == "Prior Terms") {
        oldClasses.push(item);
      } else if (key == "TermGrouping" && item[key] == "Current Terms") {
        newClasses.push(item);
      }
    }
  });
  return [oldClasses, newClasses];
};

const data = separateOldClasses(dummyData);
export const oldClasses = data[0]
export const newClasses = data[1]
