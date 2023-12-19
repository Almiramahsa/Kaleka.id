import axios from 'axios';
import config from '../../config';

const getCoordinate = async () => {
  const apiUrl = config.apiUrl;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default getCoordinate;
