import React from "react";
import styled from "styled-components";
import { Badge, Col, Stack } from "react-bootstrap";
import styles from "../app/page.module.css";
import CourseSelection from "./CourseSelection";
import { Droppable } from "react-beautiful-dnd";

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
      <Col>
        <div className={styles.courseColumnContainer}>
          <h3>{this.props.column.title}</h3>
          <Stack direction="vertical" gap={2}>
            {this.props.courses.map((course) => {
              return (
                <h2 key={course}>
                  <CourseSelection key={course} course={course}>
                    {course}
                  </CourseSelection>
                </h2>
              );
            })}
          </Stack>
        </div>
      </Col>
    );
  }
}
