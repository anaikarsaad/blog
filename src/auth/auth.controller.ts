import { Controller, Post ,Body} from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

import { UserDto } from 'src/user/Dto/user.dto';
import { AuthService } from './auth.service';
@ApiTags("Authentication")
@Controller('auth')
export class AuthController {


    constructor(private readonly authService:AuthService){

    }

    @ApiProperty()
    @Post('/register')
    register(@Body() userDto:UserDto):Promise<UserDto>{
        return this.authService.register(userDto);
    }
   
}
