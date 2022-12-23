import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url= 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  loadPosts() {
    this.http.get(`${this.url}/posts`);
  }
}
