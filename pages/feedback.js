import styles from 'app/page.module.css'
import Link from 'next/link';
import {getSession} from 'next-auth/react'


export default function Feedback() {
    return (
        <h2>Feedback</h2>
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