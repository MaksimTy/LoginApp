import axios from "../plugins/axios";

/**
 * Function getCities. Make cities request to API.
 *
 */
export async function getCities(index) {
  try {
    const response = await axios.get(`/location/get-cities/${index}`);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}
