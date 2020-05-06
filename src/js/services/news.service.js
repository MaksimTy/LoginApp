import axios from "../plugins/axios";

/**
 * Function getNews. Make News request to API.
 *
 */
export async function getNews() {
  try {
    const response = await axios.get(`/news`);
    console.log(response);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}
