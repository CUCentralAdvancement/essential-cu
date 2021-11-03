import { BarChart, Bar, XAxis, LabelList, Label, Legend, ResponsiveContainer } from 'recharts';

const endowmentByYearData = [
  {
    year: 2016,
    value: 1.06,
    fill: '#000',
  },
  {
    year: 2017,
    value: 1.22,
    fill: '#000',
  },
  {
    year: 2018,
    value: 1.36,
    fill: '#000',
  },
  {
    year: 2019,
    value: 1.45,
    fill: '#000',
  },
  {
    year: 2020,
    value: 1.52,
    fill: '#000',
  },
  {
    year: 2021,
    value: 2.12,
    fill: '#cfb87c',
  },
];

export function EndowmentByYear() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        barCategoryGap={'15%'}
        data={endowmentByYearData}
        margin={{
          top: 30,
          right: 20,
          left: 20,
          bottom: 35,
        }}
      >
        <XAxis dataKey="year" axisLine={false} tickLine={false}
               tick={{fill: '#000'}}>
          <Label value="(value in billions)" offset={15} position="bottom" />
        </XAxis>
        <Bar dataKey="value">
          <LabelList dataKey="value" position="top" fill={"#000"} offset={15}
          formatter={(label) => '$' + label}/>
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

const returnsByYearData = [
  {
    year: '3 year',
    LTIP: 14.9,
    "Policy Benchmark": 13.0,
  },
  {
    year: '7 year',
    LTIP: 10.1,
    "Policy Benchmark": 8.7,
  },
  {
    year: '10 year',
    LTIP: 10.0,
    "Policy Benchmark": 9.3,
  },
  {
    year: '15 year',
    LTIP: 8.7,
    "Policy Benchmark": 7.3,
  },
];

export function ReturnsByYear() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={returnsByYearData}
        barGap={4}
        margin={{
          top: 30,
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
          <LabelList dataKey="LTIP" position="top" fill={"#000"} offset={10}
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
