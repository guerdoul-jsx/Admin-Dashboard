export const SalesChartDataTotalSales = [
  {
    name: "Online Sales",
    data: [14000, 16000, 5700, 16000, 12000, 15800, 21000],
  },
  {
    name: "Offline Sales",
    data: [14000, 12005, 22010, 6000, 11007, 13005, 11000],
  },
];

export const SalesChartOptionsTotalSales = {
  legend: {
    show: true,
  },

  theme: {
    mode: "light",
  },
  stroke: {
    show: true,
    width: 3,
    colors: ["#fff"],
  },

  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
    },
  },
  grid: {
    show: true,
  },
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    categories: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "8px",
        fontWeight: "500",
        textDecoration: "none",
      },
    },
    type: "text",
    range: undefined,
  },
  yaxis: {
    show: true,
    axisBorder: {
      show: true,
    },
    min: 0,
    max: 25000,
    tickAmount: 5,
  },
};
