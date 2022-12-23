import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private route: Router) { }
  loginHandler(data: { username: string; password: string }): void {
    const { username, password } = data;
    this.authService.login(username, password).subscribe(() => {
      this.route.navigate([''])
    })
  }
}
