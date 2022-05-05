import { Router } from 'express';
import TeamController from '../controller/teamController';

const teamRouter = Router();

const teamController = new TeamController();

teamRouter.get('/', teamController.getAll);

export default teamRouter;
