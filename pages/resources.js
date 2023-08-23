import styles from "app/page.module.css";
import Link from "next/link";
import { useSession, signOut, getSession } from "next-auth/react";
import TopNavBar from "@/components/TopNavBar";
import ResourceList from "@/components/ResourceList";
import { useEffect } from "react";


export default function Resources() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.error === "Expired Token") {
      signIn(); // Force sign in to hopefully resolve error
    }
  }, [session]);
  // const { data: session } = useSession();
  // console.log(session.user.email);
  return (
    <main className={styles.main}>
      <TopNavBar />
      <ResourceList />
    </main>
  );
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
