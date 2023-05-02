var axios = require("axios");
var pokemonServices = function () {};
const pokemanUrl = "https://pokeapi.co/api/v2/";
let pokemon = {};
let pokemonSpecies = {};
let response = {};
let evolution = {};


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
    pokemonSpecies = await getPokemonSpecies(pokemon.name);
    const id = await getEvolutionChainId(pokemonSpecies.evolution_chain.url);
    evolution = await getEvolutionbyId(id);
    return await getEvolutionList(evolution);
  };
  
  // function to get pokemon-species by name
  var getPokemonSpecies = async function (pokemonName) {
    try {
      const response = await axios.get(
        `${pokemanUrl}pokemon-species/${pokemonName}`
      );
      return response.data;
    } catch (err) {
      throw new Error("Request failed");
    }
  };
  
  //funtion to get id from url
  var getEvolutionChainId = async function (url) {
    const splitUrl = url.split("/");
    return +splitUrl[splitUrl.length - 2];
  };
  
  // function to get pokemon-}evolution-chain by id
  var getEvolutionbyId = async function (id) {
    try {
      const response = await axios.get(`${pokemanUrl}evolution-chain/${id}`);
      return response.data;
    } catch (err) {
      throw new Error("Request failed");
    }
  };
  
  // function to get pokemon evolution list as tree
  var getEvolutionList = async function (chain) {
    try {
      const mapTree = (getChildren, setChildren) => (fn) => (node) =>
        setChildren(
          (getChildren(node) || []).map(mapTree(getChildren, setChildren)(fn)),
          fn(node)
        );
      const makePokemonList = (pokes) =>
        mapTree(
          (node) => node.evolves_to,
          (children, node) => ({ name: node.name, variations: children })
        )((node) => node.species)(pokes.chain);
  
      
      response= (makePokemonList(chain));
      return response;
    } catch (err) {
      throw new Error("Request failed");
    }
  };
  
  
  module.exports = pokemonServices;
