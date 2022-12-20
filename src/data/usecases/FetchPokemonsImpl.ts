import { Pokemon } from "@domain/entities";
import { PokemonRepository } from "@app/data/protocols/repository";
import { FetchPokemons } from "@domain/usecases/FetchPokemons";

export default class FetchPokemonsImpl implements FetchPokemons {
  constructor(private readonly repository: PokemonRepository) {}

  async execute(): Promise<Pokemon[]> {
    return await this.repository.get();
  }
}
