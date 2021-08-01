import React, { Component } from "react";

export default class TimerClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  setTime() {
    this.setState({
      time: this.state.time + 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Timer in Class Components</h2>
        <p>Time: {this.state.time} sec</p>
      </div>
    );
  }
}
