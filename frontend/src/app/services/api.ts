import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class Api {
 private http = inject(HttpClient);

  getHello() {
    return this.http.get<{message:string}>(
      'http://localhost:3000/hello/api/hello'
    );
  }
}
