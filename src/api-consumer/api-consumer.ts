import axios from 'axios';

export class ApiConsumer {
  async getCharacters() {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://www.officeapi.dev/api/characters',
        responseType: 'json',
      });
      const charsAPI = response.data.data;
      return charsAPI;
    } catch (err) {
      throw err;
    }
  }

  async getQuotes() {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://www.officeapi.dev/api/quotes',
        responseType: 'json',
      });
      const charsAPI = response.data.data;
      return charsAPI;
    } catch (err) {
      throw err;
    }
  }

  async getEpisodes() {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://www.officeapi.dev/api/episodes',
        responseType: 'json',
      });
      const charsAPI = response.data.data;
      return charsAPI;
    } catch (err) {
      throw err;
    }
  }

  async getCrew() {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://www.officeapi.dev/api/crew',
        responseType: 'json',
      });
      const charsAPI = response.data.data;
      return charsAPI;
    } catch (err) {
      throw err;
    }
  }
}
