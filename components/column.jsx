import React from "react";
import styled from "styled-components";
import { Badge, Col, Stack } from "react-bootstrap";
import styles from "../app/page.module.css";
import CourseSelection from "./CourseSelection";
import { Droppable } from "react-beautiful-dnd";

export default class Column extends React.Component {
  render() {
    return (
      <Col>
        <div className={styles.courseColumnContainer}>
          <h4>{this.props.column.title}</h4>
          <Stack direction="vertical" gap={2}>
            <Droppable droppableId={this.props.column.id.toString()}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ minHeight: "100px" }}
                >
                  {this.props.courses.map((course, index) => (
                    <h2 key={course}>
                      <CourseSelection index={index} course={course} />
                    </h2>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Stack>
        </div>
      </Col>
    );
  }
}
