import { inputSearch, errorStatus } from './app.js';

export const teleport = async function (city) {
  try {
    return await axios
      .get(`https://api.teleport.org/api/urban_areas/slug:${city}/scores/`)
      .then(response => {
        const dataTeleport = response;
        const summary = response.data.summary;
        const cityScoreData = response.data.teleport_city_score.toFixed(1);
        return { dataTeleport, summary, cityScoreData };
      });
  } catch (err) {
    inputSearch.value = '';
    errorStatus.style.opacity = 1;
    errorStatus.innerText = `Error${err.response.status}. City not found. Please try again!`;
  }
};
