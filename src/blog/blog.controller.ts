import { Body, Controller, Delete, Get, Post ,Param, Put,Query} from '@nestjs/common';
import { ApiProperty, ApiTags,ApiParam ,ApiQuery} from '@nestjs/swagger';
import { blogDto } from './Dto/blog.dto';
import { BlogService } from './blog.service';


@ApiTags('blog')
@Controller('blog')
export class BlogController {


    constructor(private readonly blogService:BlogService){}

    @ApiProperty()
    @Get()
    getAllBlog():Promise<blogDto[]>{
        return this.blogService.getAllBlog()
    }
    

    @ApiProperty()
    @Post()
    blogPost(@Body() blogDto:blogDto):Promise<blogDto>{
        return this.blogService.blogPost(blogDto);
    }

    @ApiProperty()
    @ApiParam({'name':'id'})
    @Delete(':id')
    deleteCommentById(@Param() id:string){
        return this.blogService.deletePost(id);
    }

    @ApiProperty()
    @ApiParam({'name':'id'})
    @Put(':id')
    updateBlog(@Param() id:string,@Body() blogDto:blogDto){
        return this.blogService.updatePost(id,blogDto);
    }


    @ApiProperty()
    @ApiQuery({ name: 'tags', type: [String], isArray: true })
    @Get('/search')
    getBlog(@Query('tags') tags: string[]):Promise<blogDto[]>{
        return this.blogService.getBlogByTags(tags);
    }



    
}
