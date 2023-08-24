import styles from "app/page.module.css";
import Link from "next/link";
import { useSession, getSession } from "next-auth/react";
import TopNavBar from "@/components/TopNavBar";
import { Button, Form } from "react-bootstrap";
import fetchWrapper from "./api/fetchWrapper";
import { useEffect, useState } from "react";
import CreateProfile from "@/components/CreateProfile";
import { BrowserRouter } from "react-router-dom";

export default function Feedback() {
  const { data: session } = useSession();

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

  const [userID, setUserID] = useState({});

  const [gotID, setGotID] = useState(false);

  const getUserInfo = async () => {
    try {
      setGotID(true);
      // const fetcher = fetchWrapper();
      const response = await fetchWrapper.get("/users/getuserid");

      const jsonData = response.data;
      console.log(jsonData);
      setUserID(jsonData);
      console.log(userID);
      // mark that we got the data
      // setHasFetchedData(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (session && !gotID) {
      console.log("Getting profile");
      getUserInfo();
    }
  });

  if (session) {
    if (userID.userID === null) {
      return (
        <main className={styles.main}>
          <h1>Please create your profile to continue: </h1>
          <BrowserRouter>
            <CreateProfile />
          </BrowserRouter>
          <button onClick={() => signOut()}>Sign out</button>
        </main>
      );
    } else {
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
  }
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
