import styles from "app/page.module.css";
import Link from "next/link";
import { useSession, getSession } from "next-auth/react";
import TopNavBar from "@/components/TopNavBar";
import { Button, Form } from "react-bootstrap";
import fetchWrapper from "./api/fetchWrapper";
import { useState } from "react";

export default function Feedback() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.error === "Expired Token") {
      signIn(); // Force sign in to hopefully resolve error
    }
  }, [session]);

  const [values, setValues] = useState({
    feedback: "",
  });

  function onSubmit() {
    setValues({ ...values, ["date"]: new Date.now() });
    console.log(values);
    //fetchWrapper.post();
  }

  const onFormChange = (e, updatedAt) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
    console.log(name, value);
  };

  return (
    <main className={styles.main}>
      <TopNavBar />
      <h1>Site Feedback</h1>
      <p>*Any feedback is welcome and all feedback is anonymous*</p>
      <Form>
        <Form.Control
          as="textarea"
          rows={10}
          cols={50}
          required
          name="feedback"
          onChange={onFormChange}
        />
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
