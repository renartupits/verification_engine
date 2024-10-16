import {NextFunction, Request, Response} from 'express'
import {listCheckItems} from '../service/verificationService'
import logger from '../middlewares/logger'

const getCheckItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = listCheckItems()

    res.json(items)
  } catch (error: any) {
    next(new Error(error.message));
  }
}

const submitCheckItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = req.body
    logger.info('Submitted check items', items)

    res.json(items)
  } catch (error: any) {
    next(new Error(error.message));
  }
}

export default {getCheckItems, submitCheckItems};
