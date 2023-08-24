import styles from "app/page.module.css";
import Link from "next/link";
import { useSession, signOut, getSession } from "next-auth/react";
import TopNavBar from "@/components/TopNavBar";
import ResourceList from "@/components/ResourceList";
import { useEffect, useState } from "react";
import CreateProfile from "@/components/CreateProfile";
import { BrowserRouter } from "react-router-dom";

export default function Resources() {
  const { data: session } = useSession();

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

  // const { data: session } = useSession();
  // console.log(session.user.email);
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
          <ResourceList />
        </main>
      );
    }
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
