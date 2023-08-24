import styles from "../app/page.module.css";
import Link from "next/link";
import Table from "react-bootstrap/Table";
import { Badge } from "react-bootstrap";
import fetchWrapper from "../pages/api/fetchWrapper";
import { useEffect, useState } from "react";

//group an array by property
function groupBy(arr, property) {
  return arr.reduce(function(memo, x) {
    if (!memo[x[property]]) {
      memo[x[property]] = [];
    }
    memo[x[property]].push(x);
    return memo;
  }, {});
}

export default function IndividualCourseInfo(props) {
  //const { data: session, status } = useSession();
  const [course, setCourse] = useState([]);

  // get and set the fetched data only once
  // const [hasFetchedData, setHasFetchedData] = useState(false);

  const getCourseStats = async () => {
    try {
      // const fetcher = fetchWrapper();
      const response = await fetchWrapper.get(
        "/courses/coursestats/" + props.courseID
      );
      const jsonData = response.data;

      setCourse(jsonData);
      // mark that we got the data
      // setHasFetchedData(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  //const { data: session, status } = useSession();
  const [reviews, setReviews] = useState([]);

  // get and set the fetched data only once
  // const [hasFetchedData, setHasFetchedData] = useState(false);

  const getCourseReviews = async () => {
    try {
      // const fetcher = fetchWrapper();
      const response = await fetchWrapper.get(
        "/reviews/bycourse/" + props.courseID
      );
      const jsonData = response.data;

      setReviews(jsonData);
      // mark that we got the data
      // setHasFetchedData(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCourseStats();
    getCourseReviews();
  }, []);

  var numOfReviews = reviews.length;
  var coursePairings = [];

  for (var i = 0; i < numOfReviews; i++) {
    if (reviews[i].coursepairing != null) {
      var numOfPairings = reviews[i].coursepairing.length;
      for (var j = 0; j < numOfPairings; j++) {
        coursePairings.push({
          courseNumber: reviews[i].coursepairing[j],
          pairingrec: reviews[i].pairingrec[j],
        });
      }
    }
  }

  //group by name
  const grouped = groupBy(coursePairings, "courseNumber");
  const keys = Object.keys(grouped);
  var output = [];

  //loop keys
  keys.forEach((key) => {
    //merge using reduce
    const out = grouped[key].reduce((acc, current) => {
      return {
        courseNumber: current.courseNumber,
        pairingRec: acc.pairingrec + current.pairingrec,
      };
    });
    output.push(out);
  });

  return (
    <div>
      <div>
        <h4 className={styles.centerText}>
          CIT {course.coursenumber} - {course.coursename}
        </h4>
        <Table striped bordered hover>
          <thead className={styles.centerText}>
            <tr>
              <th>
                <p>Difficulty: {course.averageDifficulty}/5.00</p>
              </th>
              <th>
                <p>Workload (hours per week): {course.averageWorkload}</p>
              </th>
              <th>
                <p>Rating: {course.averageRating}/5.00</p>
              </th>
              <th>
                <p># of Reviews: {course.reviewCount}</p>
              </th>
            </tr>
          </thead>
        </Table>
        <h5 className={styles.centeredHeading}>Quick Facts and Resources</h5>
        <br></br>
        <p>Description: {course.description}</p>
        <p>
          Syllabus: <Link href={`${course.syllabus}`}>Link</Link>
        </p>
        <p>
          Prerequisites:
          {course.prereqcoursenumber?.map((pairing) => {
            return <Badge key={course.prereqcoursenumber}> {pairing} </Badge>;
          })}
        </p>
        <p>Professors: {course.professor}</p>
        <p>Textbooks: {course.textbooks}</p>
        <p>
          Course Pairings:
          {output.map((pairing) => {
            if (pairing.pairingrec < 0) {
              return (
                <Badge key={pairing.courseNumber} bg="danger">
                  {" "}
                  {pairing.courseNumber}{" "}
                </Badge>
              );
            } else if (pairing.pairingrec == 0) {
              return (
                <Badge key={pairing.courseNumber} bg="warning">
                  {" "}
                  {pairing.courseNumber}{" "}
                </Badge>
              );
            } else {
              return (
                <Badge key={pairing.courseNumber} bg="success">
                  {" "}
                  {pairing.courseNumber}{" "}
                </Badge>
              );
            }
          })}
        </p>
        <p>Summary Review: {course.summaryreview}</p>
      </div>
    </div>
  );
}
