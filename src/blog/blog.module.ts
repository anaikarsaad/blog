import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { blogSchema } from './schema/blog.schema';
@Module({
  imports:[ MongooseModule.forFeature([{name:'blog',schema:blogSchema}])],
  providers: [BlogService],
  controllers: [BlogController]
})
export class BlogModule {}
