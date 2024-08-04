import axios from 'axios';

export const getShortenedURL = async (url) => {
  try {
    const response = await axios.post(
      '/api/shorturl',
      { url: url },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.result.url;
  } catch (err) {
    throw new Error('An error occurred during the API call.');
  }
};
