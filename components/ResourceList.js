import { CardGroup, Card, Button } from "react-bootstrap";
import styles from "../app/page.module.css";
import Link from "next/link";

export default function ResourceList() {
  return (
    <div className={styles.main}>
      <h1>University Resources</h1>
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
      <br />
      <h1>Development Tools</h1>
      <CardGroup>
        <Card>
          <Link href="https://eclipseide.org/">
            <div>
              <Card.Img variant="top" src="\EclipseLogo.png" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>Eclipse</Card.Title>
            <Card.Text>
              Eclipse is the most commonly used Java IDE within the MCIT
              program.{" "}
            </Card.Text>
            <Button href="https://eclipseide.org/">Visit Site</Button>{" "}
          </Card.Body>
        </Card>
        <Card>
          <Link href="https://www.jetbrains.com/idea/download/?section=windows">
            <div>
              <Card.Img variant="top" src="\IntellijLogo.png" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>IntelliJ</Card.Title>
            <Card.Text>
              IntelliJ is another Java IDE that is a good alternative to Eclipse
              and is developed by the same company that develops PyCharm.{" "}
            </Card.Text>
            <Button href="https://www.jetbrains.com/idea/download/?section=windows/">
              Visit Site
            </Button>{" "}
          </Card.Body>
        </Card>
        <Card>
          <Link href="https://www.jetbrains.com/pycharm/download/?section=windows">
            <div>
              <Card.Img variant="top" src="\PyCharmLogo.png" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>PyCharm</Card.Title>
            <Card.Text>
              PyCharm is the recommended Python IDE throughout the program.{" "}
            </Card.Text>
            <Button href="https://www.jetbrains.com/pycharm/download/?section=windows">
              Visit Site
            </Button>{" "}
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Link href="https://code.visualstudio.com/download">
            <div>
              <Card.Img variant="top" src="\VSCodeLogo.png" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>Visual Studio Code</Card.Title>
            <Card.Text>
              Visual Studio Code is a lighter IDE that can handle most languages
              including C/C++, Java, and Python. VSCode is highly customizable
              with a variety of extensions.{" "}
            </Card.Text>
            <Button href="https://code.visualstudio.com/download">
              Visit Site
            </Button>{" "}
          </Card.Body>
        </Card>
        <Card>
          <Link href="https://www.sublimetext.com/">
            <div>
              <Card.Img variant="top" src="\SublimeLogo.png" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>Sublime Text</Card.Title>
            <Card.Text>
              Sublime is a lightweight text editor for code, markup, and prose.{" "}
            </Card.Text>
            <Button href="https://www.sublimetext.com/">Visit Site</Button>{" "}
          </Card.Body>
        </Card>
        <Card>
          <Link href="https://www.overleaf.com/">
            <div>
              <Card.Img variant="top" src="\OverleafLogo.png" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>Overleaf</Card.Title>
            <Card.Text>
              Overleaf is a latex editor that is useful for scientific and
              mathematical documents (especially proofs).{" "}
            </Card.Text>
            <Button href="https://www.overleaf.com/">Visit Site</Button>{" "}
          </Card.Body>
        </Card>
      </CardGroup>
      <br />
      <h1>Documentation/Reference Material</h1>
      <CardGroup>
        <Card>
          <Link href="https://docs.oracle.com/en/java/">
            <div>
              <Card.Img variant="top" src="\OracleLogo.png" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>Java Documentation</Card.Title>
            <Card.Text>
              This is the official Java documentation by Oracle.{" "}
            </Card.Text>
            <Button href="https://docs.oracle.com/en/java/">Visit Site</Button>{" "}
          </Card.Body>
        </Card>
        <Card>
          <Link href="https://docs.python.org/3/">
            <div>
              <Card.Img variant="top" src="\PythonLogo.png" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>Python Documentation</Card.Title>
            <Card.Text>This is the official Python Documentation. </Card.Text>
            <Button href="https://docs.python.org/3/">Visit Site</Button>{" "}
          </Card.Body>
        </Card>
        <Card>
          <Link href="https://www.w3schools.com/">
            <div>
              <Card.Img variant="top" src="\W3SchoolsLogo.png" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>W3Schools</Card.Title>
            <Card.Text>
              W3Schools provides supplementary documentation/reference material
              over a wide array of languages.{" "}
            </Card.Text>
            <Button href="https://www.w3schools.com/">Visit Site</Button>{" "}
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Link href="https://www.geeksforgeeks.org/">
            <div>
              <Card.Img variant="top" src="\GeeksForGeeksLogo.png" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>GeeksForGeeks</Card.Title>
            <Card.Text>
              GeeksForGeeks is another site that provides supplementary
              reference material over a wide array of langauges.{" "}
            </Card.Text>
            <Button href="https://www.geeksforgeeks.org/">Visit Site</Button>{" "}
          </Card.Body>
        </Card>
        <Card>
          <Link href="https://stackoverflow.com/">
            <div>
              <Card.Img variant="top" src="\StackOverflowLogo.png" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>Stack Overflow</Card.Title>
            <Card.Text>
              Stack Overflow is a public forum where developers can ask
              questions and others can provide answers/solutions (Think
              EdDiscussion for the developer community).{" "}
            </Card.Text>
            <Button href="https://stackoverflow.com/">Visit Site</Button>{" "}
          </Card.Body>
        </Card>
        <Card>
          <Link href="https://www.youtube.com">
            <div>
              <Card.Img variant="top" src="\YoutubeLogo.png" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>Youtube</Card.Title>
            <Card.Text>
              Searching for any problem will likely provide hundreds of results
              that provide a deepdive into the solution.{" "}
            </Card.Text>
            <Button href="https://www.youtube.com/">Visit Site</Button>{" "}
          </Card.Body>
        </Card>
      </CardGroup>
      <br />
      <h1>Collaboration Tools</h1>
      <CardGroup>
        <Card>
          <Link href="https://github.com/">
            <div>
              <Card.Img variant="top" src="\GitHubLogo.png" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>Github</Card.Title>
            <Card.Text>
              Github stores your code so you can use git to work
              remotely/aysnchronous.{" "}
            </Card.Text>
            <Button href="https://github.com/">Visit Site</Button>{" "}
          </Card.Body>
        </Card>
        <Card>
          <Link href="https://trello.com/">
            <div>
              <Card.Img variant="top" src="\TrelloLogo.png" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>Trello</Card.Title>
            <Card.Text>
              Trello is a good location to plan projects and view what other
              people are working on.{" "}
            </Card.Text>
            <Button href="https://trello.com/">Visit Site</Button>{" "}
          </Card.Body>
        </Card>
        <Card>
          <Link href="https://www.google.com/drive/">
            <div>
              <Card.Img variant="top" src="\GSuiteLogo.png" />
            </div>
          </Link>
          <Card.Body>
            <Card.Title>Google Suite</Card.Title>
            <Card.Text>
              G Suite offers an array of tools for group projects such as shared
              calendars, documents, emails, etc.{" "}
            </Card.Text>
            <Button href="https://www.google.com/drive/">Visit Site</Button>{" "}
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
