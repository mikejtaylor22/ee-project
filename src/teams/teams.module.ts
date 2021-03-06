import { Module } from '@nestjs/common';
import { TeamsService } from './teams/teams.service';
import { TeamsController } from './teams/teams.controller';
import { InMemoryDBModule, InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Module({
  providers: [TeamsService,InMemoryDBService],
  controllers: [TeamsController]
})
export class TeamsModule {}
