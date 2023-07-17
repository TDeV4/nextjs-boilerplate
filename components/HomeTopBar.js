import styles from '../app/page.module.css';
import Link from 'next/link'

export default function TopHomeBar() {
  return (
  <div className={styles.grid}>
        <Link
          href="/resources"
          className={`${styles.card} ${styles.link}`}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            Resources <span>-&gt;</span>
          </h2>
          <p>Find a centralized hub of general resources for the MCIT Online Program.</p>
        </Link>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={`${styles.card} ${styles.link}`}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            Courses <span>-&gt;</span>
          </h2>
          <p>View course information and reviews to inform your class decision-making.</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={`${styles.card} ${styles.link}`}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            MCITConnect <span>-&gt;</span>
          </h2>
          <p>Join MCITConnect to meet your fellow classmates and develop your network while at Penn.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={`${styles.card} ${styles.link}`}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            Feedback <span>-&gt;</span>
          </h2>
          <p>
            Vote for courses you wish were offered and leave feedback for MCITCentral.
          </p>
        </a>
      </div>
      )
}