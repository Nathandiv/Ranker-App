import { Component, inject } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authService = inject(AuthService)

  login(email: string, password: string){
    if(!email){
      alert('need email')
      return
    }
    if(!password){
      alert('password needed')
      return
    }
    this.authService.login({email, password})
  }

}
