import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";
import mongoose from "mongoose";
import { user } from "src/user/schema/user.schema";
import { Type } from 'class-transformer';
@Schema({
    timestamps:true
})
export class blog{

    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true})
    title:string;

    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true})
    content:string;

    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true,type:mongoose.Schema.Types.ObjectId,ref:user.name})
    @Type(()=>user)
    author:user;

    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true})
    date:Date;

    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true})
    tags:string[];
}


export const blogSchema=SchemaFactory.createForClass(blog);