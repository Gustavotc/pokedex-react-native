export class DataSourceError extends Error {
  constructor() {
    super('Connection error, please try again!');
    this.name = 'DataSourceError';
  }
}
