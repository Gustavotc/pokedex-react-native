export class UnexpectedError extends Error {
  constructor() {
    super("Algo deu errado, tente novamente em breve!");
    this.name = "UnexpectedError";
  }
}
