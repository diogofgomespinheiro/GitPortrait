//Library imports
import React, { useState, useEffect } from "react";
import { Doughnut, Bar } from "react-chartjs-2";

import {
  getTopLanguagesChart,
  getRepoSizesChart,
  getMostStarredRepos
} from "../../utils/chart-utils";

import { ChartsContainer, Chart, ChartSkeleton } from "./styles";

const Charts = ({ data }) => {
  const [DoughnutData, setDoughnutData] = useState();
  const [RepoSizesData, setRepoSizesData] = useState();
  const [mostStarredReposData, setMostStarredReposData] = useState();


  const options = {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontSize: 10
      }
    }
  };

  useEffect(() => {
    setDoughnutData(getTopLanguagesChart(data));
    setRepoSizesData(getRepoSizesChart(data));
    setMostStarredReposData(getMostStarredRepos(data))
  }, []);

  if (!DoughnutData || !RepoSizesData || !mostStarredReposData)
    return (
      <ChartsContainer>
        <ChartSkeleton />
      </ChartsContainer>
    );

  return (
    <ChartsContainer>
      <Chart>
        <h2>Top Languages</h2>
        <Doughnut
          data={DoughnutData}
          height={300}
          width={250}
          options={options}
        />
      </Chart>
      <Chart>
        <h2>Largest Repostories</h2>
        <Bar data={RepoSizesData} height={300} width={250} options={options} />
      </Chart>
      <Chart>
        <h2>Most Starred Repositories</h2>
        <Bar data={mostStarredReposData} height={300} width={250} options={options} />
      </Chart>
    </ChartsContainer>
  );
};

export default Charts;
