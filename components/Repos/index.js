//Library imports
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/star.json";

//Style imports
import { ReposContainer, Repo, RepoStats } from "./styles";

const Repos = ({ data }) => {
  const sortedData = data.sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  );

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      <h1
        style={{
          color: "white",
          margin: "100px auto 0 auto",
          width: "80%",
          padding: "10px"
        }}
      >
        Repositories
      </h1>
      <ReposContainer>
        {sortedData.slice(0, 10).map((repo, index) => {
          return (
            <Repo
              key={repo.id}
              onClick={() => window.open(repo.svn_url, "_blank")}
            >
              <h3>{repo.name}</h3>
              <p>{repo.description?.slice(0, 100)}</p>
              <RepoStats>
                <Lottie options={defaultOptions} height={20} width={50} />
                <span>{repo.stargazers_count}</span>
                <span>{repo.size} KB</span>
              </RepoStats>
            </Repo>
          );
        })}
      </ReposContainer>
    </>
  );
};

export default Repos;
