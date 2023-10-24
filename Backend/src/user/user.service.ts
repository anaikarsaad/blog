import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { user } from './schema/user.schema';
import mongoose, { Model } from 'mongoose';
import { UserDto } from './Dto/user.dto';
import * as bcrypt from 'bcrypt'
import { privateDecrypt } from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from 'src/auth/Dto/login.dto';
@Injectable()
export class UserService {

    constructor(@InjectModel('user')private userModel: Model<user>,
    private jwtService:JwtService
    ){
    }

    async createUser(userDto:UserDto):Promise<{token:string}>{
        const enryptedPassword=await bcrypt.hash(userDto.password,10);
        const createdUser = await this.userModel.create({
            ...userDto,
            password:enryptedPassword,
        });

        // const createdUser = new this.userModel({
        //     ...userDto,
        //     password:enryptedPassword,
        // });
       // return createdUser.save();
        const token=this.jwtService.sign({id:createdUser._id})
        return {token};
        
    }


    async findUser(user:String){
        return this.userModel.findOne({email:user});
    }


    async login(loginDto:LoginAuthDto):Promise<{token:string}>{

        const user= await this.findUser(loginDto.email);
        if(!user){
            throw new HttpException('Email Does not exist',401);
        }

        if(!await bcrypt.compare(loginDto.password,user.password)){
            throw new HttpException('Invalid password',401);
        }

        const token =this.jwtService.sign({id:user._id})

        return {token};
    }
    


}
