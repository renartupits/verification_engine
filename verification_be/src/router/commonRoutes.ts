import {Express} from 'express'
import {AppError} from '../interfaces/AppError'
import {errorHandler} from '../middlewares/errorHandler'

export const commonRoutes = (app: Express) => {
  // For health check, if needed
  app.get('/', (req, res) => {
    res.json({});
  });

  app.use((req, res, next) => {
    next(new AppError('Route not found', 404));
  });

  app.use(errorHandler);
}
