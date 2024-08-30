import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, LoginComponent, AccountComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'week4tut';

  isLoggedIn: boolean = false;

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    this.isLoggedIn = !!sessionStorage.getItem('user');
  }

  onLoginSuccess() {
    this.checkLoginStatus();
    this.cdRef.detectChanges();
  }


  logout() {
    sessionStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }



}
