import {Express} from 'express'
import cors from 'cors'

const corsOptions = {
  origin: ['http://localhost:5173'],
};

export const corsPlugin = (app: Express) => {
  app.use(cors(corsOptions));
}
