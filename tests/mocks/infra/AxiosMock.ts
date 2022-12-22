import { faker } from '@faker-js/faker';
import axios from 'axios';

export const makeHttpResponseMock = (): any => ({
  data: faker.datatype.json(),
  status: faker.internet.httpStatusCode(),
});

export const makeAxiosMock = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.request.mockClear().mockResolvedValue(makeHttpResponseMock());
  return mockedAxios;
};
