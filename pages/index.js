import styles from "../app/page.module.css";
import HomeTopBar from "../components/HomeTopBar";
import TopNavBar from "../components/TopNavBar";
import MyProfileTab from "@/components/MyProfileTab";
import CoursePlanningTab from "@/components/CoursePlanningTab";
import MyReviewsTab from "@/components/MyReviewsTab";
import React from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

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

const DUMMY_COURSE_BUILDER_DATA = [
  {
    userID: 1,
    semesterID: 1,
    courseID: 591,
  },
  {
    userID: 1,
    semesterID: 1,
    courseID: 592,
  },
  {
    userID: 1,
    semesterID: 2,
    courseID: 593,
  },
  {
    userID: 1,
    semesterID: 4,
    courseID: 594,
  },
  {
    userID: 1,
    semesterID: 5,
    courseID: 596,
  },
  {
    userID: 1,
    semesterID: 0,
    courseID: 595,
  },
  {
    userID: 1,
    semesterID: 0,
    courseID: 545,
  },
  {
    userID: 1,
    semesterID: 0,
    courseID: 521,
  },
  {
    userID: 1,
    semesterID: 0,
    courseID: 551,
  },
  {
    userID: 1,
    semesterID: 0,
    courseID: 555,
  },
  {
    userID: 1,
    semesterID: 5,
    courseID: 599,
  },
];

const DUMMY_COURSES_TAKEN_DATA = [
  {
    userID: 1,
    courseID: 591,
  },
  {
    userID: 1,
    courseID: 592,
  },
  {
    userID: 1,
    courseID: 593,
  },
  {
    userID: 1,
    courseID: 594,
  },
  {
    userID: 1,
    courseID: 595,
  },
  {
    userID: 1,
    courseID: 596,
  },
];

const DUMMY_CURRENT_COURSES_DATA = [
  {
    userID: 1,
    courseID: 521,
  },
];

export default function HomePage() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <main className={styles.main}>
        <TopNavBar />
        <HomeTopBar />
        <div class={styles.container}>
          <div class={styles.leftpane}>
            <div class={styles.borderBox}>
              <MyProfileTab
                userData={DUMMY_USER_DATA}
                courseData={DUMMY_COURSES_TAKEN_DATA}
                currentCourseData={DUMMY_CURRENT_COURSES_DATA}
              />
            </div>
          </div>
          <div class={styles.rightpane}>
            <div class={styles.borderBox}>
              <CoursePlanningTab
                courseBuilderData={DUMMY_COURSE_BUILDER_DATA}
              />
            </div>
            <div class={styles.borderBox}>
              <MyReviewsTab userData={DUMMY_USER_DATA} />
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main className={styles.main}>
        <TopNavBar />
        <HomeTopBar />
        <div>
          <h3>Please sign in to use MCIT Community Hub.</h3>
          <button onClick={() => signIn('google')}>Sign in</button>
        </div>
      </main>
    );
  }
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
