import { Controller, Get, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All properties';
  }

  @Post()
  create() {
    return 'will create propperties';
  }
}
