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

  async get(offset: number): Promise<PokemonsResponse[]> {
    const response = await this.httpClient.request<
      PokeApiBaseResponse<PokemonsResponse>
    >({
      method: 'get',
      url: `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`,
    });

    if (response.statusCode === HttpStatusCode.ok) {
      if (response.body && response.body.results.length > 0) {
        return response.body.results;
      }
      return [];
    }

    throw new DataSourceError();
  }

  async getById(id: number | string): Promise<Pokemon | null> {
    const response = await this.httpClient.request<PokemonResponse>({
      url: `https://pokeapi.co/api/v2/pokemon/${id.toString().toLowerCase()}`,
      method: 'get',
    });

    if (response.statusCode === HttpStatusCode.ok && response.body) {
      return this.pokemonMapper.toDomain(response.body);
    }
    if (response.statusCode === HttpStatusCode.notFound) return null;

    throw new DataSourceError();
  }
}
