import axios from "axios";
import { PokemonI } from '../interfaces/pokemon';

export const getPokemon = async( pokemonId: number): Promise<PokemonI> =>{

  const {data} = await axios.get<PokemonI>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`)
  //console.log( resp.data.abilities[0] )

  // console.log('hola pokemon');
  // if (true) throw new Error ('auxilio!');

  return data;
}