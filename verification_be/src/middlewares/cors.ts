import {Express} from 'express'
import cors from 'cors'

const corsOptions = {
  origin: ['http://localhost:5173', 'https://verification.codeoff.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  optionsSuccessStatus: 200,
};

export const corsPlugin = (app: Express) => {
  app.use(cors(corsOptions));
}
