import styles from '../app/homepage.css';
import Link from 'next/link'

export default function TopHomeBar() {
  return (
  <div className="grid">
        <Link
          href="/resources"
          className="card"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            Resources <span>-&gt;</span>
          </h2>
          <p>Find a centralized hub of general resources for the MCIT Online Program.</p>
        </Link>
        <a
          href="/courses"
          className="card"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            Courses <span>-&gt;</span>
          </h2>
          <p>View course information and reviews to inform your class decision-making.</p>
        </a>

        <a
          href="/mcitconnect"
          className="card"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            MCITConnect <span>-&gt;</span>
          </h2>
          <p>Join MCITConnect to meet your fellow classmates and develop your network while at Penn.</p>
        </a>

        <a
          href="/feedback"
          className="card"
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