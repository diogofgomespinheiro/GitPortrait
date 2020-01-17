//Library imports
import React, { useState } from "react";
import Router from "next/router";

//Style imports
import { Container, Title, Input } from "../styles/index";

const Index = () => {
  const [username, setUsername] = useState("");

  const handleChange = e => {
    setUsername(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Router.push({
      pathname: "/user",
      query: { username }
    });
  }

  return (
    <Container>
      <div>
        <Title>Check your github profile</Title>
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Username" value={username} onChange={handleChange} />
        </form>
      </div>
    </Container>
  );
};

export default Index;
