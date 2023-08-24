import styles from 'app/page.module.css'
import TopNavBar from '../components/TopNavBar';
import {useSession, getSession} from 'next-auth/react';
import CourseSummary from '@/components/CourseSummary';
import { useEffect } from "react";

export default function CoursesHome() {
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
          </div>
          <br></br>
          <CourseSummary/>
        </main>
      ) 
    }
  }
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