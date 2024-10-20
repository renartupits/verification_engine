import {NextFunction, Request, Response} from 'express';
import {listCheckItems, validateChecksSubmit} from '../service/verificationService';
import {ChecksJson} from './request/checksJson';
import {AppError} from '../interfaces/AppError';

const getCheckItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = listCheckItems();

    res.json(items);
  } catch (error: any) {
    next(new Error(error.message));
  }
};

const submitCheckItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const checksJson = req.body as ChecksJson;
    const isSuccess = validateChecksSubmit(checksJson);

    res.json({
      success: !isSuccess
    });
  } catch (error: any) {
    next(new AppError(error.message, 400));
  }
};

export default {getCheckItems, submitCheckItems};
