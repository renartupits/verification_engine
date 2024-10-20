import { Request, Response, NextFunction } from 'express';
import logger from './logger';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const details = err.details;

  logger.error(`Error: ${message}, Status Code: ${statusCode}, details: `, {details});

  res.status(statusCode).json({
    message: message,
    statusCode: statusCode,
    details: details
  });
};
