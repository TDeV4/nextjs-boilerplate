import styles from "app/page.module.css";
import Link from "next/link";
import { getSession } from "next-auth/react";
import TopNavBar from "@/components/TopNavBar";
import { Button, Form } from "react-bootstrap";

export default function Feedback() {
  return (
    <main className={styles.main}>
      <TopNavBar />
      <h2>Site Feedback</h2>
      <p>*Any feedback is welcome and all feedback is anonymous*</p>
      <Form>
        <Form.Control
          as="textarea"
          size="lg"
          cols={75}
          rows={10}
          placeholder="Feel free to leave us feedback on the site or additional features that you would like to see…
"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </main>
  );
}

//redirect user to an unaunthenticated page if not authenticated
export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return {
    props: { session },
  };
};
