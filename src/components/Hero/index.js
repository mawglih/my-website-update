import React, { Component } from "react";
import Socket from '../Socket';
import {
  subscribeToTimer,
  removeSubscription,
} from '../../utiliity';
import './Hero.css';

class Hero extends Component {
  constructor(props) {
  super(props);
  this.state = {
    timestamp: 'reaching to server ....',
  };
  }

  componentDidMount() {
    subscribeToTimer((timestamp) => {
      this.setState({
        timestamp,
      });
    });
  }

  componentWillUnmount() {
    removeSubscription();
  }

  render() {
    return(
      <div className="hero">
        <h1>Building Websites to Meet Your Needs</h1>
        <h2>Fast, Mobile-friendly, Based on Modern Technology</h2>
        <h3>From idea to hosting. We provide assistance on every stage of website development</h3>
        <Socket timestamp={this.state.timestamp}/>
        <ul className="hero-list">
          <li>Questionaire</li>
          <li>Mockup design</li>
          <li>Landing page</li>
          <li>SEO</li>
        </ul>
        <button className="hero-button">Find out more</button>
      </div>

    );
  }
}

export default Hero;
