//// import { getPokemon } from "./generics/get-pokemons";
import { Pokemon } from './decorators.ts/pokemon-class';
// getPokemon(4)
//   .then( pokemon => console.log(pokemon.sprites.front_default))
//   .catch( error => console.error( error ))
//   .finally( () => console.log('FIN del index'))

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'pikachu';

// charmander.savePokemonToDB(500);

charmander.publicApi = `google.com`
console.log( charmander);