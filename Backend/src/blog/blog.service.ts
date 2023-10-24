import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { blog } from './schema/blog.schema';
import mongoose, { Model } from 'mongoose';
import { blogDto } from './Dto/blog.dto';
@Injectable()
export class BlogService {

    constructor(@InjectModel('blog') private blogModel:Model<blog>){}
    async blogPost(blogDto:blogDto):Promise<blogDto>{
        const blog=new this.blogModel(blogDto);
        return blog.save();
    }

    async getAllBlog():Promise<blogDto[]>{
        return this.blogModel.find();
    }

    async deletePost(id:string){
        return this.blogModel.findByIdAndDelete(new mongoose.Types.ObjectId(id));
    }

    async updatePost(id:string,blogDto:blogDto):Promise<blogDto>{
        return this.blogModel.findByIdAndUpdate(new mongoose.Types.ObjectId(id),blogDto);
    }


    async getBlogByTags(tags: string[]):Promise<blogDto[]>{
        return this.blogModel.find({ tags: { $in: tags } }).exec();
    }
}
