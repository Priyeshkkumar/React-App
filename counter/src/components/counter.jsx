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
  //We can also use inline styles:`style={{fontSize: 30}}`
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = " badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //  Object De-Structuring: We can do the following to pick up the
    // class object's value
    const { count } = this.state;
    // we can also do this
    const x = <h1>Zero</h1>;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
