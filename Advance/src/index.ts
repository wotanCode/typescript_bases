import { getPokemon } from "./generics/get-pokemons";


getPokemon(4)
  .then( pokemon => console.log(pokemon.sprites.front_default))
  .catch( error => console.error( error ))
  .finally( () => console.log('FIN del index'))