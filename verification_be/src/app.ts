import express, {Express} from 'express'
import verificationRoutes from './router/verificationRoutes'
import helmet from 'helmet'
import {commonRoutes} from './router/commonRoutes'
import {corsPlugin} from './middlewares/cors'


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
