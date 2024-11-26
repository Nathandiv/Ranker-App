import { inject, Injectable } from '@angular/core';
import { UserInterface } from '../Types/ UserInterface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private isLoggedIn: boolean = false;
  user: UserInterface[] = [];
  router = inject(Router);

  constructor() {}

  // Register a new user
  register(userData: UserInterface) {
    const userEmail = userData.email;
    console.log(userData);

    // Check if the email is already registered
    for (let index = 0; index < this.user.length; index++) {
      if (this.user[index].email === userEmail) {
        alert('Email already taken');
        return;
      }
    }

    // If email is unique, add the user to the array and redirect to login
    this.user.push(userData);
    alert('Registered successfully');
    this.router.navigateByUrl('/login');
  }

  // Login an existing user
  login(userData: UserInterface) {
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].email === userData.email && this.user[i].password === userData.password) {
        alert(`Welcome ${this.user[i].username}.`);
        this.router.navigateByUrl('/');
        return;
      }
    }
    alert('Incorrect login details');
  }


}
