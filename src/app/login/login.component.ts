import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const BACKEND_URL = '/api/auth';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  constructor(private router:Router, private httpClient: HttpClient, private appComponent: AppComponent) { }

  username: string = "";
  password: string = "";

onSubmit() {

  let user = {username: this.username, password: this.password};
  this.httpClient.post(BACKEND_URL, user, httpOptions).subscribe(
    (response:any)=>{
      console.log('Response: ',response);
      if (response.valid === true) {
        const responseString = JSON.stringify(response);
        sessionStorage.setItem('user', responseString);

        console.log('User:', response.username);
        console.log('logged in');
        this.appComponent.onLoginSuccess();
        this.router.navigate(['/profile']);
      }
    },
    (error) => {
      console.log('Login error', error);
      if (error.status === 401) {
        alert('Invalid login details, please try again.');
      } else {
        alert('An error occured during login');
      }
    }
  );
}

}

