export class DataSourceError extends Error {
  constructor() {
    super('Falha na conexão com a internet, tente novamente');
    this.name = 'DataSourceError';
  }
}
