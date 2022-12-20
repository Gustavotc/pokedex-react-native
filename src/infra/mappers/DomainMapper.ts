export interface DomainMapper<T> {
  toDomain(json: object): T;
}
