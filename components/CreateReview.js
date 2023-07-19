import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

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

  var selectedCourseID;

  const handleCourseChange = (e) => {
    selectedCourseID = e.target.value;
    relevantProfessors();
    setRelatedProfs(relevantProfs);
    findOtherCourses();
    setOtherCourseOptions(otherCourses);
  };

  var relevantProfs = [];

  function relevantProfessors() {
    relevantProfs = [];
    props.profData.map((prof) => {
      if (prof.courseID == selectedCourseID) {
        relevantProfs.push(prof.professor);
      }
    });
  }

  var otherCourses = [];
  function findOtherCourses() {
    otherCourses = [];
    props.courseData.map((course) => {
      if (course.courseID != selectedCourseID) {
        otherCourses.push(course);
      }
    });
  }

  const [relatedProfs, setRelatedProfs] = useState(relevantProfs);
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
  var selectedProf = "";
  var selectedRating = "";
  var selectedDifficulty = "";
  var selectedWorkload = 0;

  const isCourseSelected = selectedCourseID !== "";
  const isSemesterSelected = selectedSemester !== "";
  const isYearSelected = selectedYear !== "";
  const isProfSelected = selectedProf !== "";
  const isRatingSelected = selectedRating !== "";
  const isDifficultySelected = selectedDifficulty !== "";
  const isWorkloadSelected = selectedWorkload > 0;

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create a Review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Course Taken */}
            <Form.Select
              placeholder="selectCourse"
              required={isCourseSelected}
              aria-label="Course Selection"
              onChange={handleCourseChange}
            >
              <option key="blankChoice" hidden value="">
                Select a Course
              </option>
              {props.courseData.map((course) => (
                <option key={course.courseID} value={course.courseID}>
                  CIT {course.courseID}: {course.courseName}
                </option>
              ))}
            </Form.Select>

            {/* Semester and Year Course was taken */}
            <Row>
              <Col>
                <Form.Select
                  placeholder="selectSemester"
                  required={!isSemesterSelected}
                  aria-label="Semester Taken"
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
            <Form.Select
              placeholder="selectProf"
              required={!isProfSelected}
              aria-label="Professor Selection"
              onChange={(e) => (selectedProf = e.target.value)}
              options={relatedProfs}
            >
              <option key="blankChoice" hidden value="">
                {" "}
                Select Professor{" "}
              </option>
              {relatedProfs.map((prof) => {
                return <option>{prof}</option>;
              })}
            </Form.Select>

            {/* Final Grade */}
            <Form.Select placeholder="selectGrade" aria-label="Final Grade">
              <option key="blankChoice" hidden value="">
                {" "}
                Final Grade (optional){" "}
              </option>
              <option>Prefer not to say</option>
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
                >
                  <option key="blankChoice" hidden value="">
                    {" "}
                    Course Difficulty{" "}
                  </option>
                  <option>Piece of Cake</option>
                  <option>Easy</option>
                  <option>Normal</option>
                  <option>Hard</option>
                  <option>Near Impossible</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  placeholder="courseRating"
                  required={!isRatingSelected}
                  aria-label="courseRating"
                  onChange={(e) => (selectedRating = e.target.value)}
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
              required={!isWorkloadSelected}
              onChange={(e) => (selectedWorkload = parseInt(e.target.value))}
            />
            <br></br>
            {/* Taken with Courses*/}
            <Row>
              <Col>
                <Form.Select
                  placeholder="selectTakenWithCourse"
                  aria-label="Taken With Course Selection"
                  options={otherCourseOptions}
                >
                  <option key="blankChoice" value="">
                    {" "}
                    Taken with...{" "}
                  </option>
                  {otherCourseOptions.map((course) => {
                    return (
                      <option>
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
                >
                  <option key="blankChoice" hidden value="">
                    {" "}
                    Recommendation{" "}
                  </option>
                  <option>Recommended</option>
                  <option>Neutral</option>
                  <option>Not Recommended</option>
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Select
                  placeholder="selectTakenWithCourse"
                  aria-label="Taken With Course Selection"
                  options={otherCourseOptions}
                >
                  <option key="blankChoice" value="">
                    {" "}
                    Taken with...{" "}
                  </option>
                  {otherCourseOptions.map((course) => {
                    return (
                      <option>
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
                >
                  <option key="blankChoice" hidden value="">
                    {" "}
                    Recommendation{" "}
                  </option>
                  <option>Recommended</option>
                  <option>Neutral</option>
                  <option>Not Recommended</option>
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Select
                  placeholder="selectTakenWithCourse"
                  aria-label="Taken With Course Selection"
                  options={otherCourseOptions}
                >
                  <option key="blankChoice" value="">
                    {" "}
                    Taken with...{" "}
                  </option>
                  {otherCourseOptions.map((course) => {
                    return (
                      <option>
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
                >
                  <option key="blankChoice" hidden value="">
                    {" "}
                    Recommendation{" "}
                  </option>
                  <option>Recommended</option>
                  <option>Neutral</option>
                  <option>Not Recommended</option>
                </Form.Select>
              </Col>
            </Row>
            <Form.Text className="text-muted">
              If you mistakenly select a course, you can simply switch the
              choice back to "Taken with..." to accurately reflect your
              experience and don't need to worry about your Recommendation
              selection.
            </Form.Text>

            <Form.Control
              as="textarea"
              rows={7}
              placeholder="I liked/disliked the course because..."
            />
            <br />
            <button>Publish Review</button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
