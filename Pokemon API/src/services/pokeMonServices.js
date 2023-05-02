var axios = require("axios");
var pokemonServices = function () {};
const pokemanUrl = "https://pokeapi.co/api/v2/";
let pokemon = {};


// function to get pokemon details by name
pokemonServices.getPokemonEvolution = async function (pokemonName) {
  try {
    const response = await axios.get(`${pokemanUrl}pokemon/${pokemonName}`);
    pokemon = response.data;
    return await getEvolution();
  } catch (err) {
    throw new Error("Request failed");
  }
};

// function to list variations of pokemon
var getEvolution = async function () {

}
