import { Router } from 'express';
import { validateLogin } from '../middlewares';
import LoginController from '../controller/loginController';
import authMiddleware from '../middlewares/authMiddleware';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/', validateLogin, loginController.create);

loginRouter.get('/validate', authMiddleware, loginController.validate);

export default loginRouter;
