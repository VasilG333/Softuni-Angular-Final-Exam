import { Component } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private authService: AuthService) {
    
  }
  loginHandler(data: any): void {
    // this.authService.user = {
    //   username: 'John',
    //   password: 'Bravo'
    // }
    console.log(data);
  }
}
