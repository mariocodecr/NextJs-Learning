import { PokemonGrid, } from "@/pokemons";



export const metadata = {
 title: 'Favorites',
 description: 'Favorite Pokemons',
};






export default async function PokemonsPage() {


  return (
    <div className="flex flex-col">

        <span className="text-5xl my-2">Favorites Pokemons <small className="text-blue-500">Global State</small></span>

        <PokemonGrid pokemons={[]} />
    </div>
  );
}