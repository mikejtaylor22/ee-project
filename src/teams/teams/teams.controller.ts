/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Body, Controller, Get, Param, Post,UnprocessableEntityException,UseFilters,ValidationPipe,ParseUUIDPipe, HttpCode, Res  } from '@nestjs/common';
import {TeamsService} from './teams.service';
import {Team} from './team.model';
import {HttpException,HttpStatus} from '@nestjs/common';
import {HttpExceptionFilter} from '../../http-exception.filter';





@Controller('api')
export class TeamsController {
constructor(private teamService:TeamsService){}

    @Get('team/:id')
   async getTeam(@Param('id', new ParseUUIDPipe({errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY})) id:string):Promise<Team>{
        return this.teamService.getSingleTeam(id);
    }

    @Get('teams')
    @HttpCode(HttpStatus.OK)
    async getAllTeams():Promise<Team[]>{
        return this.teamService.getAll();
    }

  

    @Post('team')
    @HttpCode(HttpStatus.CREATED)
    async createTeam(@Body() newTeam: Team){
      return this.teamService.addTeam(newTeam).id;
     
    }

}
