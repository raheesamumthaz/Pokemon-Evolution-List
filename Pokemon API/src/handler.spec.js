var sinon = require("sinon");
var mockery = require("mockery");
var chai = require("chai");
var mockEvent = require("./mockData/mockEvent").event;
const mockData = require("./mockData/mockResult");
const expect = chai.expect;

describe("Lamdba Function to get pokemon evolutions by name", () => {
  let event;
  let handler;
  before(() => {
    // Enable mockery
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true,
    });

    event = mockEvent({
      pathParameters: {
        pokemonName: "caterpie",
      },
      http: {
        method: "GET",
        path: "/pokemonApi/getEvolutionChain",
      },
    });

    getPokemonEvolutionStub = sinon.stub();
    mockery.registerMock("./services/pokemonServices", {
      getPokemonEvolution: getPokemonEvolutionStub,
    });
  });

  after(() => {
    // Disable mockery
    mockery.disable();
    mockery.deregisterAll();
    mockery.resetCache();
  });

  afterEach(() => {
    getPokemonEvolutionStub.reset();
  });

  it("Handler should be defined.", () => {
    handler = require("./handler").handler;
    expect(handler).to.be.a("function");
  });

  it("should return pokemon evolution list", async function () {
    const context = {};
    getPokemonEvolutionStub.returns(mockData.evolutionMockData);
    const handler = require("./handler").handler;

    let result = await handler(event, context);
    expect(result.statusCode).to.exist;

    // Check if statusCode =200
    expect(result.statusCode).to.equal(200);
    // Check body
    expect(result.body).to.exist;
    expect(result.body).to.equal(JSON.stringify(mockData.evolutionMockData));
  });
});
