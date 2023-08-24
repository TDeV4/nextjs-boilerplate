import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import styles from "../app/page.module.css";
import fetchWrapper from "@/pages/api/fetchWrapper";

export default function CreateReview(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const yearOptions = [];
  for (let i = 2020; i <= new Date().getFullYear(); i++) {
    yearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const [values, setValues] = useState({
    courseID: null,
    professor: null,
    sem: null,
    year: null,
    finalGrade: null,
    difficulty: null,
    rating: null,
    workload: null,
    content: null,
    coursePairing1: "",
    coursePairingRec1: "",
    coursePairing2: "",
    coursePairingRec2: "",
    coursePairing3: "",
    coursePairingRec3: "",
  });

  const [courses, setCourses] = useState([]);
  const getCourseStats = async () => {
    try {
      const response = await fetchWrapper.get("/courses/");

      const jsonData = response.data;
      setCourses(jsonData);

      const userIdData = await fetchWrapper.get("/users/getuserid");
      const userID = userIdData.data.userID;
      values["userID"] = userID;
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    //console.log("Getting course stats");
    getCourseStats();
  }, [values]);

  var courseProfs = [];
  var otherCourses = [];

  const [relevantProfs, setRelevantProfs] = useState(courseProfs);
  const [otherCourseOptions, setOtherCourseOptions] = useState(otherCourses);

  const handleCourseChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
    //console.log(name, value);

    otherCourses = [];
    courseProfs = [];
    courses.map((course) => {
      if (course.courseID != value) {
        otherCourses.push(course);
      } else if (course.professor != null) {
        course.professor.map((prof) => {
          courseProfs.push(prof);
        });
      }
    });
    setRelevantProfs(courseProfs);
    setOtherCourseOptions(otherCourses);
  };

  const onFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
    //console.log(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const coursePairings = [];
    const courseRecs = [];
    if (values["coursePairing1"] != "" && values["coursePairingRec1"] != "") {
      coursePairings.push(values["coursePairing1"]);
      courseRecs.push(values["coursePairingRec1"]);
    }
    if (values["coursePairing2"] != "" && values["coursePairingRec2"] != "") {
      coursePairings.push(values["coursePairing2"]);
      courseRecs.push(values["coursePairingRec2"]);
    }
    if (values["coursePairing3"] != "" && values["coursePairingRec3"] != "") {
      coursePairings.push(values["coursePairing3"]);
      courseRecs.push(values["coursePairingRec3"]);
    }

    values["coursepairing"] = coursePairings;
    values["pairingrec"] = courseRecs;
    values["parentID"] = null;

    values["semester"] = values["sem"] + " " + values["year"];

    await fetchWrapper
      .post("/reviews/newreview", values)
      .then((data) => console.log("Success", data))
      .catch((error) => console.error("There was an error!", error));

    console.log(values);
    window.location.reload();
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className={styles.rightAlignButton}
      >
        Create a Review
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Create New Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Course Taken */}
            <Form.Select
              placeholder="selectCourse"
              required
              name="courseID"
              aria-label="Course Selection"
              onChange={handleCourseChange}
            >
              <option key="blankChoice" hidden value="">
                Select a Course
              </option>
              {courses.map((course) => (
                <option key={course.courseID} value={course.courseID}>
                  CIT {course.coursenumber}: {course.coursename}
                </option>
              ))}
            </Form.Select>

            {/* Semester and Year Course was taken */}
            <Row>
              <Col>
                <Form.Select
                  placeholder="selectSemester"
                  required
                  name="sem"
                  aria-label="Semester Taken"
                  onChange={onFormChange}
                >
                  <option key="blankChoice" hidden value="">
                    {" "}
                    Semester{" "}
                  </option>
                  <option>Fall</option>
                  <option>Spring</option>
                  <option>Summer</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  placeholder="selectYear"
                  required
                  aria-label="Year Taken"
                  onChange={onFormChange}
                  name="year"
                >
                  <option key="blankChoice" hidden value="">
                    {" "}
                    Year{" "}
                  </option>
                  {yearOptions}
                </Form.Select>
              </Col>
            </Row>
            <br />

            {/* Professor */}
            <Form.Select
              placeholder="selectProf"
              aria-label="Professor Selection"
              onChange={onFormChange}
              options={relevantProfs}
              name="professor"
              required
            >
              <option key="blankChoice" hidden value="">
                {" "}
                Select Professor{" "}
              </option>
              {relevantProfs.map((prof) => {
                return <option key={prof}>{prof}</option>;
              })}
            </Form.Select>

            {/* Final Grade */}
            <Form.Select
              placeholder="selectGrade"
              aria-label="Final Grade"
              name="finalGrade"
              onChange={onFormChange}
            >
              <option key="blankChoice" hidden value="">
                {" "}
                Final Grade (optional){" "}
              </option>
              <option value={null}>Prefer not to say</option>
              <option>A+</option>
              <option>A</option>
              <option>A-</option>
              <option>B+</option>
              <option>B</option>
              <option>B-</option>
              <option>C+</option>
              <option>C</option>
              <option>C-</option>
              <option>D+</option>
              <option>D</option>
              <option>D-</option>
              <option>F</option>
            </Form.Select>
            <br />

            {/* Course Rating and Difficulty */}
            <Row>
              <Col>
                <Form.Select
                  placeholder="courseDifficulty"
                  required
                  aria-label="Difficulty of Course"
                  onChange={onFormChange}
                  name="difficulty"
                >
                  <option key="blankChoice" hidden value="">
                    {" "}
                    Course Difficulty{" "}
                  </option>
                  <option value={1}>Piece of Cake</option>
                  <option value={2}>Easy</option>
                  <option value={3}>Normal</option>
                  <option value={4}>Hard</option>
                  <option value={5}>Near Impossible</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  placeholder="courseRating"
                  required
                  aria-label="courseRating"
                  onChange={onFormChange}
                  name="rating"
                >
                  <option key="blankChoice" hidden value="">
                    {" "}
                    Rating{" "}
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Select>
              </Col>
            </Row>
            <Form.Control
              type="Number"
              placeholder="Workload (hours per week)"
              required
              onChange={onFormChange}
              name="workload"
            />
            <br></br>
            {/* Taken with Courses*/}
            <Row>
              <Col>
                <Form.Select
                  placeholder="selectTakenWithCourse"
                  aria-label="Taken With Course Selection"
                  options={otherCourseOptions}
                  onChange={onFormChange}
                  name="coursePairing1"
                >
                  <option key="blankChoice" value="">
                    {" "}
                    Taken with...{" "}
                  </option>
                  {otherCourseOptions.map((course) => {
                    return (
                      <option key={course.courseID} value={course.courseID}>
                        {course.coursenumber}: {course.coursename}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  placeholder="recommendationForPairing"
                  aria-label="Recommendation for Pairing"
                  onChange={onFormChange}
                  name="coursePairingRec1"
                >
                  <option key="blankChoice" value="">
                    {" "}
                    Recommendation{" "}
                  </option>
                  <option value={1}>Recommended</option>
                  <option value={0}>Neutral</option>
                  <option value={-1}>Not Recommended</option>
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Select
                  placeholder="selectTakenWithCourse"
                  aria-label="Taken With Course Selection"
                  options={otherCourseOptions}
                  onChange={onFormChange}
                  name="coursePairing2"
                >
                  <option key="blankChoice" value="">
                    {" "}
                    Taken with...{" "}
                  </option>
                  {otherCourseOptions.map((course) => {
                    return (
                      <option key={course.courseID} value={course.courseID}>
                        {course.coursenumber}: {course.coursename}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  placeholder="recommendationForPairing"
                  aria-label="Recommendation for Pairing"
                  onChange={onFormChange}
                  name="coursePairingRec2"
                >
                  <option key="blankChoice" value="">
                    {" "}
                    Recommendation{" "}
                  </option>
                  <option value={1}>Recommended</option>
                  <option value={0}>Neutral</option>
                  <option value={-1}>Not Recommended</option>
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Select
                  placeholder="selectTakenWithCourse"
                  aria-label="Taken With Course Selection"
                  options={otherCourseOptions}
                  onChange={onFormChange}
                  name="coursePairing3"
                >
                  <option key="blankChoice" value="">
                    {" "}
                    Taken with...{" "}
                  </option>
                  {otherCourseOptions.map((course) => {
                    return (
                      <option key={course.courseID} value={course.courseID}>
                        {course.coursenumber}: {course.coursename}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  placeholder="recommendationForPairing"
                  aria-label="Recommendation for Pairing"
                  onChange={onFormChange}
                  name="coursePairingRec3"
                >
                  <option key="blankChoice" value="">
                    {" "}
                    Recommendation{" "}
                  </option>
                  <option value={1}>Recommended</option>
                  <option value={0}>Neutral</option>
                  <option value={-1}>Not Recommended</option>
                </Form.Select>
              </Col>
            </Row>
            <Form.Text className="text-muted">
              If you mistakenly select a course, you can simply switch the
              values back to their default: Taken with... and Recommendation
            </Form.Text>

            <Form.Control
              as="textarea"
              rows={7}
              placeholder="I liked/disliked the course because..."
              name="content"
              onChange={onFormChange}
            />
            <br />
            <button>Publish Review</button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
