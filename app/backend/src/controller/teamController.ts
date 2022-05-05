import { Request, Response, NextFunction } from 'express';
import TeamService from '../service/teamService';

export default class TeamController {
  public getAll = async (_req: Request, res: Response, _next: NextFunction) => {
    const allTeams = await TeamService.getAll();

    return res.status(200).json(allTeams);
  };

  public getById = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const numberId = Number(id);
    const team = await TeamService.getById(numberId);

    return res.status(200).json(team);
  };
}
