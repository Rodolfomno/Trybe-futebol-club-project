import { Router } from 'express';
import LeaderBoardController from '../controller/leaderBoardController';

const leaderBoardRouter = Router();

const leaderBoardController = new LeaderBoardController();

leaderBoardRouter.get('/home', leaderBoardController.getHomeResults);

leaderBoardRouter.get('/away', leaderBoardController.getAwayResults);

leaderBoardRouter.get('/', leaderBoardController.getAllResults);

export default leaderBoardRouter;
