import { EvolutionResponse } from '@/data/models';
import { HttpClient, HttpStatusCode } from '@/data/protocols/http';
import { EvolutionRepository } from '@/data/protocols/repository';
import { Evolution } from '@/domain/entities';
import { DataSourceError } from '@/domain/errors/DataSourceError';
import { EvolutionMapper } from '../mappers';

export class EvolutionRepositoryImpl implements EvolutionRepository {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly mapper: EvolutionMapper,
  ) {}

  async getEvolutions(id: number): Promise<Evolution[]> {
    const response = await this.httpClient.request<EvolutionResponse>({
      method: 'get',
      url: `https://pokeapi.co/api/v2/evolution-chain/${id}/`,
    });

    if (response.statusCode === HttpStatusCode.ok) {
      if (response.body) {
        const data = this.mapper.toDomain(response.body);
        return data;
      }
      return [];
    }
    throw new DataSourceError();
  }
}
