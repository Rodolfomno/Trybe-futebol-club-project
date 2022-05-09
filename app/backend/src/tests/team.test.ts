import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import User from '../database/models/UserModel';
import TeamModel from '../database/models/TeamModel'
import TeamService from '../service/teamService';

//  import * as chaiAsPromise from 'chai-as-promised';

// chai.use(chaiAsPromise);

import { app } from '../app';

import { Response } from 'superagent';
import LoginService from '../service/loginService';
import { idText } from 'typescript';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teams route', () => {
    describe('Teams endpoint', () => {
      it('verify http 200 code', async () => {
        const chaiHttpResponse = await chai.request(app).get('/teams').then((res) => {
          return res;
        })
        expect(chaiHttpResponse).to.have.status(200);
       })
    });
    
    describe('get all teams service', ()=>{
      const teamsMock = [{
        "id": 1,
        "teamName": "santos"
      }]
  
      before(async () => {
        sinon.stub(TeamModel, "findAll").resolves(teamsMock as TeamModel[]);
      });
  
      after(()=>{
        (TeamModel.findAll as sinon.SinonStub).restore();
      })
  
      it('getAllTeams', async () => {
        const teams = await TeamService.getAll();
  
        expect(teams).to.deep.equal(teamsMock);
      });
    })

    describe('outro test', () => {
      const teamMock = { "id": 1, "teamName": "santos" }

      before(async () => {
        return sinon.stub(TeamModel, "findOne").resolves(teamMock as any);
      });
        
      after(()=>{
            (TeamModel.findOne as sinon.SinonStub).restore();
      })
    
      it('get team by id test', async () => {
        const teamId = await TeamService.getById(1);
    
        expect(teamId).to.deep.equal({"id": 1, "teamName": "santos"});
       })
    })
  });