import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { user } from './schema/user.schema';
import mongoose, { Model } from 'mongoose';
import { UserDto } from './Dto/user.dto';
import * as bcrypt from 'bcrypt'
import { privateDecrypt } from 'crypto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {

    constructor(@InjectModel('user')private userModel: Model<user>
    // private jwtService:JwtService
    ){
    }

    async createUser(userDto:UserDto):Promise<UserDto>{
        

        
        const enryptedPassword=await bcrypt.hash(userDto.password,10);
        // const createdUser = await this.userModel.create({
        //     ...userDto,
        //     password:enryptedPassword,
        // });

        const createdUser = new this.userModel({
            ...userDto,
            password:enryptedPassword,
        });


        return createdUser.save();

        // const token=this.jwtService.sign({id:createdUser._id})

        // return {token};
        
    }
    


}
