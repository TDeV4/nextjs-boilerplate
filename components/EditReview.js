import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import styles from "../app/page.module.css";

export default function EditReview(props) {
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

  var selectedCourseID = props.reviewData.courseID;

  var otherCourses = [];
  props.courseData.map((course) => {
    if (course.courseID != selectedCourseID) {
      otherCourses.push(course);
    }
  });

  const [otherCourseOptions, setOtherCourseOptions] = useState(otherCourses);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  var selectedSemester = "";
  var selectedYear = "";
  var selectedRating = "";
  var selectedDifficulty = "";
  var selectedWorkload = 0;

  const isSemesterSelected = selectedSemester !== "";
  const isYearSelected = selectedYear !== "";
  const isRatingSelected = selectedRating !== "";
  const isDifficultySelected = selectedDifficulty !== "";
  const isWorkloadSelected = selectedWorkload > 0;

  var coursePairing1 = null;
  var coursePairing2 = null;
  var coursePairing3 = null;

  var numOfCoursePairings = Object.keys(props.coursePairings).length;

  if (numOfCoursePairings > 0) {
    coursePairing1 = props.coursePairings[0];
    if (numOfCoursePairings > 1) {
      coursePairing2 = props.coursePairings[1];
      if (numOfCoursePairings > 2) {
        coursePairing3 = props.coursePairings[2];
      }
    }
  }

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className={styles.rightAlignButton}
      >
        Edit Review
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Course Taken */}
            <Form.Control
              type="course"
              placeholder="Course"
              aria-label="Disabled input example"
              disabled
              readOnly
              defaultValue={
                props.reviewData.courseNumber +
                ": " +
                props.reviewData.courseName
              }
            ></Form.Control>

            {/* Semester and Year Course was taken */}
            <Row>
              <Col>
                <Form.Select
                  placeholder="selectSemester"
                  required={!isSemesterSelected}
                  aria-label="Semester Taken"
                  defaultValue={props.reviewData.semester}
                  onChange={(e) => (selectedSemester = e.target.value)}
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
                  required={!isYearSelected}
                  aria-label="Year Taken"
                  defaultValue={props.reviewData.year}
                  onChange={(e) => (selectedYear = e.target.value)}
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
            <Form.Control
              aria-label="Professor Selection"
              defaultValue={props.reviewData.professor}
              disabled
              readOnly
            ></Form.Control>

            {/* Final Grade */}
            <Form.Select
              placeholder="selectGrade"
              aria-label="Final Grade"
              defaultValue={props.reviewData.finalGrade}
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
                  required={!isDifficultySelected}
                  aria-label="Difficulty of Course"
                  onChange={(e) => (selectedDifficulty = e.target.value)}
                  defaultValue={props.reviewData.difficulty}
                >
                  <option key="blankChoice" hidden value="">
                    {" "}
                    Course Difficulty{" "}
                  </option>
                  <option value={1}>Piece of Cake</option>
                  <option value={2}>Easy</option>
                  <option value={3}>Normal</option>
                  <option value={4}>Hard</option>
                  <option value={5}>Harder than Hard</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  placeholder="courseRating"
                  required={!isRatingSelected}
                  aria-label="courseRating"
                  onChange={(e) => (selectedRating = e.target.value)}
                  defaultValue={props.reviewData.rating}
                >
                  <option key="blankChoice" hidden value="">
                    {" "}
                    Rating{" "}
                  </option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </Form.Select>
              </Col>
            </Row>
            <Form.Control
              type="Number"
              placeholder="Workload (hours per week)"
              required={!isWorkloadSelected}
              onChange={(e) => (selectedWorkload = parseInt(e.target.value))}
              defaultValue={props.reviewData.weeklyHours}
            />
            <br></br>
            {/* Taken with Courses*/}
            <Row>
              <Col>
                <Form.Select
                  placeholder="selectTakenWithCourse"
                  aria-label="Taken With Course Selection"
                  options={otherCourseOptions}
                  defaultValue={
                    !Object.is(coursePairing1, null)
                      ? coursePairing1.courseID
                      : null
                  }
                >
                  <option key="blankChoice" value="">
                    {" "}
                    Taken with...{" "}
                  </option>
                  {otherCourseOptions.map((course) => {
                    return (
                      <option key={course.courseID} value={course.courseID}>
                        {course.courseID}: {course.courseName}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  placeholder="recommendationForPairing"
                  aria-label="Recommendation for Pairing"
                  defaultValue={
                    !Object.is(coursePairing1, null)
                      ? coursePairing1.pairingRec
                      : null
                  }
                >
                  <option key="blankChoice" hidden value="">
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
                  defaultValue={
                    !Object.is(coursePairing2, null)
                      ? coursePairing2.courseID
                      : null
                  }
                >
                  <option key="blankChoice" value="">
                    {" "}
                    Taken with...{" "}
                  </option>
                  {otherCourseOptions.map((course) => {
                    return (
                      <option key={course.courseID} value={course.courseID}>
                        {course.courseID}: {course.courseName}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  placeholder="recommendationForPairing"
                  aria-label="Recommendation for Pairing"
                  defaultValue={
                    !Object.is(coursePairing2, null)
                      ? coursePairing2.pairingRec
                      : null
                  }
                >
                  <option key="blankChoice" hidden value="">
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
                  defaultValue={
                    !Object.is(coursePairing3, null)
                      ? coursePairing3.courseID
                      : null
                  }
                >
                  <option key="blankChoice" value="">
                    {" "}
                    Taken with...{" "}
                  </option>
                  {otherCourseOptions.map((course) => {
                    return (
                      <option key={course.courseID} value={course.courseID}>
                        {course.courseID}: {course.courseName}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  placeholder="recommendationForPairing"
                  aria-label="Recommendation for Pairing"
                  defaultValue={
                    !Object.is(coursePairing3, null)
                      ? coursePairing3.pairingRec
                      : null
                  }
                >
                  <option key="blankChoice" hidden value="">
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
              course back to Taken with... and do not need to worry about the
              Recommendation that is selection.
            </Form.Text>

            <Form.Control
              as="textarea"
              rows={7}
              placeholder="I liked/disliked the course because..."
              defaultValue={props.review.content}
            />
            <br />
            <button>Publish Review</button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
