import { Evolution } from '@/domain/entities';

export type EvolutionRepository = {
  getEvolutions(id: number): Promise<Evolution[]>;
};
