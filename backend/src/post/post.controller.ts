import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDocument } from './interfaces/post.interface';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // @route    POST a post
  // @desc     Create a post
  // @access   Private
  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  createPost(@Body() createPostDto: CreatePostDto, @Request() req) {
    return this.postService.createPost(createPostDto, req.user.id);
  }

  // @route    GET post
  // @desc     Get all posts
  // @access   Private
  @Get()
  @UseGuards(JwtAuthGuard)
  getAllPosts(): Promise<PostDocument[]> {
    return this.postService.getAllPosts();
  }

  // @route    GET post/:id
  // @desc     Get all posts
  // @access   Private
  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  getPostById(@Param('id') id: string): Promise<PostDocument> {
    return this.postService.getPostById(id);
  }
}
