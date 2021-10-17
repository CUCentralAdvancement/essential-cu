import { BarChart, Bar, XAxis, LabelList, Label, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";

ResponsiveBarChart.propTypes = {
  data: PropTypes.array,
};

export function ResponsiveBarChart({data}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        // width={500}
        // height={900}
        data={data}
        margin={{
          top: 15,
          right: 20,
          left: 20,
          bottom: 15,
        }}
      >
        {/*<CartesianGrid strokeDasharray="3 3" />*/}
        <XAxis dataKey="year" axisLine={false} tickLine={false}>
          <Label value="(Value in billions)" offset={0} position="bottom" />
        </XAxis>
        {/*<YAxis />*/}
        {/*<Tooltip />*/}
        {/*<Legend />*/}
        <Bar dataKey="value">
          <LabelList dataKey="value" position="top" fill={"#000"} formatter={(label) => `$` + label} />
        </Bar>
        {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
      </BarChart>
    </ResponsiveContainer>
  );
}

ResponsiveGroupedBarChart.propTypes = {
  data: PropTypes.array,
};

export function ResponsiveGroupedBarChart({data}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 15,
          right: 20,
          left: 20,
          bottom: 15,
        }}
      >
        <XAxis dataKey="year" axisLine={false} tickLine={false} />
        <Legend iconType={"circle"} />
        <Bar dataKey="LTIP" fill={"#cfb87c"}>
          <LabelList dataKey="LTIP" position="top" fill={"#000"} formatter={(label) => label + `%`} />
        </Bar>
        <Bar dataKey="Policy Benchmark">
          <LabelList dataKey="Policy Benchmark" position="top" fill={"#000"} formatter={(label) => label + `%`} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
