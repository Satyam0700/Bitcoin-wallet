'use client'

import { AreaChart, Area } from "recharts";

const data = [
  {
    name: 'Page A',
    uv: 3000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3500,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2800,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Chart = () => {
  return (
    <AreaChart
    width={330}
    height={130}
    data={data}
    margin={{
      top: 5,
      right: 0,
      left: 0,
      bottom: 0
    }}
  >
    <Area type="monotone" dataKey="uv" stroke="#ff8f17" fill="#ffe096" />
  </AreaChart>
  );
};

export default Chart;
