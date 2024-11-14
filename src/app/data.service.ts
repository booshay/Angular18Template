import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  http = inject(HttpClient)
  url = 'https://jsonplaceholder.typicode.com/users/2/todos';

  data = signal<any>([]);

  getData() {
    this.http.get(this.url).subscribe(res => {
      this.data.set(res);
    })
  }

}
