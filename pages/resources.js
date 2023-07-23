import styles from "app/page.module.css";
import Link from "next/link";
import { useSession, signOut, getSession } from "next-auth/react";

export default function Resources() {
  const { data: session } = useSession();
  console.log(session.user.email);
  return <h2>General Resources</h2>;
}
