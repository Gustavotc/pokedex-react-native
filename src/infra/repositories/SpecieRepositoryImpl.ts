import { SpecieResponse } from '@/data/models';
import { HttpClient, HttpStatusCode } from '@/data/protocols/http';
import { SpecieRepository } from '@/data/protocols/repository';
import { Specie } from '@/domain/entities';
import { DataSourceError } from '@/domain/errors/DataSourceError';
import { SpecieMapper } from '../mappers';

export class SpecieRepositoryImpl implements SpecieRepository {
  constructor(
    private httpClient: HttpClient,
    private specieMapper: SpecieMapper,
  ) {}

  async get(id: string | number): Promise<Specie | null> {
    const response = await this.httpClient.request<SpecieResponse>({
      method: 'get',
      url: `https://pokeapi.co/api/v2/pokemon-species/${id.toString()}`,
    });

    if (response.statusCode === HttpStatusCode.ok && response.body) {
      return this.specieMapper.toDomain(response.body);
    }

    if (response.statusCode === HttpStatusCode.notFound) return null;

    throw new DataSourceError();
  }
}
