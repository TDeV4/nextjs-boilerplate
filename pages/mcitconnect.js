import styles from 'app/page.module.css'
import Link from 'next/link';
import {getSession} from 'next-auth/react'


export default function MCITConnect() {
    return (
        <h2>MCITConnect</h2>
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