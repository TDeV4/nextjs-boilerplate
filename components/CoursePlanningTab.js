import styles from "../app/page.module.css";
import Column from "./column";

const DUMMY_DATA = [
  {
    semesterID: "1",
    courseID: "591",
  },
  {
    semesterID: "1",
    courseID: "592",
  },
  {
    semesterID: "2",
    courseID: "593",
  },
  {
    semesterID: "4",
    courseID: "595",
  },
];

export default function CoursePlanningTab() {
  return (
    <div className={styles.parentContainer}>
      <h3>Course Planning</h3>
      <div className={styles.scrollableContainer}>
        <Column semesterID="1" courses={DUMMY_DATA} />
        <div className={styles.columnSpacer}></div>
        <Column semesterID="2" courses={DUMMY_DATA} />
        <div className={styles.columnSpacer}></div>
        <Column semesterID="3" courses={DUMMY_DATA} />
        <div className={styles.columnSpacer}></div>
        <Column semesterID="4" courses={DUMMY_DATA} />
        <div className={styles.columnSpacer}></div>
        <Column semesterID="5" courses={DUMMY_DATA} />
        <div className={styles.columnSpacer}></div>
        <Column semesterID="6" courses={DUMMY_DATA} />
        <div className={styles.columnSpacer}></div>
        <Column semesterID="7" courses={DUMMY_DATA} />
      </div>
    </div>
  );
}
