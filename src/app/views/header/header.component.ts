
import { LoginComponent} from '../login/login.component';
import { CommonModule,} from '@angular/common';
import { NgIf } from '@angular/common';import { Component, OnInit, inject } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  loginComponent = new LoginComponent();

    isLoggedIn = this.loginComponent.getIsLoggedIn();
    isLoggedOut = this.loginComponent.getLoggedOut();
    if (isLoggedIn) {
      
      
        
      }else(){ 
        
      

    

      }
}

