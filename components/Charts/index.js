//Library imports
import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

import { getTopLanguagesChart } from "../../utils/chart-utils";

import { ChartsContainer, Chart } from "./styles";

const Charts = ({ data }) => {
  const [DoughnutData, setDoughnutData] = useState();

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
    if (data) {
      console.log("Teste");
      setDoughnutData(getTopLanguagesChart(data));
    }
  }, [data]);

  if (!DoughnutData) return <h1>Loading...</h1>;

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
    </ChartsContainer>
  );
};

export default Charts;
