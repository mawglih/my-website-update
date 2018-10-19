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


const socket = openSocket('http://localhost:8080');

export const subscribeToTimer = (cb) => {
  socket.on('timer', timestamp => cb(timestamp));
  socket.emit('subscribeToTimer', 1000);
};

export const removeSubscription = () => {
  socket.removeAllListeners('timer');
};

const URL = 'http://localhost:8080/send';

export const postData = (data) => {
  const request = axios.post(URL, data);
  return request;
}

export default {};