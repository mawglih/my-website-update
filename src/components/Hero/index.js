import React from 'react';
import Socket from '../Socket';
import './Hero.css';

const Hero = () => (
  <div className="hero">
    <h1>Building Websites to Meet Your Needs</h1>
    <h2>Fast, Mobile-friendly, Based on Modern Technology</h2>
    <h3>From idea to hosting. We provide assistance on every stage of website development</h3>
    <Socket />
    <ul className="hero-list">
      <li>Questionaire</li>
      <li>Mockup design</li>
      <li>Landing page</li>
      <li>SEO</li>
    </ul>
    <button className="hero-button">Find out more</button>
  </div>
);
export default Hero;
