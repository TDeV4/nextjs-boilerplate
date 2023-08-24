import styles from "app/page.module.css";
import Link from "next/link";
import { useSession, signOut, getSession } from "next-auth/react";
import TopNavBar from "@/components/TopNavBar";
import ResourceList from "@/components/ResourceList";
import { useEffect } from "react";


export default function Resources() {
  const { data: session } = useSession();

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
