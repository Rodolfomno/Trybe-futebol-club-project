import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import User from '../database/models/UserModel';
import UserModel from '../database/models/UserModel'
//  import * as chaiAsPromise from 'chai-as-promised';


// chai.use(chaiAsPromise);

import { app } from '../app';

import { Response } from 'superagent';
import LoginService from '../service/loginService';
import { idText } from 'typescript';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test login', () => {
  describe('test login fail', () => {
    it('incorrect email test', async () => {
      const chaiHttpResponse = await chai.request(app).post('/login')
        .send({ email: 'salvefrombrazil', password: 'definitelynotapassword' });

      expect(chaiHttpResponse).to.have.status(401);
      expect(chaiHttpResponse.body.message).to.be.equal('Incorrect email or password');
    });
    it('empty field test', async () => {
      const chaiHttpResponse = await chai.request(app).post('/login').send({});
        expect(chaiHttpResponse).to.have.status(400);
        expect(chaiHttpResponse.body.message).to.be.equal('All fields must be filled');
    });
  })

  describe('test sucessfull login', () => {
    const mockAdmin = {
      id: 1,
      username: "Admin",
      role: "admin",
      email: "admin@admin.com",
    };

    let mockResponse = {
      user: {
        id: 1,
        username: "Admin",
        role: "admin",
        email: "admin@admin.com",
      },
      token: "",
    };

    before(async () => {
      sinon.stub(UserModel, "findOne").resolves({ ...mockAdmin } as UserModel);
    });

    after(() => {
      (UserModel.findOne as sinon.SinonStub).restore();
    });
  
    it('sucessfull login test', async () => {
      const chaiHttpResponse = await chai.request(app).post('/login').send({
        email: 'admin@admin.com',
        password: 'secret_admin',
      }).then((res) => {
        expect(res).to.have.status(200);
        mockResponse.token = res.body.token;
        return res.body;
      })

      expect(chaiHttpResponse).to.be.deep.equals(mockResponse);
    })
  })
})

