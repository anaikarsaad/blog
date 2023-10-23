import { Body, Controller, Post } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { blogDto } from './Dto/blog.dto';
import { BlogService } from './blog.service';


@ApiTags('blog')
@Controller('blog')
export class BlogController {


    constructor(private readonly blogService:BlogService){}

    @ApiProperty()
    @Post()
    blogPost(@Body() blogDto:blogDto):Promise<blogDto>{
        return this.blogService.blogPost(blogDto);
    }
    
}
