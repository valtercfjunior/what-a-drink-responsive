import axios from "axios";

const URL = `https://www.thecocktaildb.com/api/json/v1/1/`;

const functions = {
  getAPI: async function (type, value) {
    let queryPameteres = "";
    if (type == "ingrediente") {
      queryPameteres = "filter.php?i=";
    } else if (type == "bebida") {
      queryPameteres = "search.php?s=";
    }

    const { data } = await axios.get(`${URL}${queryPameteres}${value}`);
    return data;
  },
  getDetails: async function (idDrink) {
    const { data } = await axios.get(`${URL}lookup.php?i=${idDrink}`);

    return data.drinks[0];
  }

};

export default functions;
