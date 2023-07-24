import IndividualCourseInfo from "@/components/IndividualCourseInfo"
import styles from 'app/page.module.css'
import Link from 'next/link'
import TopNavBar from '../components/TopNavBar';
import HomeTopBar from '../components/HomeTopBar';
import {getSession} from 'next-auth/react'


const DUMMY_COURSE_DATA = 
  { 
    courseID: '1',
    courseName: 'Introduction to Software Development',
    syllabus: null,
    description: "This course is an introduction to fundamental concepts of programming and computer science.",
    textbooks: null,
    summaryReview: null
  }

  export default function coursePage() {
    return (
    <main className={styles.main}>
        <TopNavBar />
        <HomeTopBar />
        <div class={styles.container}>
        <div class={styles.leftpane}>
            <div class={styles.borderBox}>
            <IndividualCourseInfo courseData={DUMMY_COURSE_DATA} />
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