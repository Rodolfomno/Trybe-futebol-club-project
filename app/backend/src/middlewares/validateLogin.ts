import { NextFunction, Request, Response } from 'express';
import loginSchema from '../schemas';

const validateLogin = async (req:Request, _res: Response, next: NextFunction) => {
  try {
    await loginSchema.validateAsync(req.body);
    return next();
  } catch (error) {
    return next(error);
  }
};

export default validateLogin;
