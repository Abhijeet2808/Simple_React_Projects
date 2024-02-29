import { Component } from "react";

import "./AgeCalculator.styles.css";

class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 21,
      theme: "dark",
    };
    console.log("Constructor called");
  }
  incAge = () => {
    this.setState((prevState) => {
      return {
        age: prevState.age + 1,
      };
    });
  };
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    const { age, theme } = this.state;
    console.log("render called");

    return (
      <div id="age_calculator_container">
        Age Calculator
        <div>
          <button onClick={this.incAge}>Happy Birthday!</button>
          <p>Currently, I am {age} years old.</p>
          <p>Theme : {theme}</p>
        </div>
      </div>
    );
  }
}
export default AgeCalculator;
