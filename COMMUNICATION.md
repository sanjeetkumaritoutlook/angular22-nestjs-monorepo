## Verify Angular ↔ Nest communication in Local
Enable CORS in NestJS

Edit server/src/main.ts:
```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200',
  });

  await app.listen(3000);
}
bootstrap();
```

3. Add HttpClient to Angular
```
import { provideHttpClient } from '@angular/common/http';

export const appConfig = {
  providers: [
    provideHttpClient()
  ]
};

```
Test from App Component 
```
frontend/src/app/app.ts
```

http://localhost:3000/hello/api/hello

Verify route mapping

When Nest starts, you should see:
```
[Nest] LOG [RouterExplorer] Mapped {/hello/api/hello, GET} route
```
or something similar.

Notice your controller:
```
@Controller('hello')
```
and
```
@Get('api/hello')
```
combine to form:
```
/hello/api/hello
```
NOT:
```
/api/hello
```
So your endpoint is actually:
```
http://localhost:3000/hello/api/hello
```
because Nest combines:
```
@Controller('hello')
      +
@Get('api/hello')
      =
/hello/api/hello
```

in summary:
```
✅ Angular 22 is running on localhost:4200
✅ NestJS is running on localhost:3000
✅ CORS is configured correctly
✅ Angular HttpClient is calling NestJS successfully
✅ Angular UI is updating with API data
```
## NestJS CLI commands

NestJS has a CLI very similar to Angular CLI. Since Angular inspired a lot of NestJS's architecture.

Generate a Controller

From the server folder:
```
nest g controller hello
```
or shoter
```
nest g co hello
```
this creates
```
src/
└── hello/
    ├── hello.controller.spec.ts
    └── hello.controller.ts
```	
and automatically updates app.module.ts.

Generate a Service
```
nest g service hello
```
or 
```
nest g s hello
```
creates
```
src/
└── hello/
    ├── hello.service.spec.ts
    └── hello.service.ts
```	
Generate a Module
```
nest g module hello
```
or
```
nest g mo hello
```
creates
```
src/
└── hello/
    └── hello.module.ts
```

Generate Everything at Once

My favorite:
```
nest g resource hello
```
Nest will ask:
```
? What transport layer do you use?
❯ REST API
  GraphQL
  Microservice
  WebSockets
```
Choose:
```
REST API
```
It generates:
```
src/
└── hello/
    ├── dto/
    ├── entities/
    ├── hello.controller.ts
    ├── hello.service.ts
    ├── hello.module.ts
    └── *.spec.ts
```

This is similar to Angular generating component + module + service scaffolding.	
	
 ## Angular CLI commands
```
 ng g s services/api
```

consume service in angular component (.ts class file)

api.service.ts

```
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);

  getHello() {
    return this.http.get<{message:string}>(
      'http://localhost:3000/hello/api/hello'
    );
  }
}
```
app.ts (component class)
```
private api = inject(ApiService);

ngOnInit() {
  this.api.getHello().subscribe(res => {
    this.message.set(res.message);
  });
}
```
