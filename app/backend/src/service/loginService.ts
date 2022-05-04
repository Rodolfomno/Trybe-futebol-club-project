/* import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { readFile } from 'fs';
import IUser from 'src/interfaces/IUser';
import User from '../database/models/UserModel';

export default class LoginService {
  public static async create(email: string, password: string) {
    const validUser = await User.findOne({ where: { email } });

    const validPassowrd = bcrypt.compare(password, validUser.password);

    if (!validUser || validPassowrd) return false;

    const secret = await readFile('jwt.evaluation.key', 'utf-8');

    const jwtConfig = { expiresIn: '7d' };

    const token = jwt.sign({ data: validUser.role }, secret, jwtConfig);

    const user: IUser = {
      id: validUser.id,
      username: validUser.userName,
      role: validUser.role,
      email: validUser.email,
    };

    return { user, token };
  }
}
*/
