import styles from 'app/page.module.css'
import Link from 'next/link';
import TopNavBar from '../components/TopNavBar';
import HomeTopBar from '../components/HomeTopBar';
import {useSession, getSession} from 'next-auth/react';
import CourseSummary from '@/components/CourseSummary';
import { useEffect } from "react";



const DUMMY_COURSE_SUMMARY_DATA = [
  {
    courseID: 1,
    courseNumber: "591",
    courseName: "Introduction to Software Development",
    // reviewID: 1,
    // semester: "Fall 2020",
    // professor: "Brandon Krakowsky",
    // // finalGrade: "A",
    averageDifficulty: 2,
    averageRating: 4,
    averageWorkload: 10,
    reviews: 1,
  },
  {
    courseID: 2,
    courseNumber: "592",
    courseName: "Mathematical Foundations of Computer Science",
    // reviewID: 10,
    // semester: "Spring 2021",
    // professor: "Val Tannen",
    // // finalGrade: null,
    averageDifficulty: 4,
    averageRating: 3,
    averageWorkload: 22,
    reviews: 2,
  },
];

export default function CoursesHome() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.error === "Expired Token") {
      signIn(); // Force sign in to hopefully resolve error
    }
  }, [session]);
    return (
        <main className={styles.main}>
        <TopNavBar />
        <div class={styles.container}>
        </div>
        <br></br>
        <CourseSummary
          courseData={DUMMY_COURSE_SUMMARY_DATA}
        />
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