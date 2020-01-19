import styled from "styled-components";
import { backgroundGradient, shine } from "../../styles/index";

export const ReposContainer = styled.div`
  margin: 50px auto 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;
  padding: 10px;
  width: 80%;
`;

export const Repo = styled.div`
  height: 200px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;

  p {
    margin-top: 10px;
  }
`;

export const RepoStats = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  width: 100%;

  span:last-child {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }
`;

export const RepoSkeleton = styled.div`
  height: 200px;
  padding: 20px;
  border-radius: 10px;
  ${backgroundGradient};
  animation: ${shine(100, 300)} 1.6s infinite linear;
`;
