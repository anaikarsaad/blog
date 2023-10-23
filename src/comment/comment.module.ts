import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { commentSchema } from './schema/comment.schema';

@Module({
   imports:[MongooseModule.forFeature([{name:'comment',schema:commentSchema}])],
  providers: [CommentService],
  controllers: [CommentController]
})
export class CommentModule {}
