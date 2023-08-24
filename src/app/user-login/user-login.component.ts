
import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  constructor(private router: Router) {}

  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    userName: '',
    password: ''
  };
  showSignupForm: boolean = false;

  ngOnInit(): void {
    const storedUsers = localStorage.getItem('signUpUsers');
    if (storedUsers) {
      this.signupUsers = JSON.parse(storedUsers);
    }
  }

  onLogin() {
    console.log('Entered credentials:', this.loginObj);
    console.log('Registered users:', this.signupUsers);

    const foundUser = this.signupUsers.find(
      user =>
        user.userName === this.loginObj.userName && user.password === this.loginObj.password
    );

    if (foundUser) {
      console.log('Login successful');
      this.router.navigate(['/write-blog']);
    } else {
      console.log('Invalid login');
    }
  }

  onSignup() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
   
    console.log('Updated Signup Users:', this.signupUsers);
  }

  toggleForm(): void {
    this.showSignupForm = !this.showSignupForm;
    this.signupObj.userName = '';
    this.signupObj.email = '';
    this.signupObj.password = '';
    this.loginObj.userName = '';
    this.loginObj.password = '';
  }
}
