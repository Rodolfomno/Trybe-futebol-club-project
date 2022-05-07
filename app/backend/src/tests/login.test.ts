import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp from 'chai-http';
import User from '../database/models/UserModel';
//  import * as chaiAsPromise from 'chai-as-promised';

// chai.use(chaiAsPromise);

import { app } from '../app';

import { Response } from 'superagent';
import LoginService from '../service/loginService';
import { idText } from 'typescript';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test login', () => {
  describe('test db connection', () => {
    beforeEach(sinon.restore);
    it('test fail connection', () => {
      sinon.stub(User, "findOne").rejects();
      expect(LoginService.create({} as any, {} as any)).to.eventually.rejected;
    })
    it('test db ok', () => {
     sinon.stub(User, "findOne").resolves();
     expect(LoginService.create({} as any, {} as any)).to.eventually.equal(undefined);
   });
  })

  describe('test login fail', () => {
    it('incorrect email test', async () => {
      const chaiHttpResponse = await chai.request(app).post('/login')
        .send({ email: 'salvefrombrazil', password: 'definitelynotapassword' });

      expect(chaiHttpResponse).to.have.status(401);
      expect(chaiHttpResponse.body.message).to.be.equal('Username or password invalid');
    });
    it('empty field test', async () => {
      const chaiHttpResponse = await chai.request(app).post('/login').send({});
        expect(chaiHttpResponse).to.have.status(400);
        expect(chaiHttpResponse.body.message).to.be.equal('All fields must be filled');
    });
  })
})

