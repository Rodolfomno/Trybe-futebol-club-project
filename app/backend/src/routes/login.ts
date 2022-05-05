import { Router } from 'express';
import { validateLogin } from '../middlewares';
import LoginController from '../controller/loginController';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/', validateLogin, loginController.create);

export default loginRouter;
