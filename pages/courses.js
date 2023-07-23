import styles from 'app/page.module.css'
import Link from 'next/link';
import TopNavBar from '../components/TopNavBar';
import HomeTopBar from '../components/HomeTopBar';

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