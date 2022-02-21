import axios from "axios";

export const getPokemon = async( pokemonId: number) =>{

  const resp = await axios.get<string>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`)
  console.log(resp)

  // console.log('hola pokemon');
  // if (true) throw new Error ('auxilio!');

  return 1;
}