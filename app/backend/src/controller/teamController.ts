import { Request, Response, NextFunction } from 'express';
import TeamService from '../service/teamService';

export default class TeamController {
  public getAll = async (_req: Request, res: Response, _next: NextFunction) => {
    const allTeams = await TeamService.getAll();

    return res.status(200).json(allTeams);
  };
}
