import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Subscription, tap } from 'rxjs';
import { User } from '../shared/user';
import { UserRegister } from '../shared/userRegister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url= 'http://localhost:3000/api';
  private user$$ = new BehaviorSubject<undefined | null | User>(undefined);
  user$ = this.user$$.asObservable().pipe(
    filter((val): val is User | null => val !== undefined)
  );
  user: User | null = null;
  subscription: Subscription;
  get isLoggedIn() {
    return this.user !== null;
  }

  // constructor(private http: HttpClient) { }
  // register(username: string, password: string, repassword: string) {
  //   this.http.post<UserRegister>((`${this.url}/register`),{username, password, repassword}).subscribe((ev) => {
  //     console.log(ev);
      
  //   })
  // }
  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user;
    });
  }

  register(username: string, password: string, repassword: string) {
    return this.http.post<User>('/api/register', { username, password, repassword })
      .pipe(tap(user => this.user$$.next(user)));
  }

  login(username: string, password: string) {
    return this.http.post<any>('/api/login', { username, password })
      .pipe(tap(user => this.user$$.next(user)));;
  }

  logout() {
    return this.http.post<void>('/api/logout', {})
      .pipe(tap(() => this.user$$.next(null)));;
  }
}
