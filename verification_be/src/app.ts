import express, {Express} from 'express'
import verificationRoutes from './router/verificationRoutes'
import helmet from 'helmet'
import {commonRoutes} from './router/commonRoutes'
import {corsPlugin} from './middlewares/cors'
import * as dotenv from 'dotenv'
import logger from './middlewares/logger'

let server: any;
const PORT = process.env.PORT || 3000;

export const createServer = async (): Promise<Express> => {
  dotenv.config({path: `.env.${process.env.NODE_ENV}`})
  const app = express();
  await buildApp(app);

  server = app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
  })

  return app
}

export const buildApp = async (app: Express) => {
  registerPlugins(app);
  buildRoutes(app);
}

export const registerPlugins = (app: Express) => {
  app.use(express.json());
  app.use(helmet());
  corsPlugin(app);
}

export const buildRoutes = (app: Express) => {
  app.use('/api/verification', verificationRoutes)
  commonRoutes(app);
}

export const closeServer = () => {
  if (server) {
    return new Promise<void>((resolve) => {
      server.close(() => {
        resolve();
      });
    });
  }
  return Promise.resolve();
};
