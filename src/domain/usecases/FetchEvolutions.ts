import { Evolution } from '../entities';

export interface FetchEvolutions {
  execute(id: number): Promise<Evolution[]>;
}
