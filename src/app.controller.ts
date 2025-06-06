import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// if we write inside controller "user" mean that all route will be "user"
@Controller('user')
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get('all')
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
// if we cannn use object path:"route"
@Controller({ path: 'user' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('all')
  getHello(): string {
    return this.appService.getHello();
  }
}
