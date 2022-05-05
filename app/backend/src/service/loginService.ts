import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { readFile } from 'fs/promises';
import IUser from '../interfaces/IUser';
import User from '../database/models/UserModel';

export default class LoginService {
  public static async create(email: string, password: string) {
    const validUser = await User.findOne({ where: { email } });

    if (!validUser) return false;

    const validPassword = await bcrypt.compare(password, validUser.password);

    if (!validPassword) return false;

    const secret = await readFile('jwt.evaluation.key', 'utf-8');

    const jwtConfig = { expiresIn: '7d' };

    const token = jwt.sign({ data: validUser.role }, secret, jwtConfig);

    const user: IUser = {
      id: validUser.id,
      username: validUser.username,
      role: validUser.role,
      email: validUser.email,
    };

    return { user, token };
  }
}
