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

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    console.log(Counter);
    const counters = [...this.state.counters];
    const index = counter.indexOf(counter);
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    // Copy all the counters object except the on with counterId
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    // Use map method to render the array of Counters
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          // key is an attribute for uniquely identifying element while value and selected
          // attributes are properties of each counter object
          <Counter
            key={counter.id}
            // value={counter.value}
            // id={counter.id}
            // Passing the whole counter object
            counter={counter}
            // passing "handleDelete" as a prop to "Component"
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
