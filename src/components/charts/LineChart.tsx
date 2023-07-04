import Chart from "react-apexcharts";

const LineChart = (props: any) => {
  const { options, series } = props;
  return (
    <Chart
      options={options}
      series={series}
      type="line"
      height="200px"
      width="340px"
    />
  );
};

export default LineChart;
