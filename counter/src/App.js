import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";

// importing counter class
import Counters from "./components/counters";

class App extends Component {
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
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    // Copy all the counters object except the on with counterId
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        ></NavBar>
        ;
        <main className="container">
          {/* Now the Counter component is a controlled component because
            it does not have it's own state and it recieves data and methods
            to handle the data by props */}
          <Counters
            counters={this.state.counters}
            // Events raised by component and their respective handlers
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

// Imp Note: If components have a parent-child relations states can be
// passed using props, but when we want to share data b/w two components
// which are not related we have to lift the state up. In this case we want
// to have a sync b/w Counters and NavBar components therefore we have to
// lift the state of Counters component upto App component, from there we can
// pass it to the NavBar component using props App is a parent of both NavBar and
// Counters component.
