"use strict";

const service = require("./services/pokemonServices");

//Lamba handler to get pokemon variations
exports.handler = async (event, context) => {
  try {
    const pokemonName = event.pathParameters.pokemonName.toLowerCase();
    let result = await service.getPokemonEvolution(pokemonName);
    console.log("result....", result);
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (err) {
    console.log("err....", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message ? err.message : "Something went wrong",
      }),
    };
  }
};
