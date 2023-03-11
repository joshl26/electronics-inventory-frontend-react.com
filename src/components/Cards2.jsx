import React, { useState, useEffect } from "react";
// import GridLayout from 'react-grid-layout';
// import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { Responsive, WidthProvider } from "react-grid-layout";
import DemoComponent from "./demoComponent";
const ResponsiveGridLayout = WidthProvider(Responsive);

const Cards2 = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(true);
  }, []);

  const onHandle = () => {
    setValue(!value);
  };

  var layout = [
    { i: "a", x: 0, y: 0, w: 4, h: 1 },
    { i: "b", x: 4, y: 0, w: 4, h: 1 },
    { i: "c", x: 8, y: 0, w: 4, h: 1 },
    { i: "d", x: 0, y: 1, w: 4, h: 1 },
    { i: "e", x: 4, y: 1, w: 4, h: 1 },
    { i: "f", x: 8, y: 1, w: 4, h: 1 },
  ];
  var layout1 = [
    { i: "a", x: 0, y: 0, w: 6, h: 1 },
    { i: "b", x: 6, y: 0, w: 6, h: 1 },
    { i: "c", x: 0, y: 1, w: 6, h: 1 },
    { i: "d", x: 6, y: 1, w: 6, h: 1 },
    { i: "e", x: 0, y: 2, w: 6, h: 1 },
    { i: "f", x: 6, y: 2, w: 6, h: 1 },
  ];

  var layout = { lg: value === true ? layout : layout1 };

  return (
    <div>
      <button style={{ marginLeft: "45%" }} onClick={onHandle}>
        {value === true ? "Increase" : "Decrease"} Grid by 2 columns
      </button>
      <ResponsiveGridLayout
        className="layout"
        layouts={layout}
        breakpoints={{ lg: 1200 }}
        cols={{ lg: 12 }}
        rowHeight={281}
        width={1200}
      >
        <div key="a" style={{ backgroundColor: "#264653" }}>
          <DemoComponent />
        </div>
        <div key="b" style={{ backgroundColor: "#2A9D8F" }}>
          <DemoComponent />
        </div>
        <div key="c" style={{ backgroundColor: "#E9C46A" }}>
          <DemoComponent />
        </div>
        <div key="d" style={{ backgroundColor: "#F4A261" }}>
          <DemoComponent />
        </div>
        <div key="e" style={{ backgroundColor: "#E76F51" }}>
          <DemoComponent />
        </div>
        <div key="f" style={{ backgroundColor: "lemonchiffon" }}>
          <DemoComponent />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default Cards2;
