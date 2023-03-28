import React, { Component, ReactElement, ReactSVGElement } from "react";
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Sector,
  Label,
  LabelList,
} from "recharts";
import { scaleOrdinal } from "victory-vendor/d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import * as _ from "lodash";
import { changeNumberOfData } from "./utils";

const colors = scaleOrdinal(schemeCategory10).range();

const data01 = [
  { name: "Group A", value: 400, v: 89 },
  { name: "Group B", value: 300, v: 100 },
  { name: "Group C", value: 200, v: 200 },
  { name: "Group D", value: 200, v: 20 },
  { name: "Group E", value: 278, v: 40 },
  { name: "Group F", value: 189, v: 60 },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 0 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

const data03 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
  { name: "E1", value: 200 },
  { name: "E2", value: 34 },
  { name: "E3", value: 44 },
  { name: "F1", value: 89 },
  { name: "F2", value: 49 },
  { name: "F3", value: 51 },
];

const data04 = [
  { name: "Group A", value: 400, v: 89 },
  { name: "Group B", value: 300, v: 100 },
];

const initialState = { data01, data02, data03 };

const renderLabelContent = (props) => {
  const { value, percent, x, y, midAngle } = props;

  return (
    <g
      transform={`translate(${x}, ${y})`}
      textAnchor={midAngle < -90 || midAngle >= 90 ? "end" : "start"}
    >
      <text x={0} y={0}>{`Count: ${value}`}</text>
      <text x={0} y={20}>{`(Percent: ${(percent * 100).toFixed(2)}%)`}</text>
    </g>
  );
};
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >
        {`Count ${payload.value}`}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(percent: ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class Demo extends Component {
  static displayName = "PieChartDemo";

  onPieEnter = (data, index, e) => {
    this.setState({
      activeIndex: index,
    });
  };

  state = {
    ...initialState,
    activeIndex: 0,
    animation: false,
  };

  handleChangeData = () => {
    this.setState(() => _.mapValues(initialState, changeNumberOfData));
  };

  handleChangeAnimation = () => {
    this.setState({
      animation: !this.state.animation,
    });
  };

  handlePieChartEnter = (a, b, c) => {
    console.log(a, b, c);
  };

  handleLeave = () => this.setState({ activeIndex: -1 });

  render() {
    const { data01, data02, data03 } = this.state;

    return (
      <div
        className="pie-chart-wrapper"
        style={{ width: "100%", height: "100%" }}
      >
        <ResponsiveContainer>
          <PieChart style={{ width: "100%", height: "100%" }}>
            <Legend />
            <Pie
              data={data02}
              dataKey="value"
              cx={200}
              cy={200}
              startAngle={180}
              endAngle={0}
              outerRadius={80}
              label
            >
              {data02.map((entry, index) => (
                <Cell key={`slice-${index}`} fill={colors[index % 10]} />
              ))}
              <LabelList position="outside" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
