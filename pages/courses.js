import styles from 'app/page.module.css'
import Link from 'next/link';
import TopNavBar from '../components/TopNavBar';
import HomeTopBar from '../components/HomeTopBar';
import {getSession} from 'next-auth/react'


export default function CoursesHome() {
    return (
        <main className={styles.main}>
        <TopNavBar />
        <HomeTopBar />
        <div class={styles.container}>
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