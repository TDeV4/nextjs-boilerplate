import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
border: 1px solid black;
border-radius: 2px;
padding: 8px;
margin-bottom: 8px;
`;

export default class courseSelection extends React.Component {
    render() {
        return <Container>this.props.courseID</Container>
    }
}