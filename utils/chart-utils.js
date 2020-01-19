const colors = [
  "#FE4A49",
  "#2AB7CA",
  "#FED766",
  "#22eaaa  ",
  "#83e85a",
  "#7FDEFF",
  "#a7ff83",
  "#4C9F70",
  "#E56B70",
  "#8FC0A9",
  "#FAF3DD",
  "#96E072",
  "#F39237",
  "#D63230",
  "#39A9DB",
  "#1C77C3",
  "#ffc93c",
  "#83BCA9",
  "#faee5a",
  "#E05263"
];

export const getTopLanguagesChart = data => {
  const labels = [];
  const values = [];
  const background = [];
  const languages = new Map();
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    if (!languages.has(data[i].language)) {
      languages.set(data[i].language, count);

      if (data[i].language === null) {
        labels.push("Others");
      } else {
        labels.push(data[i].language);
      }
      values.push(1);
      background.push(colors[Math.floor(Math.random() * colors.length)]);
      count++;
    } else {
      values[languages.get(data[i].language)] =
        values[languages.get(data[i].language)] + 1;
    }
  }

  const formatedData = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: background,
        hoverBackgroundColor: background
      }
    ]
  };

  return formatedData;
};

export const getRepoSizesChart = data => {
  const labels = [];
  const values = [];
  const background = [];
  const length = data.length > 4 ? 5 : data.length;

  const sortedData = data.sort((a, b) => b.size - a.size);

  for (let i = 0; i < length; i++) {
    labels.push(sortedData[i].name);
    values.push(sortedData[i].size);
    background.push(colors[Math.floor(Math.random() * colors.length)]);
  }

  const formatedData = {
    labels: labels,
    datasets: [
      {
        label: "Top 5 - Largest Repositories (kbs)",
        data: values,
        backgroundColor: background,
        hoverBackgroundColor: background
      }
    ]
  };

  return formatedData;
};

export const getMostStarredRepos = data => {
  const labels = [];
  const values = [];
  const background = [];
  const length = data.length > 4 ? 5 : data.length;

  const sortedData = data.sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  );

  for (let i = 0; i < length; i++) {
    labels.push(sortedData[i].name);
    values.push(sortedData[i].stargazers_count);
    background.push(colors[Math.floor(Math.random() * colors.length)]);
  }

  const formatedData = {
    labels: labels,
    datasets: [
      {
        label: "Top 5 Starred Repositories",
        data: values,
        backgroundColor: background,
        hoverBackgroundColor: background
      }
    ]
  };

  return formatedData;
};
