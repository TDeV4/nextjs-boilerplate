import styles from "../app/page.module.css";
import Column from "./column";
import { DragDropContext, onDragEnd } from "react-beautiful-dnd";

const DUMMY_DATA = [
  {
    semesterID: "1",
    courseID: "591",
  },
  {
    semesterID: "1",
    courseID: "592",
  },
  {
    semesterID: "2",
    courseID: "593",
  },
  {
    semesterID: "4",
    courseID: "595",
  },
];

function formatData(courseBuilderData) {
  var finalData = {};
  var courses = {};
  var columns = {};
  var columnOrder = [];

  courseBuilderData.map((course) => {
    courses[course.courseID] = course.courseID;

    var term;
    if (course.semesterID % 3 == 0) {
      term = "Summer ";
    } else if (course.semesterID % 3 == 1) {
      term = "Fall ";
    } else {
      term = "Spring ";
    }

    var columnTitle =
      term + (2020 + parseInt((course.semesterID + 1) / 3)).toString();

    var courseIDs = [course.courseID];

    if (course.semesterID in columns) {
      columns[course.semesterID]["courseIDs"].push(course.courseID);
    } else {
      var newDict = {};
      newDict["id"] = course.semesterID;
      newDict["title"] = columnTitle;
      newDict["courseIDs"] = courseIDs;

      columns[course.semesterID] = newDict;
      columnOrder.push(course.semesterID);
    }
  });

  columnOrder.sort(function (a, b) {
    return a - b;
  });

  finalData["courses"] = courses;
  finalData["columns"] = columns;
  finalData["columnOrder"] = columnOrder;

  return finalData;
}

export default function CoursePlanningTab(props) {
  var dataToUse = {};
  dataToUse = formatData(props.courseBuilderData);
  console.log(dataToUse);
  return <h1>Course Planning</h1>;
}
