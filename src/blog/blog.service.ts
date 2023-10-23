import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { blog } from './schema/blog.schema';
import { Model } from 'mongoose';
import { blogDto } from './Dto/blog.dto';
@Injectable()
export class BlogService {

    constructor(@InjectModel('blog') private blogModel:Model<blog>){}


    async blogPost(blogDto:blogDto):Promise<blogDto>{
        const blog=new this.blogModel(blogDto);
        return blog.save();
    }
}
