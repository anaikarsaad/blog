import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/user/Dto/user.dto';
import { UserService } from 'src/user/user.service';
import { LoginAuthDto } from './Dto/login.dto';

@Injectable()
export class AuthService {

    constructor(private readonly userService:UserService ){}

    async register(userDto:UserDto):Promise<{token:string}>{
        return this.userService.createUser(userDto);
    }



    async login(loginDto:LoginAuthDto):Promise<{token:string}>{
        return this.userService.login(loginDto);
    }


    
}
