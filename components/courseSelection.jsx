import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

export default class courseSelection extends React.Component {
  render() {
    return (
      <Draggable
        draggableId={this.props.courseSelection}
        index={this.props.index}
      >
        {(provided) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
          >
            {this.props.courseSelection}
          </Container>
        )}
      </Draggable>
    );
  }
}
