import { CardGroup, Card, Button } from "react-bootstrap";
import styles from "../app/page.module.css";
import Link from "next/link";

export default function ResourceList() {
  return (
    <div className={styles.main}>
      <h3>University Resources</h3>
      <CardGroup>
        <Card>
          <Link href="https://path.at.upenn.edu/student/landing">
            <div className={styles.blueBackground}>
              <Card.Img variant="top" bg="primary" src="\PathAtPenn.svg" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>Path@Penn</Card.Title>
            <Card.Text>
              This is where you register for courses, view/request your
              transcript, update your student profile, and find general
              university resources.
            </Card.Text>
            <Button href="https://path.at.upenn.edu/student/landing">
              Visit Site
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Link href="https://secure.touchnet.net/C21690_tsa/web/caslogin.jsp">
            <div className={styles.blueBackground}>
              <Card.Img variant="top" src="\PennPay.png" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>Penn.Pay</Card.Title>
            <Card.Text>
              This is where you view your tuition bill, add authorized payers,
              and make payments.{" "}
            </Card.Text>
            <Button href="https://secure.touchnet.net/C21690_tsa/web/caslogin.jsp">
              Visit Site
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Link href="https://online.seas.upenn.edu/student-knowledge-base/">
            <div className={styles.blueBackground}>
              <Card.Img variant="top" src="\PennEngOnline.svg" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>Student Knowledge Base</Card.Title>
            <Card.Text>
              This site contains all the useful program links: Course Tools,
              Forms, Academic Calendar, Course Schedule, Course Syllabi, Student
              Handbook, and General University Resources Links.{" "}
            </Card.Text>
            <Button href="https://online.seas.upenn.edu/student-knowledge-base/">
              Visit Site
            </Button>{" "}
            <Button
              variant="outline-info"
              href="https://online.seas.upenn.edu/degrees/student-services/academic-calendar/"
            >
              View Academic Calendar
            </Button>{" "}
            <Button
              variant="outline-info"
              href="https://online.seas.upenn.edu/student-knowledge-base/course-syllabi/"
            >
              View Course Syllabi
            </Button>{" "}
            <Button
              variant="outline-info"
              href="https://online.seas.upenn.edu/student-knowledge-base/course-schedule/"
            >
              View Course Schedule
            </Button>{" "}
            <Button
              variant="outline-info"
              href="https://online.seas.upenn.edu/student-knowledge-base/connect-with-student-support//"
            >
              Connect with the Program Team
            </Button>{" "}
          </Card.Body>
        </Card>
      </CardGroup>
      <br></br>
      <CardGroup>
        <Card>
          <Link href="https://www.library.upenn.edu/">
            <div className={styles.blueBackground}>
              <Card.Img
                variant="top"
                bg="primary"
                src="\UPennLibrariesLogo.svg"
              />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>UPenn Libraries</Card.Title>
            <Card.Text>
              As a student at UPenn, you have access to the university libraries
              where you can check out books, physical and digital, and gain
              access to library resources.
            </Card.Text>
            <Button href="https://www.library.upenn.edu/">Visit Site</Button>
          </Card.Body>
        </Card>
        <Card>
          <Link href="https://upenn.joinhandshake.com/login">
            <div style={{ "background-color": "#1569e0" }}>
              <Card.Img variant="top" src="\Handshake.svg" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>Handshake</Card.Title>
            <Card.Text>
              This is a job board specifically for UPenn students where
              employers post open jobs and internships and host educational
              webinars over their company.{" "}
            </Card.Text>
            <Button href="https://upenn.joinhandshake.com/login">
              Visit Site
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Link href="https://online.seas.upenn.edu/student-knowledge-base/">
            <div>
              <Card.Img variant="top" src="\UPennCareerServices.png" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>Student Knowledge Base</Card.Title>
            <Card.Text>
              This page contains all things useful in your job search such as
              interview prep, career advising, and job search resources.{" "}
            </Card.Text>
            <Button href="https://online.seas.upenn.edu/student-knowledge-base/">
              Visit Site
            </Button>{" "}
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
