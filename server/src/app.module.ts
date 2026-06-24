import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';
import { HelloModule } from './hello/hello.module';
@Module({
    imports: [
   /* ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),*/
    HelloModule,
  ],
  controllers: [AppController, HelloController],
  providers: [AppService, HelloService],
})
export class AppModule {}
