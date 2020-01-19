//Library imports
import React, { useState } from "react";
import { useRouter } from "next/router";
import fetch from "unfetch";
import useSWR from "swr";

//Component imports
import Profile from "../components/Profile";
import Charts from "../components/Charts";
import Repos from "../components/Repos";

//Style imports
import { Error } from "../styles/user";
import { ChartsContainer, ChartSkeleton } from "../components/Charts/styles";
import { RepoSkeleton, ReposContainer } from "../components/Repos/styles";

const API_URL = "https://api.github.com";

const getUserData = async path => {
  const res = await fetch(`${API_URL}/${path}`);
  const json = await res.json();
  return json;
};

const getUserRepos = async path => {
  const res = await fetch(`${API_URL}/${path}`);
  const json = await res.json();
  return json;
};

const User = () => {
  const router = useRouter();
  const username = router.query.username;

  const userData = useSWR(`users/${username}`, getUserData);
  const userRepos = useSWR(
    `users/${username}/repos?per_page=1000`,
    getUserRepos
  );

  if (userData.data?.message === "Not Found")
    return (
      <Error>
        <h1>This user doesn´t exist.</h1>
      </Error>
    );

  if (userData.data?.message || userRepos.data?.message)
    return (
      <Error>
        <h1>Ups you reached the limit for now, try again later.</h1>
      </Error>
    );

  return (
    <main>
      <Profile
        username={username}
        data={userData.data}
        loading={!userData.data ? true : false}
      />
      {userRepos.data ? (
        <>
          <Charts data={userRepos.data} />
          <Repos data={userRepos.data} />
        </>
      ) : (
        <>
          <ChartsContainer>
            <ChartSkeleton />
            <ChartSkeleton />
            <ChartSkeleton />
          </ChartsContainer>
          <ReposContainer>
            <RepoSkeleton />
            <RepoSkeleton />
            <RepoSkeleton />
            <RepoSkeleton />
            <RepoSkeleton />
          </ReposContainer>
        </>
      )}
    </main>
  );
};

export default User;
