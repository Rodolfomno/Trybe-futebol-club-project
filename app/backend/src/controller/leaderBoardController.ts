import { Request, Response, NextFunction } from 'express';
import LeaderBoardService from '../service/leaderBoardService';

export default class LoginController {
  public getHomeResults = async (req: Request, res: Response, _next: NextFunction) => {
    const homeResults = await LeaderBoardService.getHomePoints();
    return res.status(200).json(homeResults);
  };

  public getAwayResults = async (req: Request, res: Response, _next: NextFunction) => {
    const awayResults = await LeaderBoardService.getAwayPoints();
    return res.status(200).json(awayResults);
  };

  public getAllResults = async (req: Request, res: Response, _next: NextFunction) => {
    const allResults = await LeaderBoardService.getAllTeamsResults();
    return res.status(200).json(allResults);
  };
}
