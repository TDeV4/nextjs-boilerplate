import IndividualCourseInfo from "@/components/IndividualCourseInfo";
import styles from "app/page.module.css";
import Link from "next/link";
import TopNavBar from "../components/TopNavBar";
import HomeTopBar from "../components/HomeTopBar";
import { getSession } from "next-auth/react";
import MyReviewsTab from "@/components/MyReviewsTab";
import Table from "react-bootstrap/Table";
import { useRouter } from "next/router";
import React from "react";
import CourseReviewsTab from "@/components/CourseReviewsTab";

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

//get the course data for that given course to fill out info
const DUMMY_NEW_COURSE_DATA = {
  courseID: 5,
  coursenumber: 5950,
  coursename: "Computer Systems Programming",
  syllabus:
    "https://online.seas.upenn.edu/wp-content/uploads/2023/05/Summer-23-CIT-5950-Computer-Systems-Programming-Syllabus.pdf",
  description:
    "This course is a continuation of CIT 5930 and introduces students to fundamental concepts in computing systems. The course is divided into two parts. The first half of the course introduces important concepts in modern operating systems: processes, scheduling, caching, and virtual memory. The second half of the course provides an introduction to fundamental concepts in the design and implementation of networked systems, their protocols, and applications. The course will use the C program language, and will develop your knowledge on C system calls, and libraries for process/thread creation and manipulation, synchronization, and network communication.",
  textbooks: "idk",
  summaryreview: "Class was great 595",
  prereqid: [3],
  coreq: [false],
  semester: null,
  professor: null,
  resource: "Textbooks",
};

const DUMMY_COURSE_DATA = {
  courseID: 5,
  coursenumber: 5950,
  coursename: "Computer Systems Programming",
  syllabus:
    "https://online.seas.upenn.edu/wp-content/uploads/2023/05/Summer-23-CIT-5950-Computer-Systems-Programming-Syllabus.pdf",
  description:
    "This course is a continuation of CIT 5930 and introduces students to fundamental concepts in computing systems. The course is divided into two parts. The first half of the course introduces important concepts in modern operating systems: processes, scheduling, caching, and virtual memory. The second half of the course provides an introduction to fundamental concepts in the design and implementation of networked systems, their protocols, and applications. The course will use the C program language, and will develop your knowledge on C system calls, and libraries for process/thread creation and manipulation, synchronization, and network communication.",
  textbooks: "None",
  summaryReview: null,
};

//get all the review for that given course id to calculate the averages 
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

//get all the course pairings from all the reviews from that specified course id
const DUMMY_USER_COURSE_PAIRING = [
  {
    courseID: 4,
    coursenumber: 594,
    reviewID: 1,
    pairingRec: 1,
  },
  {
    courseID: 6,
    coursenumber: 596,
    reviewID: 2,
    pairingRec: -1,
  },
  {
    courseID: 2,
    coursenumber: 592,
    reviewID: 3,
    pairingRec: 1,
  },
  {
    courseID: 2,
    coursenumber: 592,
    reviewID: 4,
    pairingRec: 1,
  },
  {
    courseID: 2,
    coursenumber: 592,
    reviewID: 5,
    pairingRec: -1,
  },
];

export default function coursePage() {
  //make a fetch request and pass in the course id in the url (get request) to get all the reviews for that course and the course info for that course
  const router = useRouter();
  const query = router.query;
  const course = query.courseID;

  return (
    <main className={styles.main}>
      <TopNavBar />
      <div class={styles.container}>
        <div class={styles.leftpane}>
          <div class={styles.borderBox}>
            <IndividualCourseInfo
              reviewData={DUMMY_REVIEW_DATA}
              courseData={DUMMY_NEW_COURSE_DATA}
              coursePairings={DUMMY_USER_COURSE_PAIRING}
            />
          </div>
        </div>
        <div class={styles.rightpane}>
          <div class={styles.borderBox}>
            <CourseReviewsTab userData={DUMMY_USER_DATA} />
          </div>
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return {
    props: { session },
  };
};
