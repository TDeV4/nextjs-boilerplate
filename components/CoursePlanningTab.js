import styles from "../app/page.module.css";
import Column from "./column";
import { DragDropContext } from "react-beautiful-dnd";
import { Col, Row } from "react-bootstrap";
import React, { Component, useState, useEffect } from "react";
import fetchWrapper from "../pages/api/fetchWrapper";

function formatData(courseBuilderData, userData) {
  var finalData = {};
  var courses = {};
  var columns = {};
  var columnOrder = [];

  const gradYear = userData.expectedGraduation.slice(-4);
  const startYear = userData.startSemester.slice(-4);

  var num = parseInt(gradYear) - parseInt(startYear);
  if (num === 0) {
    num = 1;
  }

  for (let i = 0; i < num * 3 + 4; i++) {
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
        term + (parseInt(startYear) + parseInt((i - 1) / 3)).toString();
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
    if (parseInt(course.semesterID) > Object.keys(columns).length) {
      columns[0]["courseIDs"].push(course.courseNumber);
    } else {
      columns[course.semesterID]["courseIDs"].push(course.courseNumber);
    }
  });

  columnOrder.sort(function (a, b) {
    return a - b;
  });

  finalData["courses"] = courses;
  finalData["columns"] = columns;
  finalData["columnOrder"] = columnOrder;

  //console.log(finalData);

  return finalData;
}

export default function CoursePlanningTab(props) {
  const [profile, setProfile] = useState([]);
  const [courseBuilderData, setCourseBuilderData] = useState([]);
  const [userID, setUserID] = useState();

  const getProfileInfo = async () => {
    try {
      // const fetcher = fetchWrapper();

      var userIDData = await fetchWrapper.get("/users/getuserid");
      const userID = userIDData.data.userID;
      setUserID(userID);

      const courseBuilderURL = "/coursebuilder/" + userID;

      const courseBuilder = await fetchWrapper.get(courseBuilderURL);
      const courseJsonData = courseBuilder.data;
      //console.log(courseJsonData);
      var courseBuilderDataFormatted = [];
      for (var i = 0; i < courseJsonData.courseID.length; i++) {
        const courseNumber = courseJsonData.coursenumber[i];
        const semID = courseJsonData.semesterID[i];
        const courseID = courseJsonData.courseID[i];

        const newObj = {};
        newObj["semesterID"] = semID;
        newObj["courseNumber"] = courseNumber;
        newObj["courseID"] = courseID;
        courseBuilderDataFormatted.push(newObj);
      }

      setCourseBuilderData(courseBuilderDataFormatted);

      const url = "/users/" + userID;

      const response = await fetchWrapper.get(url);

      const jsonData = response.data;
      //console.log(jsonData);
      setProfile(jsonData);

      // mark that we got the data
      // setHasFetchedData(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  const [data, setData] = useState({
    columnOrder: [],
  });

  var dataToUse;

  useEffect(() => {
    //console.log("Getting profile");
    getProfileInfo();
    if (profile.length < 1) {
    } else {
      dataToUse = formatData(courseBuilderData, profile);
      //console.log(dataToUse);
      setData(dataToUse);
    }
  }, [profile.name]);

  const onDragEnd = async (result, dataToUse) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      return;
    }

    const column = data.columns[destination.droppableId];
    const newCourseIds = Array.from(column["courseIDs"]);

    newCourseIds.push(draggableId);

    const sourceColumn = data.columns[source.droppableId];
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
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
        [sourceColumn.id]: updatedSourceColumn,
      },
    };

    const values = {};
    values["semesterID"] = parseInt(destination.droppableId);
    const courseNumber = draggableId;
    var courseID;
    courseBuilderData.map((course) => {
      if (course.courseNumber === courseNumber) {
        courseID = course.courseID;
      }
    });
    values["courseID"] = parseInt(courseID);
    values["userID"] = parseInt(userID);
    console.log(values);

    await fetchWrapper
      .put("/coursebuilder/", values)
      .then((data) => console.log("Success", data))
      .catch((error) => console.error("There was an error!", error));

    setData(newDataToUse);
  };

  return (
    <div>
      <h2>Course Planning</h2>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, dataToUse)}>
        <Row xs={3} sm={5}>
          {data["columnOrder"].map((columnId) => {
            const column = data["columns"][columnId];
            const courses = column["courseIDs"];

            return <Column key={columnId} column={column} courses={courses} />;
          })}
        </Row>
      </DragDropContext>
    </div>
  );
}
