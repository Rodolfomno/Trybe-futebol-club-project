import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import User from '../database/models/UserModel';
import { app } from '../app';

import { Response } from 'superagent';
import LoginService from '../service/loginService';
import { idText } from 'typescript';
const { expect } = chai;

describe('Test match endpoint', () => {
    describe('test successfull endpoint tests', () => {
        it('verify http 200 code', async () => {
          const chaiHttpResponse = await chai.request(app).get('/matches').then((res) => {
              return res;
          })
          expect(chaiHttpResponse).to.have.status(200);
        })
    })
    
})
