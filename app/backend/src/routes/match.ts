import { Router } from 'express';
import MatchController from '../controller/matchController';

const matchRouter = Router();

const matchController = new MatchController();

matchRouter.get('/', matchController.getAll);

matchRouter.post('/', matchController.createMatch);

matchRouter.patch('/:id/finish', matchController.finishMatch);

export default matchRouter;
