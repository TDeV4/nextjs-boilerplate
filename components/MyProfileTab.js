import styles from '../app/page.module.css'

export default function MyProfileTab(props) {
  return (
  <div>
    <h2 className={styles.centeredHeading}>My Profile</h2>
    <div>
      <h5 className={styles.center}>Hello, {props.name}! AKA {props.anonName} (your anonymous name)</h5>
      <p>Expected Graduation: {props.graduationDate}</p>
      <p>Industry: {props.industry}</p>
      <p>Full-Time or Part-Time:{}</p>
      <p>Turtle or Non-turtle: {}</p>
      <p>Courses Completed: {props.courses}</p>

    </div>
  </div>
  )
}