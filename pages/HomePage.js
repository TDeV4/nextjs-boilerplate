import styles from '../app/page.module.css'
import HomeTopBar from '../components/HomeTopBar';
import TopNavBar from '../components/TopNavBar';
import MyProfileTab from '@/components/MyProfileTab';
import CoursePlanningTab from '@/components/CoursePlanningTab';
import MyReviewsTab from '@/components/MyReviewsTab';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <TopNavBar />
      <HomeTopBar />
      <div class={styles.container}>
        <div class={styles.leftpane}>
          <div class={styles.borderBox}>
            <MyProfileTab />
          </div>
        </div>
        <div class={styles.rightpane}>
          <div class={styles.borderBox}>
            <CoursePlanningTab />
          </div>
          <div class={styles.borderBox}>
            <MyReviewsTab />
          </div>
        </div>
      </div>
    </main>

  )
}
