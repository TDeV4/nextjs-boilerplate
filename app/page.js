import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
        <a
            href="https://online.seas.upenn.edu/degrees/mcit-online/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/MCITCentral_Logo2.png"
              alt="MCIT Central Logo"
              height="100"
              width="100"
              priority
              overflow="hidden"
            />
          </a>
        </div>
        <div>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/profile.svg"
              alt="Profile"
              height="40"
              width="40"
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Resources <span>-&gt;</span>
          </h2>
          <p>Find a centralized hub of general resources for the MCIT Online Program.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Courses <span>-&gt;</span>
          </h2>
          <p>View course information and reviews to inform your class decision-making.</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            MCITConnect <span>-&gt;</span>
          </h2>
          <p>Join MCITConnect to meet your fellow classmates and develop your network while at Penn.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
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
    </main>
  )
}
