import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from 'src/user/schema/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports:[UserModule],
  controllers: [AuthController],
  providers: [AuthService],
  
})
export class AuthModule {}
