import axios from 'axios';
import { getSession } from 'next-auth/react';

const ApiClient = () => {
    const instance = axios.create({
        baseURL: "http://localhost:8888"
    });
  
    instance.interceptors.request.use(async (request) => {
      const session = await getSession();
      if (session) {
        request.headers.Authorization = `Bearer ${session.idToken}`;
        // request.headers['x-id-token'] = session.idToken;
      }
      return request;
    });
  
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(`error`, error);
      },
    );
  
    return instance;
  };
  
  export default ApiClient();