import { Pokemon } from '@/domain/entities';
import { PokemonRepository } from '@/data/protocols/repository';
import {
  HttpClient,
  HttpStatusCode,
  PokeApiBaseResponse,
} from '@/data/protocols/http';
import { PokemonResponse, PokemonsResponse } from '@/data/models';
import { PokemonMapper } from '../mappers';
import { DataSourceError } from '@/domain/errors/DataSourceError';

export class PokemonRepositoryImpl implements PokemonRepository {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly pokemonMapper: PokemonMapper,
  ) {}

  async get(): Promise<PokemonsResponse[]> {
    return this.httpClient
      .request<PokeApiBaseResponse<PokemonsResponse>>({
        method: 'get',
        url: 'https://pokeapi.co/api/v2/pokemon/',
      })
      .then(response => {
        if (response.statusCode === HttpStatusCode.ok) {
          if (response.body && response.body.results.length > 0) {
            return response.body.results;
          }
        }
        return [];
      })
      .catch(() => {
        throw new DataSourceError();
      });
  }

  async getById(id: number | string): Promise<Pokemon | null> {
    return this.httpClient
      .request<PokemonResponse>({
        url: `https://pokeapi.co/api/v2/pokemon/${id.toString()}`,
        method: 'get',
      })
      .then(response => {
        if (response.statusCode === 200 && response.body) {
          return this.pokemonMapper.toDomain(response.body);
        }
        return null;
      })
      .catch(() => {
        throw new DataSourceError();
      });
  }
}
