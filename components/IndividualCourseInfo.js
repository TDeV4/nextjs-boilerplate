import styles from "../app/page.module.css";
import Link from "next/link";
import Table from 'react-bootstrap/Table';
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

  const getCourseStats = async() => {
    // console.log(props.courseID);
    try{
      // const fetcher = fetchWrapper();
      const response = await fetchWrapper.get("/courses/coursestats/"+ props.courseID);
      console.log(response)
      const jsonData = response.data;
      
      setCourse(jsonData);
      // mark that we got the data
      // setHasFetchedData(true);

    }catch (err){
      console.error(err.message);
    }
  }
  
  useEffect(() => {  
      console.log("Getting individual course stats");
      getCourseStats();
  }, []);

  // console.log(courses);
  //group by name
  const grouped = groupBy(props.coursePairings, "coursenumber");
  const keys = Object.keys(grouped);
  var output = [];

  //loop keys
  keys.forEach(key => {
    //merge using reduce
    const out = grouped[key].reduce((acc, current) => {
      return {
        courseID: current.courseID,
        coursenumber: current.coursenumber,
        pairingRec: acc.pairingRec + current.pairingRec
      }
    });
    output.push(out);
  });
  //calculate the averages of all the reviews for a given course
  const difficulty = props.reviewData.map((review) => review.difficulty);
  // const diffcultyAvg = difficulty.reduce((sum, current) => sum + current, 0) / difficulty.length;

  // const rating = props.reviewData.map((review) => review.rating);
  // const ratingAvg = rating.reduce((sum, current) => sum + current, 0) / rating.length;

  // const weeklyHours = props.reviewData.map((review) => review.weeklyHours);
  // const weeklyHoursAvg = weeklyHours.reduce((sum, current) => sum + current, 0) / weeklyHours.length;

  return (
    <div>
      <div>
      <h7 className={styles.centerText}>CIT {course.coursenumber} - {course.coursename}</h7>
        <Table striped bordered hover>
          <thead class={styles.centerText}>
            <tr>
              <th><h9>Difficulty: {course.averageDifficulty}/5.00</h9></th>
              <th><h9>Workload (hours per week): {course.averageWorkload}</h9></th>
              <th><h9>Rating: {course.averageRating}/5.00</h9></th>
              <th><h9># of Reviews: {difficulty.length}</h9></th>
            </tr>
          </thead>
        </Table>
        <h5 className={styles.centeredHeading}>Quick Facts and Resources</h5>
        <br></br> 
        <p>Description: {course.description}</p>
        <p>Syllabus: <Link href={`${course.syllabus}`}>Link</Link></p>
        <p>Prerequisites: {course.prereqid}</p>
        <p>Professors: {course.professor}</p>
        <p>Textbooks: {course.textbooks}</p>
        <p>Course Pairings: 
          {output.map((pairing) => {
            if (pairing.pairingRec < 0) {
              return <Badge bg="danger"> {pairing.coursenumber} </Badge>;
            } else if (pairing.pairingRec == 0) {
              return <Badge bg="warning"> {pairing.coursenumber} </Badge>;
            } else {
              return <Badge bg="success"> {pairing.coursenumber} </Badge>;
            }
          })}
        </p>
        <p>Summary Review: {course.summaryreview}</p>
      </div>
    </div>
  );
}
