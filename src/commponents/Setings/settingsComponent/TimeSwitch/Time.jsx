import { Component } from "react";

// ClockClass 
export default class Time extends Component {
    constructor(props) {
      super(props);
      let options = {hour: 'numeric', minute: 'numeric'};
      this.state = {
        time: new Date().toLocaleString('de-DE',options)
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      let options = {hour: 'numeric', minute: 'numeric'};
  
      this.setState({
        time: new Date().toLocaleString('de-DE',options),
      });
    }
    render() {
      return <div> {this.state.time}</div>;
    }
  }
  