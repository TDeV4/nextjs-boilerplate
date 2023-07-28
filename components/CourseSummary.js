import styles from "../app/page.module.css";
import Link from "next/link";
import Table from 'react-bootstrap/Table';

const DUMMY_REVIEW_DATA = [
    {
      courseID: 591,
      courseNumber: "591",
      courseName: "Introduction to Software Development",
      reviewID: 1,
      semester: "Fall 2020",
      professor: "Brandon Krakowsky",
      finalGrade: "A",
      difficulty: 2,
      rating: 4,
      weeklyHours: 10,
    },
    {
      courseID: 592,
      courseNumber: "592",
      courseName: "Mathematical Foundations of Computer Science",
      reviewID: 10,
      semester: "Spring 2021",
      professor: "Val Tannen",
      finalGrade: null,
      difficulty: 4,
      rating: 3,
      weeklyHours: 22,
    },
  ];

export default function CourseSummary(props) {
    
    var data = DUMMY_REVIEW_DATA;

    return (
    <Table striped bordered hover>
    <thead>
        <tr>
        <th>Course Number</th>
        <th>Course Name</th>
        <th>Difficulty</th>
        <th>Workload</th>
        <th>Rating</th>
        <th>Link to Course Page</th>
        </tr>
    </thead>
    <tbody>
        {
        data.map((item) => (

            <tr key = {item.courseID}>
            <td>{item.courseNumber}</td>
            <td>{item.courseName}</td>
            <td>{item.difficulty}</td>
            <td>{item.weeklyHours}</td>
            <td>{item.rating}</td>
            <td>
                <a href="/course">Link</a>
            </td>
            </tr>   
        ))
        }
    </tbody>
    </Table>
    );
}