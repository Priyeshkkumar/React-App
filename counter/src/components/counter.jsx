import React, { Component, Fragment } from "react";

// jsx file always return only one html element as babel
// will not be able to convert more than one html elements.
// Therefore we need to enclose all html elements inside one <div>
// or we can use <React.Fragments>.

class Counter extends Component {
  // State object is a property of React components, it includes
  // any data that this object needs
  state = {
    value: this.props.value,
  };
  //We can also use inline styles:`style={{fontSize: 30}}`
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  // // Sol to comment at 26 We need to bind event handlers to this or use arrow func
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // We normally do not have access to state vars in event handler functions
  handleIncrement = (product) => {
    console.log("Increment Clicked", this);
    // In react we cannot directly update the value of state property(count),
    // therefore we need to use one of the method interited from Component class
    // i.e. this.setState
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = " badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //  Object De-Structuring: We can do the following to pick up the
    // class object's value
    const { value: count } = this.state;
    // we can also do this
    const x = <h1>Zero</h1>;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
