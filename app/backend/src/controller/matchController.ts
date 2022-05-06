import { Request, Response, NextFunction } from 'express';
import MatchService from '../service/matchService';

export default class TeamController {
  public getAll = async (req: Request, res: Response, _next: NextFunction) => {
    const { inProgress } = req.query;

    if (inProgress) {
      this.getAllByProgress(req, res, _next);
    } else {
      const allMatches = await MatchService.getAll();

      return res.status(200).json(allMatches);
    }
  };

  private getAllByProgress = async (req: Request, res: Response, _next: NextFunction) => {
    const { inProgress } = req.query;

    const query = inProgress === 'true' ? 1 : 0;

    console.log(query);
    console.log(inProgress);

    const teamsByProgress = await MatchService.getAllByProgress(query);

    return res.status(200).json(teamsByProgress);
  };
}
