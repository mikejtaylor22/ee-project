import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { TeamsModule } from '../src/teams/teams.module';
import { Team } from '../src/teams/teams/team.model';
import { InMemoryDBService,InMemoryDBModule } from '@nestjs-addons/in-memory-db';


describe('TeamsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      
      imports: [AppModule,TeamsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/team (post)', () => {
  
    const team = new Team("Fun team",5,1);
    return request(app.getHttpServer())
      .post('/api/team/').send(team)
      .expect(201);
  });

  it ('/api/team/:id (get)', async () => {
  
    const team = new Team("Fun team",5,1);
    const postResponse = await request(app.getHttpServer())
      .post('/api/team/').send(team)
        
       return request(app.getHttpServer())
      .get(`/api/team/${postResponse.text}`)
      .expect(200);
  });

  // Write validation tests expect 422 (both endpoints)

});
