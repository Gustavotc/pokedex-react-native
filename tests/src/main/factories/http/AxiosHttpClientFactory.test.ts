import { HttpClient } from '@/data/protocols/http';
import { makeAxiosHttpClient } from '@/main/factories/http';

describe('AxiosHttpClientFactory', () => {
  it('Should instantiate an AxiosHttpClient correctly', () => {
    const client = makeAxiosHttpClient();
    expect(client).toMatchObject<HttpClient>(client);
  });
});
