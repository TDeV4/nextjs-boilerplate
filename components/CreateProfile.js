import { Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useState, useEffect } from "react";
import styles from "../app/page.module.css";
import "react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css";
import fetchWrapper from "../pages/api/fetchWrapper";
import { useNavigate } from "react-router-dom";
import { useSession } from "next-auth/react";

export default function CreateProfile(props) {
  const [values, setValues] = useState({
    name: null,
    anonName: null,
    timeZone: null,
    startYear: null,
    expectedGradSemester: null,
    expectedGradYear: null,
    industry: null,
    bio: null,
    workStatus: null,
    inTurtleClub: null,
    coursesTaken: [],
    coursesTaking: [],
    mcitEmailNotifications: false,
    mcitConnectEnable: false,
    mcitConnectEmailNotifications: false,
  });

  const { data: session } = useSession();

  const timeZones = [
    "[GMT-12:00] International Date Line West",
    "[GMT-11:00] Midway Island, Samoa",
    "[GMT-10:00] Hawaii",
    "[GMT-09:00] Alaska",
    "[GMT-08:00] Pacific Time (US & Canada); Tijuana",
    "[GMT-07:00] Arizona",
    "[GMT-07:00] Chihuahua, La Paz, Mazatlan",
    "[GMT-07:00] Mountain Time (US & Canada)",
    "[GMT-06:00] Central America",
    "[GMT-06:00] Central Time (US & Canada)",
    "[GMT-06:00] Guadalajara, Mexico City, Monterrey",
    "[GMT-06:00] Saskatchewan",
    "[GMT-05:00] Bogota, Lima, Quito",
    "[GMT-05:00] Eastern Time (US & Canada)",
    "[GMT-05:00] Indiana (East)",
    "[GMT-04:00] Atlantic Time (Canada)",
    "[GMT-04:30] Caracas, La Paz",
    "[GMT-04:00] Santiago",
    "[GMT-03:30] Newfoundland",
    "[GMT-03:00] Brasilia",
    "[GMT-03:00] Buenos Aires, Georgetown",
    "[GMT-03:00] Greenland",
    "[GMT-02:00] Mid-Atlantic",
    "[GMT-01:00] Azores",
    "[GMT-01:00] Cape Verde Is.",
    "[UTC] Coordinated Universal Time",
    "[GMT] Greenwich Mean Time: Dublin, Edinburgh, Lisbon, London",
    "[GMT+01:00] Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
    "[GMT+01:00] Belgrade, Bratislava, Budapest, Ljubljana, Prague",
    "[GMT+01:00] Brussels, Copenhagen, Madrid, Paris",
    "[GMT+01:00] Sarajevo, Skopje, Warsaw, Zagreb",
    "[GMT+01:00] West Central Africa",
    "[GMT+02:00] Athens, Istanbul",
    "[GMT+02:00] Bucharest",
    "[GMT+02:00] Cairo",
    "[GMT+02:00] Harare, Pretoria",
    "[GMT+02:00] Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
    "[GMT+02:00] Jerusalem",
    "[GMT+03:00] Baghdad",
    "[GMT+03:00] Kuwait, Riyadh",
    "[GMT+03:00] Nairobi",
    "[GMT+03:30] Tehran",
    "[GMT+03:00] Moscow, St. Petersburg, Volgograd",
    "[GMT+04:00] Abu Dhabi, Muscat",
    "[GMT+04:00] Baku, Tbilisi, Yerevan",
    "[GMT+04:30] Kabul",
    "[GMT+05:00] Ekaterinburg",
    "[GMT+05:00] Islamabad, Karachi, Tashkent",
    "[GMT+05:30] Chennai, Kolkata, Mumbai, New Delhi",
    "[GMT+05:45] Kathmandu",
    "[GMT+06:00] Almaty, Novosibirsk",
    "[GMT+06:00] Astana, Dhaka",
    "[GMT+06:00] Sri Jayawardenepura",
    "[GMT+06:30] Rangoon",
    "[GMT+07:00] Bangkok, Hanoi, Jakarta",
    "[GMT+07:00] Krasnoyarsk",
    "[GMT+08:00] Beijing, Chongqing, Hong Kong, Urumqi",
    "[GMT+08:00] Irkutsk, Ulaan Bataar",
    "[GMT+08:00] Kuala Lumpur, Singapore",
    "[GMT+08:00] Perth",
    "[GMT+08:00] Taipei",
    "[GMT+09:00] Osaka, Sapporo, Tokyo",
    "[GMT+09:00] Seoul",
    "[GMT+09:00] Yakutsk",
    "[GMT+09:30] Adelaide",
    "[GMT+09:30] Darwin",
    "[GMT+10:00] Brisbane",
    "[GMT+10:00] Canberra, Melbourne, Sydney",
    "[GMT+10:00] Guam, Port Moresby",
    "[GMT+10:00] Hobart",
    "[GMT+10:00] Vladivostok",
    "[GMT+11:00] Magadan, Solomon Is., New Caledonia",
    "[GMT+12:00] Auckland, Wellington",
    "[GMT+12:00] Fiji, Kamchatka, Marshall Is.",
    "[GMT+13:00] Nuku'alofa",
  ];

  const timeZoneOptions = [];
  for (let i = 0; i < timeZones.length; i++) {
    timeZoneOptions.push(
      <option key={i} value={timeZones[i]}>
        {timeZones[i]}
      </option>
    );
  }

  const onSwitchChange = (e) => {
    const name = e.target.name;
    const currentValue = values[name];
    setValues({ ...values, [name]: !currentValue });
    console.log(name, !currentValue);
  };

  const onCourseTakenChange = (e) => {
    const course = e.target.value;
    if (values["coursesTaken"].includes(course)) {
      const index = values["coursesTaken"].indexOf(course);
      values["coursesTaken"].splice(index, 1);
    } else {
      const newArray = values["coursesTaken"];
      newArray.push(course);
      values["coursesTaken"] = newArray;
    }
    console.log(values["coursesTaken"]);
  };

  const onCourseTakingChange = (e) => {
    const course = e.target.value;
    if (values["coursesTaking"].includes(course)) {
      const index = values["coursesTaking"].indexOf(course);
      values["coursesTaking"].splice(index, 1);
    } else {
      const newArray = values["coursesTaking"];
      newArray.push(course);
      values["coursesTaking"] = newArray;
    }
    console.log(values["coursesTaking"]);
  };

  const onFormChange = (e, updatedAt) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
    console.log(name, value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const expectedGraduation =
        values["expectedGradSemester"] + " " + values["expectedGradYear"];
      console.log(expectedGraduation);
      const startSemester = values["startSemester"] + " " + values["startYear"];
      console.log(startSemester);

      values["expectedGraduation"] = expectedGraduation;
      values["startSemester"] = startSemester;

      console.log(values);

      fetchWrapper
        .post("/users/", values)
        .then((data) => console.log("Success", data))
        .catch((error) => console.error("There was an error!", error));
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.log("Failed to create user");
      console.log(err);
    }
  };

  const startYearOptions = [];
  for (let i = 2018; i <= new Date().getFullYear(); i++) {
    startYearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const endYearOptions = [];
  for (let i = 2020; i <= new Date().getFullYear() + 5; i++) {
    endYearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const [courses, setCourses] = useState([]);

  const getCourseStats = async () => {
    try {
      const response = await fetchWrapper.get("/courses/");

      const jsonData = response.data;
      // console.log(jsonData);
      setCourses(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    console.log("Getting course stats");
    getCourseStats();
    setValues({ ...values, ["email"]: session.user.email });
  }, [session.user.email]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
          <Form.Control
            name="name"
            type="text"
            placeholder="Name"
            onChange={onFormChange}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingAnonName"
          label="Anonymous Name (This is the name that will be publicly available - if you do not want your account associated with you, choose something random like Purple Panda)"
          className="mb-3"
        >
          <Form.Control
            required
            type="text"
            name="anonName"
            onChange={onFormChange}
          />
        </FloatingLabel>

        <FloatingLabel controlId="Time Zone" label="Time Zone" className="mb-3">
          <Form.Select
            placeholder="Time Zone"
            name="timeZone"
            onChange={onFormChange}
            required
          >
            <option key="blankChoice" hidden value="" />
            {timeZoneOptions}
          </Form.Select>
        </FloatingLabel>
        <br></br>
        <Row>
          <Col>
            <FloatingLabel
              controlId="startSemester"
              label="Start Semester"
              className="mb-3"
            >
              <Form.Select name="startSemester" onChange={onFormChange}>
                <option key="blankChoice" hidden value="" />
                <option value="Fall">Fall</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="startYear"
              label="Start Year"
              className="mb-3"
            >
              <Form.Select required name="startYear" onChange={onFormChange}>
                <option key="blankChoice" hidden value="" />
                {startYearOptions}
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="expectedGraduationSemester"
              label="Expected Graduation Semester"
              className="mb-3"
            >
              <Form.Select name="expectedGradSemester" onChange={onFormChange}>
                <option key="blankChoice" hidden value="" />
                <option value="Fall">Fall</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="expectedGraduationYear"
              label="Expected Graduation Year"
              className="mb-3"
            >
              <Form.Select
                required
                name="expectedGradYear"
                onChange={onFormChange}
              >
                <option key="blankChoice" hidden value="" />
                {endYearOptions}
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <FloatingLabel
          controlId="floatingIndustry"
          label="Industry"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Industry"
            name="industry"
            onChange={onFormChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingBio" label="Bio" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Bio"
            name="bio"
            onChange={onFormChange}
          />
        </FloatingLabel>
        <Form.Label>Work Status</Form.Label>
        <div key={`inline-radio1`} className="mb-3">
          <Form.Check
            inline
            label="Full-Time"
            name="workStatus"
            type="radio"
            value="Full-Time"
            onChange={onFormChange}
          />
          <Form.Check
            inline
            label="Part-Time"
            name="workStatus"
            type="radio"
            value="Part-Time"
            onChange={onFormChange}
          />
          <Form.Check
            inline
            label="Full-Time Student"
            name="workStatus"
            type="radio"
            value="Full-Time Student"
            onChange={onFormChange}
          />
        </div>
        <Form.Label>Turtle Club Status</Form.Label>
        <div key={`inline-radio2`} className="mb-3">
          <Form.Check
            inline
            label="In Turtle Club"
            name="inTurtleClub"
            type="radio"
            id="true"
            value={true}
            onChange={onFormChange}
          />
          <Form.Check
            inline
            label="Not In Turtle Club"
            name="inTurtleClub"
            type="radio"
            id="false"
            value={false}
            onChange={onFormChange}
          />
        </div>
        <Form.Label>Courses Taken</Form.Label>
        <div key={`inline-checks1`} className="mb-3">
          {courses.map((course) => {
            var keyValue = course.courseID + "taken";
            return (
              <Form.Check
                inline
                key={keyValue}
                label={course.coursenumber}
                name="coursesTaken"
                type="checkbox"
                id={course.courseID}
                value={course.courseID}
                onChange={onCourseTakenChange}
              />
            );
          })}
        </div>
        <Form.Label>Courses Currently Being Taken</Form.Label>
        <div key={`inline-checks2`} className="mb-3">
          {courses.map((course) => {
            var keyValue = course.courseID + "currentlyTaking";
            return (
              <Form.Check
                inline
                key={keyValue}
                label={course.coursenumber}
                name="coursesTaking"
                type="checkbox"
                id={course.coursenumber}
                value={course.courseID}
                onChange={onCourseTakingChange}
              />
            );
          })}
        </div>
        <br></br>
        <Form.Label>
          *Blue means it is enabled / Gray means it is disabled*
        </Form.Label>
        <Form.Check // prettier-ignore
          type="switch"
          id="mcitEmailNotifications"
          label="Enable email notifications from MCITCentral"
          name="mcitEmailNotifications"
          onChange={onSwitchChange}
        />
        <Form.Check // prettier-ignore
          type="switch"
          id="mcitConnectEnabled"
          label="Enable MCIT Connect"
          name="mcitConnectEnable"
          onChange={onSwitchChange}
        />
        <Form.Check // prettier-ignore
          type="switch"
          id="mcitConnectEmailNotifications"
          label="Enable MCIT Connect email notifications"
          name="mcitConnectEmailNotifications"
          onChange={onSwitchChange}
        />
        <br />
        <button type="Submit">Create Profile</button>
      </Form>
    </>
  );
}
