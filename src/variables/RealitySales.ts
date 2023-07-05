export const realitySales = [1020, 800, 700, 1600, 1000, 1800, 1200];

export const targetSales = [1200, 1000, 1300, 1400, 1500, 1800, 1250];

export const totalRealitySales = realitySales.reduce((a, b) => a + b);
export const totalTargetSales = targetSales.reduce((a, b) => a + b);

export const SalesChartDataTotalSales = [
  {
    name: "Reality Sales",
    data: realitySales,
    color: "#4AB58E",
  },
  {
    name: "Target Sales",
    data: targetSales,
    color: "#FFCF00",
  },
];

export const SalesChartOptionsTotalSales = {
  legend: {
    show: false,
  },

  theme: {
    mode: "light",
  },
  stroke: {
    show: true,
    width: 1,
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
    show: false,
  },
  chart: {
    type: "bar",
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jun", "Jul"],
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
    show: false,
  },
};
