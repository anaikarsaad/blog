import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { comment } from './schema/comment.schema';
import mongoose, { Model } from 'mongoose';
import { commentDto } from './dto/comment.dto';

@Injectable()
export class CommentService {

    constructor(@InjectModel('comment') private commentModel:Model<comment>){}
    async commentPost(commentDto:commentDto):Promise<commentDto>{
        const comment=new this.commentModel(commentDto);
        return comment.save();
    }


    async getComment(id:string):Promise<Comment[]>{
        const data=new mongoose.Types.ObjectId(id);
        return this.commentModel.find({blog:data});
    }




}
