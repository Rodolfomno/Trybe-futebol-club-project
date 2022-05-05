import TeamModel from '../database/models/TeamModel';

export default class TeamService {
  public static async getAll() {
    const allTeams = await TeamModel.findAll();

    return allTeams;
  }
}
