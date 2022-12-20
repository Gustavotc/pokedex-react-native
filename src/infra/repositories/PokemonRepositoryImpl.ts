import { Pokemon } from "@app/domain/entities";
import { PokemonRepository } from "@app/data/protocols/repository";
import { HttpClient, HttpStatusCode } from "@app/data/protocols/http";
import { PokemonResponse } from "@app/data/models";
import { PokemonMapper } from "../mappers";
import { DataSourceError } from "@app/domain/errors/DataSourceError";

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
