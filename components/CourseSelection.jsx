import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { Badge } from "react-bootstrap";

export default class CourseSelection extends React.Component {
  render() {
    return <Badge bg="info">{this.props.course}</Badge>;
  }
}
