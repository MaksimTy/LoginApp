import { getCities } from "../services/cities.service";


export async function getCitiesDb(index) {
  try {
    let count = 0;
    let arr;
    await getCities(index).then((res) => {
      Object.values(res).reduce((acc, item) => {
        acc[item] = ++count;
        arr = acc;
        return acc;
      }, {});
    });
    
    return arr;
  } catch (error) {
    return Promise.reject(error);
  }
}
