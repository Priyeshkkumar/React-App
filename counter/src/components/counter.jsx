import React, { Component, Fragment } from "react";

// jsx file always return only one html element as babel
// will not be able to convert more than one html elements.
// Therefore we need to enclose all html elements inside one <div>
// or we can use <React.Fragments>.

class Counter extends Component {
  // State object is a property of React components, it includes
  // any data that this object needs
  state = {
    count: 0,
  };

  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    //  Object Destructuring: We can do the following to pick up the
    // class object's value
    const { count } = this.state;
    // we can also do this
    const x = <h1>Zero</h1>;
    return count === 0 ? x : count;
  }
}

export default Counter;
