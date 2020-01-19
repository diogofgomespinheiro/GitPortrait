import styled from "styled-components";
import theme from "../../styles/theme";
import { shine, backgroundGradient } from "../../styles/index";

const { colors } = theme;

export const ProfileContainer = styled.div`
  padding: 50px;
`;

export const Avatar = styled.div`
  height: 150px;
  width: 150px;
  margin: 0 auto;
  background-color: white;
  border: 7px solid ${colors.secondary};
  border-radius: 100%;
  background-image: url(${props => props.url});
  background-size: cover;
`;

export const AvatarSkeleton = styled.div`
  height: 150px;
  width: 150px;
  margin: 0 auto;
  border-radius: 100%;
  ${backgroundGradient};
  animation: ${shine(100, 140)} 1.6s infinite linear;
`;

export const Username = styled.h1`
  margin-top: 20px;
  text-align: center;

  a {
    text-decoration: none;
    color: ${colors.secondary};
    word-break: break-all;
  }
`;

export const UsernameSkeleton = styled.div`
  margin: 20px auto 0 auto;
  height: 20px;
  width: 300px;
  border-radius: 50px;
  ${backgroundGradient};
  animation: ${shine(200, 300)} 1.6s infinite linear;

  @media only screen and (max-width: 500px) {
    width: 80%;
  }
`;
export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

export const Card = styled.div`
  height: 100px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 5px;
`;

export const CardSkeleton = styled.div`
  height: 100px;
  width: 150px;
  display: flex;
  border-radius: 15px;
  ${backgroundGradient};
  animation: ${shine(100, 150)} 1.6s infinite linear;
  margin: 5px;
`;
