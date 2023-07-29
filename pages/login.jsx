import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'

import styles from '../app/page.module.css'
import HomeTopBar from '../components/HomeTopBar';
import TopNavBar from '../components/TopNavBar';
import MyProfileTab from '@/components/MyProfileTab';

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
            <main className={styles.main}>
                <TopNavBar />
                <HomeTopBar />
                <div>
                    <h3>Please sign in to use MCIT Community Hub.</h3>
                    <button onClick={() => signIn('google')}>Sign in</button>
                </div>
          </main>
        );
    }
}

export default Login