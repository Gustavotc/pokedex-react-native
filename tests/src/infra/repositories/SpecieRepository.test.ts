import { mock } from 'jest-mock-extended';
import { HttpClient } from '@/data/protocols/http';
import { SpecieMapper } from '@/infra/mappers';
import { SpecieRepositoryImpl } from '@/infra/repositories';
import { makeSpecieResponseMock } from '@/../tests/mocks/data/SpecieResponseMock';

const makeSut = () => {
  const httpClientMock = mock<HttpClient>();
  const specieMapper = new SpecieMapper();
  const sut = new SpecieRepositoryImpl(httpClientMock, specieMapper);
  return {
    sut,
    httpClientMock,
    specieMapper,
  };
};

describe('Specie Repository', () => {
  it('Should fetch pokemon species with success', async () => {
    const { sut, httpClientMock, specieMapper } = makeSut();
    const specieResponseMock = makeSpecieResponseMock();

    const responseMock = {
      statusCode: 200,
      body: specieResponseMock,
    };

    httpClientMock.request.mockResolvedValueOnce(responseMock);

    const specie = await sut.get(1);

    expect(specie).not.toBeNull();
  });
});
