import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'

import styles from '../app/page.module.css'
import HomeTopBar from '../components/HomeTopBar';
import TopNavBar from '../components/TopNavBar';
import MyProfileTab from '@/components/MyProfileTab';
import CoursePlanningTab from '@/components/CoursePlanningTab';
import MyReviewsTab from '@/components/MyReviewsTab';

const Login = () => {
    const {data: session}  = useSession()
    console.log(session);
    if (session) {
        return (
            <main className={styles.main}>
                <TopNavBar />
                <HomeTopBar />
                <div>
                    <p>Welcome, {session.user.name}</p>
                    <button onClick = {() => signOut()}>Sign out</button>
                </div>
            </main>
        );
    } else {
        return (
            <div>
            <p>You are not signed in.</p>
            <button onClick = {() => signIn()}>Sign in</button>
            </div>
        );
    }
}

export default Login