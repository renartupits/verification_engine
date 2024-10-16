import * as dotenv from 'dotenv'
import express from 'express';
import logger from './middlewares/logger';
import {buildApp} from './app'

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  dotenv.config({path: `.env.${process.env.NODE_ENV}`})

  await buildApp(app);
  logger.info(`Server is running on http://localhost:${PORT}`);
});
