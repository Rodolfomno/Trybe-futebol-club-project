/* import { Request, Response, NextFunction } from 'express';
import LoginService from 'src/service/loginService';

export default class LoginController {
  constructor(
    private loginService = new LoginService(),
  ) { }

  public create = async (req: Request, res: Response, _next: NextFunction) => {
    const { email, password } = req.body;
    const login = await this.loginService.create(email, password);

    return res.status(200).json(login);
  };
}
*/
