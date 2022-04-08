import React, { useState } from "react";
import { Component } from "react";



const Clock = () => {
const [clock, setClock] = useState('true')
const showTime = React.useCallback(
    () => setClock(!clock),
);

     return (<>
     
         {clock
            ? <Clockkk />
            : null
         }
        <button onClick={showTime}>Убрать таймер</button>
    </>)
}
export default Clock


class Clockkk extends Component {
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
    return <p> {this.state.time}</p>;
  }
}
