import { faker } from '@faker-js/faker';

import {
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
  HttpClient,
} from '@/data/protocols/http';

export const makeHttpRequestMock = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.helpers.arrayElement(['get', 'post', 'put', 'delete']),
  body: faker.datatype.json(),
  headers: faker.datatype.json(),
});

export class HttpClientSpy implements HttpClient {
  url?: string;

  method?: string;

  body?: any;

  headers?: any;

  response: HttpResponse = {
    statusCode: HttpStatusCode.ok,
  };

  async request<R = any>(data: HttpRequest): Promise<HttpResponse<R>> {
    this.url = data.url;
    this.method = data.method;
    this.body = data.body;
    this.headers = data.headers;
    return this.response;
  }
}
