import styles from "../app/page.module.css";
import HomeTopBar from "../components/HomeTopBar";
import TopNavBar from "../components/TopNavBar";
import MyProfileTab from "@/components/MyProfileTab";
import CoursePlanningTab from "@/components/CoursePlanningTab";
import MyReviewsTab from "@/components/MyReviewsTab";
import React from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import fetchWrapper from "../pages/api/fetchWrapper";
import CreateProfile from "@/components/CreateProfile";
import { BrowserRouter } from "react-router-dom";

export default function HomePage() {
  const { data: session } = useSession();
  //console.log(session);

  const [userID, setUserID] = useState({});

  const [gotID, setGotID] = useState(false);

  const getUserInfo = async () => {
    try {
      setGotID(true);
      // const fetcher = fetchWrapper();
      const response = await fetchWrapper.get("/users/getuserid");

      const jsonData = response.data;
      //console.log(jsonData);
      setUserID(jsonData);
      //console.log(userID);
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
          <div className={styles.container}>
            <div className={styles.leftpane}>
              <div className={styles.borderBox}>
                <MyProfileTab session={session} />
              </div>
              <button onClick={() => signOut()}>Sign out</button>
            </div>
            <div className={styles.rightpane}>
              <div className={styles.borderBox}>
                <CoursePlanningTab />
              </div>
              <div className={styles.borderBox}>
                <MyReviewsTab />
              </div>
            </div>
          </div>
        </main>
      );
    }
  } else {
    return (
      <main className={styles.main}>
        <TopNavBar />
        <HomeTopBar />
        <div>
          <h3>
            Please sign in with your Penn Engineering email to access and use
            MCIT Community Hub.
          </h3>
          <button onClick={() => signIn("google")}>Sign in</button>
        </div>
      </main>
    );
  }
}

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
