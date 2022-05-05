import * as express from 'express';
import loginRouter from './routes/login';
import { errorHandler } from './middlewares';
import teamRouter from './routes/team';

class App {
  public app: express.Express;
  // ...

  constructor() {
    this.app = express();
    // ...
    this.config();
    this.routes();
    this.errorHandler();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    // ...
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/login', loginRouter);
    this.app.use('/teams', teamRouter);
  }

  private errorHandler(): void {
    this.app.use(errorHandler);
  }

  // ...
  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`ouvindo a porta ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
