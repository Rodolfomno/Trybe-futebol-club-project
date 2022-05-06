import { Router } from 'express';
import MatchController from '../controller/matchController';

const matchRouter = Router();

const matchController = new MatchController();

matchRouter.get('/', matchController.getAll);

export default matchRouter;
