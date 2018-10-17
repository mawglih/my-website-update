import React, { Component } from "react";
import {
  subscribeToTimer,
  removeSubscription,
} from '../../utiliity';
import './Socket.css';


// const date = Date.parse(new Date());

class Socket extends Component {
  constructor(props) {
  super(props);
  subscribeToTimer((timestamp) => {
    this.setState({
      timestamp,
    });
  });
  }
  state = {
    timestamp: 'reaching to server ....',
  };

  // componentWillUnmount() {
  //   removeSubscription();
  // }

  render() {
    const { timestamp } = this.state;
    // console.log('date is: ', date);
    return (
      <div>
        <h1 className="displayTime">Current Time is: {timestamp} </h1>
      </div>
    );
  }
}

export default Socket;
