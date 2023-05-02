# Pokemon Evolution List

This is a Node-Angular repo to list pokemon variations based on a given pokemon name.
The Backend API is written in AWS Lambda and the Frontend application is using Angular.


## Project Structure and Info
 PokemonAPI : AWS Lambda function handler in Node.js

 PokemonUI : Angular frontend application

## Supported Node Versions

| Node Version  | NPM Version | Angular Vesrion |
|---|---|---|
| 16.16.x | 8.11.x |12.2.x |

## How to run the project locally
Clone repository and install dependencies:

Install required [Node](https://nodejs.org/en/download)

    git clone https://github.com/raheesamumthaz/Pokemon-Evolution-List.git

    To run the Node API:

    cd PokemonAPI
    npm install
    npm start or serverless offline
    The base URL of the REST server is <http://localhost:4000/pokemonApi>
    To run test : npm test or grunt test

    To run the UI:
     
    cd PokemonUI
    npm install
    ng serve
    The base URL of the UI server is <http://localhost:4200/>

## Endpoints



- `GET /getEvolutionChain/{pokemonName}` : List pokemon evolution chain for given pokemon

## References

[Serverless framework](https://www.serverless.com/)

[Serverless offline](https://www.serverless.com/plugins/serverless-offline)

[Angular ](https://angular.io/)

[AWS LAMBDA](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)








 

