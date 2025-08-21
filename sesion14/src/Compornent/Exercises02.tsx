import React, { Component } from "react";
type StateType = {
  company: string;
};
class Exercises01 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      company: "Rikkei Academy"
    };
  }
  changeState = () => {
    this.setState({
      company: "RikkeiSoft"
    });
  };

  render() {
    return (
      <div>
        <h1>Company: {this.state.company}</h1>
        <button onClick={this.changeState}>Change state</button>
      </div>
    );
  }
}

export default Exercises01;
