import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_SERVER_PORT}`, // 기본 URL 설정
  headers: {
    'Access-Control-Allow-Origin': '*', // CORS 헤더 설정
    // 필요에 따라 다른 헤더 설정
  },
  // 필요에 따라 다른 설정 추가
});

export default axiosInstance;
