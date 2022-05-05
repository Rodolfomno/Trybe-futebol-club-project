import jwt = require('jsonwebtoken');
import { readFileSync } from 'fs';
import { NextFunction, Request, Response } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(400).json({ message: 'Token not provided' });

    const secret = readFileSync('jwt.evaluation.key', 'utf-8').trim();

    const decoded = jwt.verify(token, secret);

    req.body.tokenData = decoded;
    next();
  } catch (error: any | unknown) {
    return res.status(500).json('The token provided is invalid');
  }
};

export default authMiddleware;
