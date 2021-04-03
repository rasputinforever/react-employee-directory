// please add your own API key if you are running this on your local machine

import axios from "axios";

const BASEURL = 'https://randomuser.me/api/?results=60';

const API = {
  search: function() {
    return axios.get(BASEURL);
  }
};

export default API
