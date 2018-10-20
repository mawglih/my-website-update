import React from "react";
import './Socket.css';


const Socket = ({
  timestamp
}) => (
  <div>
    <h1 className="displayTime">Current Time is: {timestamp} </h1>
  </div>
);
  
export default Socket;
