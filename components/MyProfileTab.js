import { Button, Badge, Col, Row } from "react-bootstrap";
import styles from "../app/page.module.css";
import Link from "next/link";
import EditProfile from "./EditProfile";
import { useEffect, useState } from "react";

import fetchWrapper from "../pages/api/fetchWrapper";

export default function MyProfileTab(props) {
  
  const [profile, setProfile] = useState([]);

  const getProfileInfo = async () => {
    try {
      // const fetcher = fetchWrapper();
      const response = await fetchWrapper.get("/users/1");
      console.log(response);
      const jsonData = response.data;

      setProfile(jsonData);
      // mark that we got the data
      // setHasFetchedData(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    console.log("Getting profile");
    getProfileInfo();
    console.log("Getting course stats");
    getCourseStats();
  }, []);

  const [courses, setCourses] = useState([]);

  const getCourseStats = async () => {
    try {
      
      const response = await fetchWrapper.get("/courses/coursestats");
      console.log(response);
      const jsonData = response.data;

      setCourses(jsonData);
      
    } catch (err) {
      console.error(err.message);
    }
  };

  if (profile.length < 1) {
    return <div></div>;
  }

  if (courses.length < 1) {
    return <div></div>;
  }

  return (
    <div>
      <div className={styles.rightAlignButton}>
        <EditProfile
          userData={profile}
          coursesTaken={props.courseData}
          currentCourseData={props.currentCourseData}
          allCourses={courses}
        />
      </div>
      <div>
        <h5 className={styles.centerText}>Hello, {profile.name}!</h5>
        <h7 className={styles.centerText}>AKA (your anonymous name):</h7>
        <h7 className={styles.centerText}>{profile.anonName}</h7>
        <br></br>
        <p>Expected Graduation: {profile.expectedGraduation} </p>
        <p>Industry: {profile.industry}</p>
        <p>Work Status: {profile.workStatus}</p>
        <p>
          Turtle or Non-turtle:{" "}
          {profile.inTurtleClub == true ? "Turtle" : "Non-Turtle"}
        </p>
        <div>
          Courses Completed:
          <Row xs={1} md={5}>
            {props.courseData.map((course) => {
              return (
                <Col key={course.courseID}>
                  <h5>
                    <Badge bg="success">{course.courseID}</Badge>
                  </h5>
                </Col>
              );
            })}
            {props.currentCourseData.map((course) => {
              return (
                <Col key={course.courseID}>
                  <h5>
                    <Badge bg="warning">{course.courseID}</Badge>
                  </h5>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}
