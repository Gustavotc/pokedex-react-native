import { Pokemon } from '@/domain/entities';
import { PokemonRepository } from '@/data/protocols/repository';
import { FetchPokemons } from '@/domain/usecases/FetchPokemons';

export default class FetchPokemonsImpl implements FetchPokemons {
  constructor(private readonly repository: PokemonRepository) {}

  async execute(): Promise<Pokemon[]> {
    const pokemons: Pokemon[] = [];
    const pendingPromises: Promise<Pokemon | null | void>[] = [];

    const pokemonsToFetch = await this.repository.get();

    pokemonsToFetch.forEach(pokemonToFetch => {
      pendingPromises.push(
        this.repository.getById(pokemonToFetch.name).then(pokemon => {
          if (pokemon) pokemons.push(pokemon);
        }),
      );
    });

    await Promise.all(pendingPromises);
    return pokemons;
  }
}
