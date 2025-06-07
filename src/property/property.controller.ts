import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All properties';
  }

  // with param
  // method 1
  // @Get(':id/:slug')
  // findOne(@Param() parms: { id: string; slug: string }) {
  //   return parms;
  // }
  // method 2
  // @Get(':id/:slug')
  // findOne(@Param('id') id: string, @Param('slug') slug: string) {
  //   return `Property ID: ${id}, Slug: ${slug}`;
  // }

  // 1- transform pipe
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    console.log(typeof sort);
    return id;
  }
  @Post()
  // @UsePipes(
  //   new ValidationPipe({
  //     transform: true, // <-- required to make groups work
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //     groups: ['creat'],
  //     always: true,
  //   }),
  // )
  create(@Body() body: CreatePropertyDto) {
    return body;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: CreatePropertyDto) {
    return body;
  }
}
