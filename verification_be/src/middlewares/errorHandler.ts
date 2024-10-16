import { Request, Response, NextFunction } from 'express';
import logger from './logger'

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  logger.error(`Error: ${message}, Status Code: ${statusCode}`);

  res.status(statusCode).json({
    message: message,
    statusCode: statusCode,
  });
};
