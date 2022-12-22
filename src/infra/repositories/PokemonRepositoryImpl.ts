import { Pokemon } from "@/domain/entities";
import { PokemonRepository } from "@/data/protocols/repository";
import { HttpClient, HttpStatusCode } from "@/data/protocols/http";
import { PokemonResponse } from "@/data/models";
import { PokemonMapper } from "../mappers";
import { DataSourceError } from "@/domain/errors/DataSourceError";

export class PokemonRepositoryImpl implements PokemonRepository {
  constructor(
    private readonly httpClient: HttpClient<PokemonResponse[]>,
    private readonly pokemonMapper: PokemonMapper
  ) {}

  async get(): Promise<Pokemon[]> {
    return this.httpClient
      .request({
        method: "get",
        url: "https://pokeapi.co/api/v2/pokemon/",
      })
      .then((response) => {
        if (response.statusCode === HttpStatusCode.ok) {
          if (response.body && response.body.length > 0) {
            return response.body.map((pokemonJson) =>
              this.pokemonMapper.toDomain(pokemonJson)
            );
          }
        }
        return [];
      })
      .catch(() => {
        throw new DataSourceError();
      });
  }
}
