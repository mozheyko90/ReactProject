import React, { PureComponent } from "react";

import Counter from "../components/Counter";

class CounterContainer extends PureComponent {
  constructor() {
    super();

    this.state = {
      countValue: 0,
    };
  }

  isEven = (value) => value % 2 === 0;

  handleIncrement = () => {
    this.setState((prevState) => {
      const incrementedValue = prevState.countValue + 1;
      return {
        countValue: incrementedValue,
      };
    });
  };
  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState((prevState) => {
        const nextCount = prevState.countValue - 1;
        return {
          countValue: nextCount,
        };
      });
    }
  };
  handleReset = () => {
    this.setState({ countValue: 0, isEven: true });
  };
  render() {
    return (
      <>
        <Counter
          countValue={this.state.countValue}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
          isEven={this.state.isEven}
        />
      </>
    );
  }
}

export default CounterContainer;