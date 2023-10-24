import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";


@Schema({
    timestamps:true
})
export class user{

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    @Prop({unique:true,required:true})
    email:string;

    @ApiProperty()
    @IsNotEmpty()
    @Prop({unique:true,required:true})
    username:string;

    @ApiProperty()
    @IsNotEmpty()
    @Prop({required:true})
    password:string;

    @ApiProperty()
    @IsNotEmpty()
    @Prop()
    date:Date;
}


export const userSchema=SchemaFactory.createForClass(user);