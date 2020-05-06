import axios from "../plugins/axios";

/**
 * Function login. Make login request to API.
 * @param {Object} Object
 *
 */
export async function register(object) {
  try {
    const response = await axios.post(`/auth/signup`, JSON.stringify(object));
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 *
 * @param {Object} error
 * @returns {String}
 */
export function getRegisterErrorMessage(error) {
  const msg = JSON.parse(error.request.response);
  return msg.message;
}
