import axios from 'axios';

const mainUrl = 'https://microservice-jwt-auth.herokuapp.com/';

const checkToken = async (token: string) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    // The response of this request below contains the ID data of the user!!
    await axios.get(`${mainUrl}user/authenticate`, config);
    return true;
  } catch {
    return false;
  }
};

export {
  checkToken,
};