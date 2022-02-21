import { getPokemon } from "./generics/get-pokemons";

getPokemon(4)
  .then( resp => console.log(resp))
  .catch( error => console.error( error ))
  .finally( () => console.log('fin del get pokemon'))