import axios from "../plugins/axios";

/**
 * Function getCountries. Make countries request to API.
 *
 */
export async function getCountries() {
  try {
    const response = await axios.get(`/location/get-countries`);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}
