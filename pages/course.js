import IndividualCourseInfo from "@/components/IndividualCourseInfo"
import styles from 'app/page.module.css'
import Link from 'next/link'
import TopNavBar from '../components/TopNavBar';
import HomeTopBar from '../components/HomeTopBar';
import {getSession} from 'next-auth/react';
import MyReviewsTab from "@/components/MyReviewsTab";
import Table from 'react-bootstrap/Table';

const DUMMY_USER_DATA = {
  userID: "1",
  name: "Tanner DeVore",
  anonName: "Purple Panda",
  timeZone: "CST",
  expectedGraduation: "Spring 2025",
  workStatusID: 2,
  industry: "Cyber-Security",
  fullTimeStudentStatus: false,
  inTurtleClub: false,
  alumniStatus: false,
  mcitCentralEmailNotifications: true,
  mcitConnectEmailNotifications: true,
  commentEmailNotifications: true,
  MCITConnectEnabled: true,
  email: "devoret@seas.upenn.edu",
  linkedinURL: "https://linkedin.com/in/tanner-devore",
  preferredContactMethod: "slack",
  bio: "Hello, I am a person who is in the MCIT Program and looking to connect.",
  education: "Bachelor of Arts in Political Science and Economics",
  internships: null,
  marketOutcome: null,
};

const DUMMY_COURSE_DATA = 
  { 
    courseID: 591,
    courseName: 'Introduction to Software Development',
    syllabus: null,
    description: "This course is an introduction to fundamental concepts of programming and computer science.",
    textbooks: "None",
    summaryReview: null
  }

const DUMMY_PREREQ_DATA = 
  {
    courseID: 591,
    prereqID: null,
    isCoreq: null
  }

const DUMMY_SUP_DATA = 
  {
    courseID: 591,
    resourceType: 1,
    resource: 'Textbook',
    resourceURL: 'https://www.amazon.com/Python-easy-steps-Mike-McGrath/dp/1840785969'
  } 
  const DUMMY_PROF_DATA = 
  {
    courseID: 591,
    professor: 'Brandon Krakowsky'
  } 
  const DUMMY_SEM_DATA = 
  {
    courseID: 591,
    semester: 'Fall 2023'
  } 

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
      courseID: 591,
      courseNumber: "591",
      courseName: "Introduction to Software Development",
      reviewID: 1,
      semester: "Fall 2020",
      professor: "Brandon Krakowsky",
      finalGrade: "A",
      difficulty: 4,
      rating: 3,
      weeklyHours: 22,
    },
  ];

  export default function coursePage() {

    const difficulty = DUMMY_REVIEW_DATA.map((review) => review.difficulty);
    const diffcultyAvg = difficulty.reduce((sum, current) => sum + current, 0) / difficulty.length;

    const rating = DUMMY_REVIEW_DATA.map((review) => review.rating);
    const ratingAvg = rating.reduce((sum, current) => sum + current, 0) / rating.length;

    const weeklyHours = DUMMY_REVIEW_DATA.map((review) => review.weeklyHours);
    const weeklyHoursAvg = weeklyHours.reduce((sum, current) => sum + current, 0) / weeklyHours.length;

    return (
    <main className={styles.main}>
        <TopNavBar />
        <div class={styles.container}>
          <div class={styles.leftpane}>
            <div class={styles.borderBox}>
              <h7 className={styles.centerText}>CIT 591: Introduction to Software Development</h7>
              <Table striped bordered hover>
                <thead class={styles.centerText}>
                  <tr>
                    <th><h9>Difficulty: {diffcultyAvg}</h9></th>
                    <th><h9>Workload: {ratingAvg}</h9></th>
                    <th><h9>Rating: {weeklyHoursAvg}</h9></th>
                    <th><h9># of Reviews: {difficulty.length}</h9></th>
                  </tr>
                </thead>
              </Table>
            <IndividualCourseInfo 
            courseData={DUMMY_COURSE_DATA}
            preReqData={DUMMY_PREREQ_DATA}
            supData={DUMMY_SUP_DATA}
            profData={DUMMY_PROF_DATA}
            semData={DUMMY_SEM_DATA} />
            </div>
          </div>
          <div class={styles.rightpane}>
            <div class={styles.borderBox}>
              <MyReviewsTab userData={DUMMY_USER_DATA} />
            </div>
          </div>
        </div>
    </main>
    )
  }
  
  export const getServerSideProps = async (context) => {
    const session = await getSession(context)
    if (!session) {
        return {
            redirect : {
                destination : '/login'
            }
        }
    }
    return {
        props: {session}
    }
}