import { BarChart, Bar, XAxis, LabelList, Label, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";

ResponsiveBarChart.propTypes = {
  data: PropTypes.array,
};

export function ResponsiveBarChart({data}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        barCategoryGap={'15%'}
        data={data}
        margin={{
          top: 30,
          right: 20,
          left: 20,
          bottom: 35,
        }}
      >
        <XAxis dataKey="year" axisLine={false} tickLine={false}
               tick={{fill: '#000'}}>
          <Label value="(Value in billions)" offset={15} position="bottom" />
        </XAxis>
        <Bar dataKey="value">
          <LabelList dataKey="value" position="top" fill={"#000"} offset={15}
          formatter={(label) => '$' + label}/>
        </Bar>
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
        barGap={0}
        margin={{
          top: 15,
          right: 20,
          left: 20,
          bottom: 15,
        }}
      >
        <XAxis dataKey="year" axisLine={false} tickLine={false}
               tick={{fill: '#000'}} />
        <Legend iconType={"circle"} formatter={renderColorfulLegendText}
                wrapperStyle={{paddingTop: '10px', fontWeight: 700}} />
        <Bar dataKey="LTIP" fill={"#cfb87c"}>
          <LabelList dataKey="LTIP" position="top" fill={"#000"} offset={20}
                     formatter={(label) => label + `%`} />
        </Bar>
        <Bar dataKey="Policy Benchmark">
          <LabelList dataKey="Policy Benchmark" position="top" fill={"#000"} offset={5}
                     formatter={(label) => label + `%`} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

function renderColorfulLegendText(value) {
  return <span style={{ color: '#000' }}>{value}</span>;
}
