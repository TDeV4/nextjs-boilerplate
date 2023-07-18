import React from 'react';
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import styles from '../app/page.module.css';

const Container = styled.div`
flex: 0 0 auto;
width: 200px;
margin-right: 10px;
`;
const Title = styled.h3`
padding: 8 px;
`;
const CourseList = styled.div``;
const CourseBubble = styled.div `
padding: 5px
`

export default class Column extends React.Component {
    render() {
        return (
            <Container className={styles.childContainer}>
                <Title>Semester {this.props.semesterID}</Title>
                <CourseList>{this.props.courses.map((course) => {
                    let plannedSemester = parseInt(course.semesterID, 10);
                    let semesterColumn = parseInt(this.props.semesterID, 10);

                    if(plannedSemester == semesterColumn) {
                        return <CourseBubble key={course.courseID}><Button variant='success'>CIT {course.courseID}</ Button></CourseBubble>
                    }
                } )   
            }</CourseList>
            </Container>
        )
    }
}