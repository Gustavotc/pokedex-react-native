import { AxiosError } from 'axios';
import { makeHttpRequestMock } from '@/tests/mocks/data/http/HttpMock';
import AxiosHttpClient from '@/infra/http/AxiosHttpClient';
import {
  makeAxiosMock,
  makeHttpResponseMock,
} from '@/tests/mocks/infra/AxiosMock';

jest.mock('axios');

const makeSut = () => {
  const sut = new AxiosHttpClient();
  const mockedAxios = makeAxiosMock();
  return {
    sut,
    mockedAxios,
  };
};

describe('AxiosHttpClient', () => {
  it('Should call axios with correct values', async () => {
    const request = makeHttpRequestMock();
    const { sut, mockedAxios } = makeSut();

    await sut.request(request);

    expect(mockedAxios.request).toHaveBeenCalledWith({
      url: request.url,
      data: request.body,
      headers: request.headers,
      method: request.method,
    });
  });

  it('Should return correct response', async () => {
    const { sut, mockedAxios } = makeSut();

    const httpResponse = await sut.request(makeHttpRequestMock());
    const axiosResponse = await mockedAxios.request.mock.results[0].value;

    expect(httpResponse).toEqual({
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    });
  });

  test('Should return default error if axios fails', () => {
    const { sut, mockedAxios } = makeSut();
    mockedAxios.request.mockRejectedValueOnce({
      response: makeHttpResponseMock(),
    });

    const promise = sut.request(makeHttpRequestMock());

    expect(promise).rejects.toEqual(mockedAxios.request.mock.results[0].value);
  });

  test('Should return error message and status code when status code is not 200', async () => {
    const { sut, mockedAxios } = makeSut();
    const axiosError = new AxiosError();
    axiosError.response = {
      data: 'Item not found',
      status: 404,
      statusText: 'Unauthorized',
      headers: {},
      config: {},
    };
    mockedAxios.isAxiosError.mockReturnValueOnce(true);
    mockedAxios.request.mockRejectedValueOnce(axiosError);
    const response = await sut.request(makeHttpRequestMock());
    expect(response).toEqual({ statusCode: 404, body: 'Item not found' });
  });

  test('Should return body message and statusCode 0 when server does not answer', async () => {
    const { sut, mockedAxios } = makeSut();
    const axiosError = new AxiosError();
    axiosError.request = 'error';

    mockedAxios.request.mockRejectedValueOnce(axiosError);

    const response = await sut.request(makeHttpRequestMock());
    expect(response).toEqual({ statusCode: 0, body: 'Request not answered' });
  });
});
