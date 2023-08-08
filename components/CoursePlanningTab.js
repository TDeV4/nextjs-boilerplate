import styles from "../app/page.module.css";
import Column from "./column";
import { DragDropContext } from "react-beautiful-dnd";
import { Col, Row } from "react-bootstrap";
import React, { Component, useState } from "react";

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
  {
    semesterID: "0",
    courseID: "594",
  },
  {
    semesterID: "0",
    courseID: "596",
  },
  {
    semesterID: "0",
    courseID: "521",
  },
  {
    semesterID: "0",
    courseID: "545",
  },
  {
    semesterID: "0",
    courseID: "551",
  },
];

function formatData(courseBuilderData, userData) {
  var finalData = {};
  var courses = {};
  var columns = {};
  var columnOrder = [];

  for (
    let i = 0;
    i <
    (parseInt(userData.graduationYear) - parseInt(userData.startYear)) * 3 + 4;
    i++
  ) {
    var term;
    if (i == 0) {
      term = "Course List";
    } else if (i % 3 == 0) {
      term = "Fall ";
    } else if (i % 3 == 1) {
      term = "Spring ";
    } else {
      term = "Summer ";
    }
    if (i != 0) {
      var columnTitle =
        term +
        (parseInt(userData.startYear) + parseInt((i - 1) / 3)).toString();
    } else {
      var columnTitle = term;
    }

    var newDict = {};
    newDict["id"] = i;
    newDict["title"] = columnTitle;
    newDict["courseIDs"] = [];

    columns[i] = newDict;
    columnOrder.push(i);
  }

  courseBuilderData.map((course) => {
    courses[course.courseID] = course.courseID;
    columns[course.semesterID]["courseIDs"].push(course.courseID);
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
  dataToUse = formatData(props.courseBuilderData, props.userData);

  const [data, setData] = useState(dataToUse);

  const onDragEnd = (result, dataToUse) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      return;
    }

    const column = dataToUse.columns[destination.droppableId];
    const newCourseIds = Array.from(column["courseIDs"]);

    newCourseIds.push(draggableId);

    const sourceColumn = dataToUse.columns[source.droppableId];
    const newCourseIdsForSourceColumn = Array.from(sourceColumn["courseIDs"]);
    newCourseIdsForSourceColumn.splice(source.index, 1);

    const updatedSourceColumn = {
      ...sourceColumn,
      courseIDs: newCourseIdsForSourceColumn,
    };

    const newColumn = {
      ...column,
      courseIDs: newCourseIds,
    };

    const newDataToUse = {
      ...dataToUse,
      columns: {
        ...dataToUse.columns,
        [newColumn.id]: newColumn,
        [sourceColumn.id]: updatedSourceColumn,
      },
    };

    setData(newDataToUse);
  };

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result, dataToUse)}>
      <Row>
        {data["columnOrder"].map((columnId) => {
          const column = data["columns"][columnId];
          const courses = column["courseIDs"];

          return <Column key={columnId} column={column} courses={courses} />;
        })}
      </Row>
    </DragDropContext>
  );
}
