import styles from "../app/page.module.css";
import Link from "next/link";
import Table from "react-bootstrap/Table";

const DUMMY_REVIEW_DATA = [
  {
    courseID: 591,
    courseNumber: "591",
    courseName: "Introduction to Software Development",
    reviewID: 1,
    semester: "Fall 2020",
    professor: "Brandon Krakowsky",
    finalGrade: "A",
    averageDifficulty: 2,
    averageRating: 4,
    averageWorkload: 10,
  },
  {
    courseID: 592,
    courseNumber: "592",
    courseName: "Mathematical Foundations of Computer Science",
    reviewID: 10,
    semester: "Spring 2021",
    professor: "Val Tannen",
    finalGrade: null,
    averageDifficulty: 4,
    averageRating: 3,
    averageWorkload: 22,
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
        {data.map((item) => (
          <tr key={item.courseID}>
            <td>{item.courseNumber}</td>
            <td>{item.courseName}</td>
            <td>{item.averageDifficulty}</td>
            <td>{item.averageWorkload}</td>
            <td>{item.averageRating}</td>
            <td>
              <Link href="/course">Link</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
