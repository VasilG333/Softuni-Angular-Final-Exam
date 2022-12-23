import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private authService: AuthService, private route: Router) { }
  loginHandler(data: any): void {
    this.authService.user = {
      username: data.username,
      password: data.password
    }
    this.route.navigate([''])
  }
}
