//Library imports
import React from "react";

//Style imports
import {
  ProfileContainer,
  Avatar,
  Username,
  AvatarSkeleton,
  UsernameSkeleton,
  CardContainer,
  Card,
  CardSkeleton
} from "./styles";

const Profile = ({ username, data }) => {
  return (
    <ProfileContainer>
      {data ? (
        <>
          <Avatar url={data.avatar_url} />
          <Username>
            <a href={data.html_url} target="_blank" rel="noopener noreferrer">
              @{username}
            </a>
          </Username>
          <CardContainer>
            <Card>
              <h2>{data.public_repos}</h2>
              <p>Repositories</p>
            </Card>
            <Card>
              <h2>{data.followers}</h2>
              <p>Followers</p>
            </Card>
            <Card>
              <h2>{data.following}</h2>
              <p>Following</p>
            </Card>
          </CardContainer>
        </>
      ) : (
        <>
          <AvatarSkeleton />
          <UsernameSkeleton />
          <CardContainer>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </CardContainer>
        </>
      )}
    </ProfileContainer>
  );
};

export default Profile;
