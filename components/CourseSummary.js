import styles from "../app/page.module.css";
import Link from "next/link";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from 'react';
// import {useSession} from "next-auth/react";

import fetchWrapper from "../pages/api/fetchWrapper"

const CourseSummary = () => {
  //const { data: session, status } = useSession();
  const [courses, setCourses] = useState([]);

  // get and set the fetched data only once
  // const [hasFetchedData, setHasFetchedData] = useState(false);

  const getCourseStats = async() => {
    try{
      // const fetcher = fetchWrapper();
      const response = await fetchWrapper.get("/courses/coursestats");
      const jsonData = response.data;
      
      setCourses(jsonData);
      // mark that we got the data
      // setHasFetchedData(true);

    }catch (err){
      console.error(err.message);
    }
  }
  
  useEffect(() => {  
      getCourseStats();
}, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className={styles.centeredHeading}>Course Number</th>
          <th>Course Name</th>
          <th>Number of Reviews</th>
          <th>Difficulty</th>
          <th>Workload</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((courseInfo) => (
          <tr key={courseInfo.courseID}
          >
            <td className={styles.centeredText}>{courseInfo.coursenumber}</td>
            <td>
              <Link href={{ pathname: "/course", query: courseInfo}}>
                {courseInfo.coursename}
              </Link>
            </td>
            <td>{courseInfo.reviewCount}</td>
            <td>{courseInfo.averageDifficulty}</td>
            <td>{courseInfo.averageWorkload}</td>
            <td>{courseInfo.averageRating}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CourseSummary;