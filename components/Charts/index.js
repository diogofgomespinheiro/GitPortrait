//Library imports
import React, { useState, useEffect } from "react";
import { Doughnut, Bar } from "react-chartjs-2";

import {
  getTopLanguagesChart,
  getRepoSizesChart
} from "../../utils/chart-utils";

import { ChartsContainer, Chart, ChartSkeleton } from "./styles";

const Charts = ({ data }) => {
  const [DoughnutData, setDoughnutData] = useState();
  const [BarData, setBarData] = useState();

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
    setBarData(getRepoSizesChart(data));
  }, []);

  if (!DoughnutData || !BarData)
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
        <Bar data={BarData} height={300} width={250} options={options} />
      </Chart>
    </ChartsContainer>
  );
};

export default Charts;
