import { Injectable } from '@nestjs/common';
import {Team} from './team.model';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';


@Injectable()
export class TeamsService {
  constructor(private readonly dbService:InMemoryDBService<Team>){}
   

    addTeam(team:Team):Team{
        return this.dbService.create(team); 
    }

    getAll():Team[] {
        return this.dbService.getAll();
    }

    getSingleTeam(id:string):Team{
        return this.dbService.get(id);
    }
   
     
    
   
}
