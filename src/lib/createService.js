import express from 'express';
import helmet from 'helmet';
import router from '../router';

export const createService = async () => {
  const service = express();
  service.use(helmet());
  service.use(router);

  return service;
};
