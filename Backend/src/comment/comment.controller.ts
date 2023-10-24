import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { commentDto } from './dto/comment.dto';
import { ApiParam, ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('Comment')
@Controller('comment')
export class CommentController {
    constructor(private commentService:CommentService){}


    @ApiProperty()
    @Post()
    commentPost(@Body()commentDto:commentDto):Promise<commentDto>{
        return this.commentService.commentPost(commentDto);
    }

    @ApiProperty()
    @ApiParam({'name':'id'})
    @Get('blog-post/:id')
    getAllComment(@Param() id:string):Promise<Comment[]>{
        return this.commentService.getComment(id);
    }


}
