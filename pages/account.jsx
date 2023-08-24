import { getSession, signOut } from "next-auth/react";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  // Check if the token is expired
  if (session.expires && session.expires < Math.floor(Date.now() / 1000)) {
    // The token is expired, sign out the user
    await signOut();

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
