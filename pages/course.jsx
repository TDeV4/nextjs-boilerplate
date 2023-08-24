import IndividualCourseInfo from "@/components/IndividualCourseInfo";
import styles from "app/page.module.css";
import TopNavBar from "../components/TopNavBar";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import CourseReviewsTab from "@/components/CourseReviewsTab";
import { useEffect } from "react";


export default function Course() {
  //make a fetch request and pass in the course id in the url (get request) to get all the reviews for that course and the course info for that course
  const UseRouter = useRouter();
  const query = UseRouter.query;
  const course = query.courseID;

  const { data: session } = useSession();

  if (session) {
    if (userID.userID === null) {
      return (
        <main className={styles.main}>
          <h1>Please create your profile to continue: </h1>
          <BrowserRouter>
            <CreateProfile />
          </BrowserRouter>
          <button onClick={() => signOut()}>Sign out</button>
        </main>
      );
    } else {
      return (
        <main className={styles.main}>
          <TopNavBar />
          <div class={styles.container}>
            <div class={styles.leftpane}>
              <div class={styles.borderBox}>
                <IndividualCourseInfo
                  courseID={course}
                />
              </div>
            </div>
            <div class={styles.rightpane}>
              <div class={styles.borderBox}>
                <CourseReviewsTab courseID={course} />
              </div>
            </div>
          </div>
        </main>
      );
    }
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
