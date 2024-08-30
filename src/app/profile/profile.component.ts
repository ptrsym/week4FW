import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  user: any = {};
  userNoValid: any = {};

  constructor(private router:Router) {}

  ngOnInit(){

    const localData = sessionStorage.getItem('user');

    if (localData) {
      this.user = JSON.parse(localData);
      const { valid, ...userNoValid } = this.user;
      this.userNoValid = userNoValid;
    } else {
      this.router.navigate(['/login']);
    }
  }

  updateDetails() {
    sessionStorage.setItem('user', JSON.stringify(this.user));
  }

  getObjectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];   
  }

  getInputType(field: string): string {
    if (field === 'email') {
      return 'email';
    }
    return 'text';
  }


}
