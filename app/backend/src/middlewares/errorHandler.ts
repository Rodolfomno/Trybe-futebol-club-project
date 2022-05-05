import { Request, Response, NextFunction } from 'express';

// https://stackoverflow.com/questions/50218878/typescript-express-error-function

class HttpExcpetion extends Error {
  status: number;

  message: string;

  details?: [err: { type: string, message: string } ];

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export default function errorHandler(
  error: HttpExcpetion,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (error.details) {
    const [err] = error.details;
    const { message, type } = err;
    if (type === 'string.min' || type === 'string.email') {
      return res.status(401).json({ message });
    }
    return res.status(400).json({ message });
  }

  return res.status(500).json(error.message);
}
