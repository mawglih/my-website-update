import React from 'react';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Navigation.css';


const Links = [
  {name: 'Home', link: '/'},
  {name: 'Clients', link: '/clients'},
  {name: 'Projects', link: '/projects'},
  {name: 'Blogs', link: '/blogs'},
  {name: 'Test Area', link: '/test'},
]
export default () => (
  <div className="navbar">
    <div className="left">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div>
        <Link to="/">Website Development</Link>
      </div>
    </div>
    <div className="links">
      {Links.map(item => (
        <div key={encodeURIComponent(item.name)} className="link">
          <Link to={item.link}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
    
  </div>
);
