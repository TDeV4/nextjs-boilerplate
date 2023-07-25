import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import styles from "../app/page.module.css";
import courseSelection from "./courseSelection";

const Container = styled.div`
  flex: 0 0 auto;
  width: 200px;
  margin-right: 10px;
`;
const Title = styled.h3`
  padding: 8 px;
`;
const CourseList = styled.div``;
const CourseBubble = styled.div`
  padding: 5px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container className={styles.childContainer}>
        <Title>Semester {this.props.semesterID}</Title>
        <Droppable droppableID={this.props.semesterID}>
          {(provided) => (
            <CourseList innerRef={provided.innerRef} {...provided.droppableID}>
              {this.props.courses.map((course, index) => {
                let plannedSemester = parseInt(course.semesterID, 10);
                let semesterColumn = parseInt(this.props.semesterID, 10);

                if (plannedSemester == semesterColumn) {
                  return (
                    <courseSelection
                      key={course.courseID}
                      courseSelection={course.courseID}
                      index={index}
                    >
                      <Button variant="success">CIT {course.courseID}</Button>
                    </courseSelection>
                  );
                }
              })}
              {provided.placeholder}
            </CourseList>
          )}
        </Droppable>
      </Container>
    );
  }
}
