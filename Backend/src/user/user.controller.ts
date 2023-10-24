import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Inject } from '@nestjs/common';
@Controller('user')
export class UserController {

    constructor(@Inject(UserService) private userService: UserService) {}
}
