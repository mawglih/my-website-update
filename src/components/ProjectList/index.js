import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectTile from '../ProjectTile';
import { getWebsitesStart } from '../../actions';
import Socket from '../Socket';
import SearchBar from '../SearchBar';
import { connect }  from 'react-redux';
import {
  displayWebsites,
  subscribeToTimer,
  removeSubscription,
} from '../../utiliity';
import './Projects.css';

class ProjectList extends Component {
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

  componentWillMount() {
    this.props.getWebsitesStart();
  }

  render() {
    const {
      links,
    } = this.props;
    const {
      timestamp,
    } = this.state;
    return(
      <div className="projectsTop">
        <h1>Completed projects</h1>
        <div className="headTitle">
          <div className="titleProjects">
            <h2>Time from server using Socket.io</h2>
            <Socket timestamp={timestamp}/>
          </div>
          <div className="serchBar">
            <SearchBar />
          </div>
          <div className="projectDesc">
            <h3>This site is a project by itself</h3>
            <p>
              It uses following framewaorks and technologies:
            </p>
            <ul>
              <li>React 16.5</li>
              <li>Redux</li>
              <li>Redux-saga</li>
              <li>Redux-forms</li>
              <li>Socket.io</li>
              <li>Material Design</li>
              <li>Node.js</li>
              <li>Nodemailer</li>
              <li>Express</li>
            </ul>
            <Link to="https://github.com/mawglih/my-website-update.git">Github link</Link>
          </div>
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
