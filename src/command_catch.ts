import type { State } from "./state.js";

export async function commandCatch(
  state: State,
  pokemonName: string,
): Promise<void> {
  console.log(`Throwing a Pokeball at ${pokemonName}...`);

  const pokemon = await state.pokeapi.fetchPokemon(pokemonName);

  const catchChance = 100 / pokemon.base_experience;

  if (Math.random() * 100 < catchChance) {
    console.log(`${pokemonName} was caught!`);

    state.pokedex[pokemonName] = pokemon;
  } else {
    console.log(`${pokemonName} escaped!`);
  }
}