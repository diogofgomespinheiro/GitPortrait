//Library imports
import React, { useState } from "react";
import { useRouter } from "next/router";
import fetch from "unfetch";
import useSWR from "swr";

//Component imports
import Profile from "../components/Profile";

//Style imports
import { Error } from "../styles/user";

const API_URL = "https://api.github.com";

const getUserData = async path => {
  const res = await fetch(`${API_URL}/${path}`);
  const json = await res.json();
  return json;
};

const User = () => {
  const router = useRouter();
  const username = router.query.username;

  const userData = useSWR(`users/${username}`, getUserData);

  if (userData.data?.message === "Not Found")
    return (
      <Error>
        <h1>This user doesn´t exist.</h1>
      </Error>
    );

  return (
    <main>
      <Profile username={username} data={userData.data} />
    </main>
  );
};

export default User;
