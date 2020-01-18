import randomColor from "randomcolor";

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
      background.push(randomColor());
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
