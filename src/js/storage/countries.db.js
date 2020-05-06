import { getCountries } from "../services/country.service";


export async function getCountriesDb() {
  try {
    let count = 0;
    let arr;
    await getCountries().then((res) => {
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
