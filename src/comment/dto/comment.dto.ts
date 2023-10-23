import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";
import mongoose from "mongoose";
import { user } from "src/user/schema/user.schema";
import { Type } from 'class-transformer';
import { blog } from "src/blog/schema/blog.schema";

export class commentDto{

    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true})
    comment:string;

    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true,type:mongoose.Schema.Types.ObjectId,ref:user.name})
    @Type(()=>user)
    commenterName:user;

    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true,type:mongoose.Schema.Types.ObjectId,ref:blog.name})
    @Type(()=>user)
    blog:blog;

    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true})
    tags:string[];
}
