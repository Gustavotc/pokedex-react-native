import { HttpClient, HttpRequest, HttpResponse } from '@/data/protocols/http';

import axios, { AxiosResponse } from 'axios';

export default class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse<any>> {
    return axios
      .request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      })
      .then((response: AxiosResponse) => {
        return {
          statusCode: response.status,
          body: response.data,
        };
      })
      .catch(error => {
        let errorResponse: HttpResponse = { statusCode: 0, body: null };
        if (axios.isAxiosError(error) && error.response) {
          errorResponse.statusCode = error.response.status;
          errorResponse.body = error.response.data;
        } else if (error.request) {
          errorResponse.body = 'Request not answered';
        }

        return {
          statusCode: errorResponse.statusCode,
          body: errorResponse.body,
        };
      });
  }
}
