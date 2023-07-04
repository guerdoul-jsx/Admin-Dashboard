import { ChartTitleProps } from "../../types";

const ChartTitle = (props: ChartTitleProps) => {
  const { name } = props;
  return <h1 className="px-3 pt-3 font-semibold text-Tcolor">{name}</h1>;
};

export default ChartTitle;
