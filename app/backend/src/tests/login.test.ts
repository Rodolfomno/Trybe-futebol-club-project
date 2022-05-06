import * as sinon from 'sinon';
import * as chai from 'chai';
// import chaiHttp = require('chai-http');
import User from '../database/models/UserModel';
import * as chaiAsPromise from 'chai-as-promised';

chai.use(chaiAsPromise);

import { app } from '../app';

import { Response } from 'superagent';
import LoginService from '../service/loginService';

// chai.use(chaiHttp);

const { expect } = chai;

describe('test db connection', () => {
  beforeEach(sinon.restore);
  it('testa funcao findOne', () => {
    sinon.stub(User, "findOne").rejects();
    expect(LoginService.create({} as any, {} as any)).to.eventually.rejected;
    
  });
});
