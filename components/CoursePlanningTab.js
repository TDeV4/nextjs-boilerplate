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

function formatData(courseBuilderData) {
  var finalData = {};
  var courses = {};
  var columns = {};
  var columnOrder = [];

  courseBuilderData.map((course) => {
    courses[course.courseID] = course.courseID;

    var term;
    if (course.semesterID == 0) {
      term = "Course List";
    } else if (course.semesterID % 3 == 0) {
      term = "Summer ";
    } else if (course.semesterID % 3 == 1) {
      term = "Fall ";
    } else {
      term = "Spring ";
    }
    if (course.semesterID != 0) {
      var columnTitle =
        term + (2020 + parseInt((course.semesterID + 1) / 3)).toString();
    } else {
      var columnTitle = term;
    }

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
