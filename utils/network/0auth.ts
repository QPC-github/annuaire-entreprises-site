import axios, { AxiosRequestConfig } from 'axios';
//@ts-ignore
import * as oauth from 'axios-oauth-client';
import * as tokenProvider from 'axios-token-interceptor';
import { HttpServerError } from '../../clients/exceptions';
import constants from '../../models/constants';
import {
  defaultAxiosInstanceFactory,
  cachedAxiosInstanceFactory,
  defaultCacheConfig,
} from '.';

export const httpClientOAuthGetFactory = (
  token_url: string,
  client_id: string | undefined,
  client_secret: string | undefined
) => {
  if ((!client_id || !client_secret) && process.env.NODE_ENV === 'production') {
    throw new HttpServerError('Client id or client secret is undefined');
  }

  const axiosGetCredentialsInstance = defaultAxiosInstanceFactory();

  const getClientCredentials = oauth.client(axiosGetCredentialsInstance, {
    url: token_url,
    grant_type: 'client_credentials',
    client_id,
    client_secret,
    timeout: constants.timeout.L,
  });

  const axiosInstance = cachedAxiosInstanceFactory();

  axiosInstance.interceptors.request.use(
    oauth.interceptor(tokenProvider, getClientCredentials)
  );

  return (url: string, options: AxiosRequestConfig, useCache: boolean) =>
    axiosInstance.get(url, {
      timeout: constants.timeout.L,
      ...options,
      cache: useCache ? defaultCacheConfig : false,
    });
};

export default httpClientOAuthGetFactory;
