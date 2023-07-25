import IndividualCourseInfo from "@/components/IndividualCourseInfo"
import styles from 'app/page.module.css'
import Link from 'next/link'
import TopNavBar from '../components/TopNavBar';
import HomeTopBar from '../components/HomeTopBar';
import {getSession} from 'next-auth/react'


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

  export default function coursePage() {
    return (
    <main className={styles.main}>
        <TopNavBar />
        <HomeTopBar />
        <div class={styles.container}>
        <div class={styles.leftpane}>
            <div class={styles.borderBox}>
            <IndividualCourseInfo 
            courseData={DUMMY_COURSE_DATA}
            preReqData={DUMMY_PREREQ_DATA}
            supData={DUMMY_SUP_DATA}
            profData={DUMMY_PROF_DATA}
            semData={DUMMY_SEM_DATA} />
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