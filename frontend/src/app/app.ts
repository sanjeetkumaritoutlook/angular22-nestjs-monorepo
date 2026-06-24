import { Component, inject, signal,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Api } from './services/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('frontend');

    private http = inject(HttpClient);
private api = inject(Api);
  //message = 'Loading...';
   message = signal('Loading...');
  ngOnInit() {
   this.api.getHello()
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
