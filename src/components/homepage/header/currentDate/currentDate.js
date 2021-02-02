import React from "react";
import DateFormat from "./dateFormat.js";
import "./currentDate.css";

class CurrentDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  handleClick(e) {
    e.preventDefault();
    console.log(`Happy New Year!!! + ${this.timerId}`);
  }
  render() {
    return (
      <React.Fragment>
        <p className="current-date">
          <DateFormat dateTime={this.state.date} />
        </p>
      </React.Fragment>
    );
  }
}

export default CurrentDate;
