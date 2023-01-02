import { Specie } from '@/domain/entities';

export type SpecieRepository = {
  get(id: string | number): Promise<Specie | null>;
};
