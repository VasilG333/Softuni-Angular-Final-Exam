import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService, 
    private route: Router) {}
  registerHandler(data: { username: string; password: string; repassword: string; }) {
    const { username, password, repassword } = data;
    this.authService.register(username, password, repassword).subscribe(user => {
      this.route.navigate([''])
    })
  }
}
