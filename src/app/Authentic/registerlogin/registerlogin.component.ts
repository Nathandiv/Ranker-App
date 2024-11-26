import { Component, inject } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-registerlogin',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './registerlogin.component.html',
  styleUrl: './registerlogin.component.css'
})
export class RegisterloginComponent {

  authService = inject(AuthService)

  register(username: string, email: string, password: string){
  
    if(!username){
      alert('username needed')
      return
    }
  
    if(!email){
      alert('email needed')
      return
    }
    if(!password){
      alert('password needed')
      return
    }
    this.authService.register({username, email, password})
  
  }

}
