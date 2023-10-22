import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/user/Dto/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(private readonly userService:UserService ){}

    async register(userDto:UserDto):Promise<UserDto>{
        return this.userService.createUser(userDto);
    }
}
