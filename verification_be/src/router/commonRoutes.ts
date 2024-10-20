import {Express, NextFunction, Request, Response} from 'express';
import {AppError} from '../interfaces/AppError';
import {errorHandler} from '../middlewares/errorHandler';
import { ValidationError } from 'express-json-validator-middleware';

export const commonRoutes = (app: Express) => {
  // For health check, if needed
  app.get('/', (req, res) => {
    res.json({});
  });

  /**
   * Error handler middleware for not found routes.
   */
  app.use((req, res, next) => {
    next(new AppError('Route not found', 404));
  });

  /**
   * Error handler middleware for validation errors.
   */
  app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof ValidationError) {
      const errorMessages = error.validationErrors.body?.map(error => error.message);
      const errorParams = error.validationErrors.body?.map(error => error.params);
      next(new AppError(errorMessages?.join(',') || 'Validation error', 400, errorParams));
    } else {
      next(error);
    }
  });

  app.use(errorHandler);
};
