import styled from "styled-components";
import { shine, backgroundGradient } from "../../styles/index";

export const ChartsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Chart = styled.div`
  padding: 40px 40px 80px 40px;
  background-color: white;
  border-radius: 20px;
  margin-top: 20px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }

  @media only screen and (max-width: 716px) {
    margin-right: 20px;
    margin-left: 20px;
  }
`;

export const ChartSkeleton = styled.div`
  height: 420px;
  width: 330px;
  border-radius: 20px;
  ${backgroundGradient};
  animation: ${shine(200, 330)} 1.6s infinite linear;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
