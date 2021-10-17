import { PieChart, Pie, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";

MyResponsivePie.propTypes = {
  data: PropTypes.array,
};

export default function MyResponsivePie({data}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart
        // width={400}
        // height={400}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 15,
        }}
      >
        <Pie dataKey="value"
             data={data}
             // startAngle={45}
             innerRadius={40}
             outerRadius={80}
             label />
        {/*<Tooltip />*/}
        <Legend verticalAlign="bottom" iconType={"circle"}/>
      </PieChart>
    </ResponsiveContainer>
  );
}
