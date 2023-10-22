import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { MongooseModule} from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    AuthModule,
    UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
