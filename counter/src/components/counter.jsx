import React, { Component } from "react";

// jsx file always return only one html element as babel
// will not be able to convert more than one html elements.
// Therefore we need to enclose all html elements inside one <div>
// or we can use <React.Fragments>.

class Counter extends Component {
  // State object is a property of React components, it includes
  // any data that this object needs

  //We can also use inline styles:`style={{fontSize: 30}}`
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    console.log("Counter-Rendered");
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          // "Counter" Component with onClick is raising an event and "Counters" component
          // is handeling that event.
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = " badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //  Object De-Structuring: We can do the following to pick up the
    // class object's value
    const { value: count } = this.props.counter;
    // we can also do this
    const x = <h1>Zero</h1>;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

// Imp Note: The component that owns a piece of state, should br the one
// modifying it.
