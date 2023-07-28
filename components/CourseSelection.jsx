import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { Badge } from "react-bootstrap";

export default class CourseSelection extends React.Component {
  render() {
    return (
      <Draggable
        draggableId={this.props.course.toString()}
        index={this.props.index}
      >
        {(provided) => (
          <Badge
            bg="info"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.course}
          </Badge>
        )}
      </Draggable>
    );
  }
}
