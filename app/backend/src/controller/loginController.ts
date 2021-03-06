import { Request, Response, NextFunction } from 'express';
import LoginService from '../service/loginService';

export default class LoginController {
  public create = async (req: Request, res: Response, _next: NextFunction) => {
    const { email, password } = req.body;
    const login = await LoginService.create(email, password);

    if (!login) {
      return res.status(401).json({ error: 'Username or password invalid' });
    }

    return res.status(200).json(login);
  };

  public validate = (req: Request, res: Response) => {
    const { tokenData } = req.body;
    console.log(tokenData.data);
    return res.status(200).json(tokenData.data);
  };
}
