export const lineChartDataTotalSpent = [
  {
    name: " New Customers",
    data: [250, 200, 150, 300, 350, 380, 200, 150, 250, 200, 150, 150],
    color: "#F64E60",
  },
  {
    name: " Unique Customers",
    data: [280, 340, 380, 300, 250, 300, 280, 340, 380, 300, 200, 150],
    color: "#3CD856",
  },
  {
    name: "Loyal Customers",
    data: [320, 330, 250, 300, 350, 180, 300, 250, 300, 280, 340, 380],
    color: "#A700FF",
  },
];

export const lineChartOptionsTotalSpent = {
  legend: {
    show: false,
  },

  theme: {
    mode: "light",
  },
  chart: {
    type: "line",

    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },

  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
    theme: "dark",
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "8px",
        fontWeight: "500",
      },
    },
    type: "text",
    range: undefined,
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jun",
      "Jul",
      "Sept",
      "Oct",
      "Nov",
      "Des",
    ],
  },

  yaxis: {
    show: true,
    axisBorder: {
      show: true,
    },
    min: 0,
    max: 400,
    tickAmount: 4,
  },
};
