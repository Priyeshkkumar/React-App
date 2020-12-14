import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 1 },
    ],
  };
  render() {
    // Use map method to render the array of Counters
    return (
      <div>
        {this.state.counters.map((counter) => (
          // key is an attribute for uniquely identifying element while value and selected
          // attributes are properties of each counter object
          <Counter key={counter.id} value={counter.value} />
        ))}
      </div>
    );
  }
}

export default Counters;
