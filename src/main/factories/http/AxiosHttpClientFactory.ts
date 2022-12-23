import AxiosHttpClient from '@/infra/http/AxiosHttpClient';

export const makeAxiosHttpClient = () => {
  return new AxiosHttpClient();
};
