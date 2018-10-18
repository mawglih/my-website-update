import React, { Component } from 'react';
import ProjectTile from '../ProjectTile';
import { getWebsitesStart } from '../../actions';
import Socket from '../Socket';
import { connect }  from 'react-redux';
import { displayWebsites } from '../../utiliity';
import './Projects.css';

class ProjectList extends Component {
  componentDidMount() {
    this.props.getWebsitesStart();
  }
  render() {
    const {
      links,
    } = this.props;
    return(
      <div className="projectsTop">
        <div className="titleProjects">
          <h1>Completed projects</h1>
          <h2>Time from server using Socket.io</h2>
          <Socket/>
        </div>
        <div className="projects">
          {links.map((item, index) => (
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
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    links: displayWebsites(state.websites.links, state.search.filter),
  }
}
export default connect(mapStateToProps, { getWebsitesStart })(ProjectList);
