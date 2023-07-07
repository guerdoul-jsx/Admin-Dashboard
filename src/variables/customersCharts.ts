export const CustomersChartData = [
  {
    name: "This Month",
    data: [250, 200, 220, 180, 270],
    color: "#05C283",
  },
  {
    name: "last Month",
    data: [150, 100, 120, 110, 130],
    color: "#007DD6",
  },
];

export const CustomersChartOptions = {
  chart: {
    type: "area",
    stacked: false,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 5,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.65,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100],
    },
  },
  yaxis: {
    show: false,
  },
  xaxis: {
    categories: [], // empty array to hide x-axis labels
    labels: {
      show: false, // hide x-axis labels
    },
    axisBorder: {
      show: false, // hide x-axis line
    },
    axisTicks: {
      show: false, // hide x-axis ticks
    },
    show: false,
  },
  tooltip: {
    shared: true,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
  },
};
