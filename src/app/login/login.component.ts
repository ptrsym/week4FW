import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  constructor(private router:Router) { }

  username: string = "";
  password: string = "";
  errorMessage: string | null = null;

  users = [
    {username: "garf", password: "123"},
    {username: "jon", password: "456"},
    {username: "odie", password: "789"}
]

onSubmit() {
  this.errorMessage = null;
  if (this.users.some(u => u.username === this.username && u.password === this.password)) {
   this.router.navigateByUrl('/account'); 
} else {
  this.errorMessage = "User not found or invalid credentials. Please try again.";
}
}
}
