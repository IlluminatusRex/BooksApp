import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService],
  imports: [UsersModule],
})
export class AuthorsModule {}
