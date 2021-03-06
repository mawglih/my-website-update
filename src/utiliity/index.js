import openSocket from 'socket.io-client';
import axios from 'axios';

export const displayWebsites = (websites, filter) => {
  if(filter) {
    return websites.filter(website => {
      const titleMatch = website.title.toLowerCase().includes(filter.toLowerCase());
      const programMatch = website.program_type.toLowerCase().includes(filter.toLowerCase());
      return programMatch || titleMatch;
    });
  }
  return websites;
};


const socket = openSocket('http://web-server.oleg-dev.com:8881');

export const subscribeToTimer = (cb) => {
  socket.on('timer', timestamp => cb(timestamp));
  socket.emit('subscribeToTimer', 1000);
};

export const removeSubscription = () => {
  socket.removeAllListeners('timer');
};

const URL = 'http://web-server.oleg-dev.com:6565/send-email';

export const postData = (data) => {
  const request = axios.post(URL, data);
  return request;
}

export default {};