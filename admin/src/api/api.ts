import axios from 'axios';
import { auth } from '@strapi/helper-plugin'

interface keyProps {
  id: string
  key: string
}

const config = {
  headers: {
    'Authorization': 'Bearer ' + auth .getToken()
  }
}

const api = {
  getKey: async () => {
    const data = await axios.get<keyProps>(`/strapi-chat-genius`, config);
    return data;
  },

  postKey: async (key: string) => {
    const data = await axios.post(`/strapi-chat-genius`, {
      key
    }, config);
    return data;
  },
};

export default api
