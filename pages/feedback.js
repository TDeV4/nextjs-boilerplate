import styles from 'app/page.module.css'
import Link from 'next/link';
import {getSession} from 'next-auth/react';
import TopNavBar from "@/components/TopNavBar";


export default function Feedback() {
    return (
        <main className={styles.main}>
            <TopNavBar />
            <h1>Feedback Submission</h1>
            <div>
            <form action="/send-data-here" method="post">
                <input 
                type="text" 
                placeholder='Enter feedback here.'
                required
                minlength = '10'
                maxlength = '100'
                />
                <button type="submit">Submit</button>
            </form>
            </div>
        </main>
    )
}

//redirect user to an unaunthenticated page if not authenticated
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