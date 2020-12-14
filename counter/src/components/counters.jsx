import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    console.log("Counters-Rendered");
    // Pick properties of props object we are interested in
    const { onReset, counters, onDelete, onIncrement } = this.props;

    // Use map method to render the array of Counters
    return (
      <div>
        <button
          // We are now raising this event and bubbling this to parent
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          // key is an attribute for uniquely identifying element while value and selected
          // attributes are properties of each counter object
          <Counter
            key={counter.id}
            // value={counter.value}
            // id={counter.id}
            // Passing the whole counter object
            counter={counter}
            // passing "onDelete" as a prop to "Component"
            onDelete={onDelete}
            onIncrement={onIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
