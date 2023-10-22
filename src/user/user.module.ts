import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from 'src/user/schema/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from 'src/auth/auth.service';
@Module({
  imports:[
    // PassportModule.register({defaultStrategy:'jwt'}),
    // JwtModule.registerAsync({
    //   inject:[ConfigService],
    //   useFactory:(config:ConfigService)=>{
    //     return{
    //       secret:config.get<string>('JWT_SECRET'),
    //       signOptions:{
    //         expiresIn:config.get<string|number>('JWT_Expires'),
    //       }
    //     }
    //   }
    // }),
    MongooseModule.forFeature([{name:'user',schema:userSchema}])],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}
