import styles from 'app/page.module.css'
import Link from 'next/link';
import TopNavBar from '../components/TopNavBar';
import HomeTopBar from '../components/HomeTopBar';
import {getSession} from 'next-auth/react';
import Table from 'react-bootstrap/Table';

const DUMMY_COURSE_DATA = [
  {
    courseID: 591,
    courseName: "Introduction to Software Development",
    difficulty: 3.64,
    workload: 13.82,
    rating: 3,
  },
  {
    courseID: 592,
    courseName: "Mathematical Foundations of Computer Science",
    difficulty: 3.88,
    workload: 15.3,
    rating: 3.35,
  },
]

export default function CoursesHome() {
    return (
        <main className={styles.main}>
        <TopNavBar />
        <div class={styles.container}>
        </div>
        <br></br>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Course Number</th>
            <th>Course Name</th>
            <th>Difficulty</th>
            <th>Workload</th>
            <th>Rating</th>
          </tr>
        </thead>
        </Table>
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