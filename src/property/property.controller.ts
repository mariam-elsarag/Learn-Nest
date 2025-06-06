import { Controller, Get, Param, Post } from '@nestjs/common';

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
  @Get(':id/:slug')
  findOne(@Param('id') id: string, @Param('slug') slug: string) {
    return `Property ID: ${id}, Slug: ${slug}`;
  }
  @Post()
  create() {
    return 'will create propperties';
  }
}
