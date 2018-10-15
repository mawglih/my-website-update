import React from 'react';
import './ProjectTile.css';

export default ({
  title,
  program_type,
  image,
  web_link,
  git_link,
}) => (
  <div className="tile">
    <h2>
      {title}
    </h2>
    <h3>
      {program_type}
    </h3>
    <div>
      <img src={image} alt={title} />
    </div>
    <div className="links">
      <a href={web_link} target="_blank">Web</a>
    </div>
    <div className="links">
      <a href={git_link} target="_blank">Git</a>
    </div>
  </div>
)