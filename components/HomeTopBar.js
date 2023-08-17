import { Col, Row } from "react-bootstrap";
import styles from "../app/homepage.css";
import Link from "next/link";

export default function TopHomeBar() {
  return (
    <div className={styles.colHeight}>
      <Row>
        <Col>
          <Link
            href="/"
            className="card"
            target="_self"
            rel="noopener noreferrer"
          >
            <h2>Home</h2>
            <p>
              Visit the homepage where you can see your past reviews, profile
              info, and plan your academic career.
            </p>
          </Link>
        </Col>
        <Col>
          <Link
            href="/resources"
            className="card"
            target="_self"
            rel="noopener noreferrer"
          >
            <h2>Resources</h2>
            <p>
              Find a centralized hub of general resources for the MCIT Online
              Program.
            </p>
          </Link>
        </Col>
        <Col>
          <Link
            href="/courses"
            className="card"
            target="_self"
            rel="noopener noreferrer"
          >
            <h2>Courses</h2>
            <p>
              View course information and reviews to inform your class
              decision-making.
            </p>
          </Link>
        </Col>
        <Col>
          <Link
            href="/mcitconnect"
            className="card"
            target="_self"
            rel="noopener noreferrer"
          >
            <h2>MCITConnect</h2>
            <p>
              Join MCITConnect to meet your fellow classmates and develop your
              network while at Penn.
            </p>
          </Link>
        </Col>
        <Col>
          <Link
            href="/feedback"
            className="card"
            target="_self"
            rel="noopener noreferrer"
          >
            <h2>Feedback</h2>
            <p>
              Vote for courses you wish were offered and leave feedback for
              MCITCentral.
            </p>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
