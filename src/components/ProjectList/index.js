import React from 'react';
import ProjectTile from '../ProjectTile';
import { Websites } from '../../constants/websites';
import './Projects.css';

export const Projects = () => (
  <div className="projects">
    {Websites.map((item, index) => (
      <ProjectTile
        key={index}
        title={item.title}
        program_type={item.program_type}
        image_link={item.image_link}
        web_link={item.web_link}
        git_link={item.git_link}
      />
    ))}
  </div>
);

export default Projects;
