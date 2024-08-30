import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {

  user: any;
  userNoValid: any;

  ngOnInit(){

    const localData = sessionStorage.getItem('user');

    if (localData){
      this.user = JSON.parse(localData);
      const {valid, ...userNoValid} = this.user
      this.userNoValid = userNoValid;
    } 
  }
  
  getObjectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];   
  }


}
