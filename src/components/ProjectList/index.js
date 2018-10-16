import React, { Component } from 'react';
import ProjectTile from '../ProjectTile';
import { getWebsitesStart } from '../../actions';
// import { Websites } from '../../constants/websites';
import { connect }  from 'react-redux';
import './Projects.css';

class ProjectList extends Component {
  componentDidMount() {
    this.props.getWebsitesStart();
  }
  render() {
    const { links } = this.props;

    return(
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
    );
  }
}

const mapStateToProps = state => {
  return {
    links: state.websites.links,
  }
}
export default connect(mapStateToProps, { getWebsitesStart })(ProjectList);
