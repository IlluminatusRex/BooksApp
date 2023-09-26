import {
    Controller,
    Get,
    ParseUUIDPipe,
    NotFoundException,
    Param,
  } from '@nestjs/common';
  import { UsersService } from './users.service';
  
  @Controller('users')
  export class UsersController {
    constructor(private usersService: UsersService) {}
  
    @Get('/')
    getAll(): any {
      return this.usersService.getAll();
    }
  
    @Get('/:id')
    async getById(@Param('id', new ParseUUIDPipe()) id: string) {
      const user = await this.usersService.getById(id);
      if (!user) throw new NotFoundException('User not found');
      return user;
    }
  
    @Get('/:email')
    async getByEmail(@Param('email') email: string) {
      const user = await this.usersService.getByEmail(email);
      if (!user) throw new NotFoundException('User not found');
      return user;
    }
  }