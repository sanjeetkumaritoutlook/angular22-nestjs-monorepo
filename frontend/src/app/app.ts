import { Component, inject, signal,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('frontend');

    private http = inject(HttpClient);

  //message = 'Loading...';
   message = signal('Loading...');
  ngOnInit() {
    this.http
      .get<{message:string}>('http://localhost:3000/hello/api/hello')
      .subscribe({
        next: (res) => {
           console.log('API Response', res);
          //this.message = res.message;
            this.message.set(res.message);

        },
        error: (err) => {
          console.error(err);
          // this.message = 'API Error';
          this.message.set('API Error');
        }
      });
  }
}
