import styles from "app/page.module.css";
import Link from "next/link";
import { getSession } from "next-auth/react";
import TopNavBar from "@/components/TopNavBar";
import { Button, Form } from "react-bootstrap";

function onSubmit() {}

export default function Feedback() {
  return (
    <main className={styles.main}>
      <TopNavBar />
      <h1>Site Feedback</h1>
      <p>*Any feedback is welcome and all feedback is anonymous*</p>
      <Form>
        <Form.Control as="textarea" rows={10} cols={50} required />
        <Button type="sumbit" onSubmit={onSubmit}>
          Submit
        </Button>
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
