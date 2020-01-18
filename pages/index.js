//Library imports
import React, { useState } from "react";
import Router from "next/router";
import Lottie from "react-lottie";
import animationData from "../assets/github-logo.json";

//Style imports
import { Container, Title, Input } from "../styles/index";

const Index = () => {
  const [username, setUsername] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handleChange = e => {
    setUsername(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    Router.push({
      pathname: "/user",
      query: { username }
    });
  };

  return (
    <Container>
      <div>
        <Lottie options={defaultOptions} height={200} width={200} />
        <Title>Check your github profile</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />
        </form>
      </div>
    </Container>
  );
};

export default Index;
