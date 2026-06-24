import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {

  @Get('api/hello')
  hello() {
    return {
      message: 'Hello from NestJS'
    };
  }
}
