import styles from "app/page.module.css";
import Link from "next/link";
import { getSession } from "next-auth/react";
import TopNavBar from "@/components/TopNavBar";

export default function MCITConnect() {
  return (
    <main className={styles.main}>
      <TopNavBar />

      <h1>MCITConnect</h1>
      <h4>***Coming Soon***</h4>
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
