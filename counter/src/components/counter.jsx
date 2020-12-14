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
    tags: ["tag1", "tag2", "tag3"],
  };
  //We can also use inline styles:`style={{fontSize: 30}}`
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags !</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          // Each li should have unique key as react will have to know which
          // component get changed in virtual DOM
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <React.Fragment>
        {/* We cannot use conditional statements in jsx tags, therefore
we need to use either functions like renderTags or do the following: */}
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter;
