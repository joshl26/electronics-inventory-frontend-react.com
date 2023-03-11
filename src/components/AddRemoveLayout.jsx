import React, { useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
const AddRemoveLayout = () => {
  const defaultProps = {
    className: "layout",
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100,
  };

  const [state, setState] = useState({
    items: [0, 1, 2, 3, 4].map(function (i, key, list) {
      return {
        i: i.toString(),
        x: i * 2,
        y: 0,
        w: 2,
        h: 2,
        add: i === list.length - 1,
      };
    }),
    newCounter: 0,
  });

  const createElement = (el) => {
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer",
    };
    const i = el.add ? "+" : el.i;
    return (
      <div key={i} data-grid={el}>
        {el.add ? (
          <span
            className="add text"
            onClick={onAddItem}
            title="You can add an item by clicking here, too."
          >
            Add +
          </span>
        ) : (
          <span className="text">{i}</span>
        )}
        <span className="remove" style={removeStyle} onClick={onRemoveItem(i)}>
          x
        </span>
      </div>
    );
  };

  const onAddItem = () => {
    /*eslint no-console: 0*/
    console.log("adding", "n" + state.newCounter);
    setState({
      // Add a new item. It must have a unique key!
      items: state.items.concat({
        i: "n" + state.newCounter,
        x: (state.items.length * 2) % (state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2,
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: state.newCounter + 1,
    });
  };

  // We're using the cols coming back from this to calculate where to add new items.
  const onBreakpointChange = (breakpoint, cols) => {
    setState({
      breakpoint: breakpoint,
      cols: cols,
    });
  };

  const onLayoutChange = (layout) => {
    onLayoutChange(layout);
    setState({ layout: layout });
  };

  const onRemoveItem = (i) => {
    console.log("removing", i);
    setState({ items: _.reject(state.items, { i: i }) });
  };

  return (
    <div>
      <button onClick={onAddItem}>Add Item</button>
      <ResponsiveReactGridLayout
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        // {...state.props}
      >
        {console.log(state)}
        {/* {_.map(state.items, (el) => createElement(el))} */}
      </ResponsiveReactGridLayout>
    </div>
  );
};
export default AddRemoveLayout;
