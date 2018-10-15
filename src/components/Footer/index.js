import React from 'react';
import './Footer.css';

const Links = [
  {name: 'Oleg Markoff 2018', link: 'mailto:mawglih@gmail.com' },
  {name: 'Email Us', link: 'mailto:mawglih@gmail.com'},
  {name: 'Call us: 201-638-7297', link: 'tel:201-638-7297'}
]
export default () => (
  <div className="footer">
    {Links.map(item => (
      <div key={encodeURIComponent(item.name)} className="footer_link"> 
        <a href={item.link}>
          {item.name}
        </a>
      </div>
    ))}
  </div>
);
