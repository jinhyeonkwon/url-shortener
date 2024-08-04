const axios = require('axios');

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_API_BASE } =
  process.env;

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { url } = req.body;

    try {
      const response = await axios.post(
        `${REACT_APP_API_BASE}/util/v1/shorturl`,
        { url: encodeURI(url) },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-NCP-APIGW-API-KEY-ID': REACT_APP_CLIENT_ID,
            'X-NCP-APIGW-API-KEY': REACT_APP_CLIENT_SECRET,
          },
        }
      );
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error occurred during API call:', error.message);
      res.status(error.response ? error.response.status : 500).json({
        error: 'An error occurred during the API call',
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
