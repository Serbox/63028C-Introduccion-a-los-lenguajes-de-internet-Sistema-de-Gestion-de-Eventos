  import { Component, inject } from '@angular/core';
  import { AuthService } from '../../services/auth/auth.service';
  import { FormsModule } from '@angular/forms';
  import { IUser } from '../../interfaces/user.interface';
  import { Router } from '@angular/router';
  import { HeaderComponent } from "../header/header.component";
  import { FooterComponent } from '../footer/footer.component';

  @Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule,FooterComponent,HeaderComponent],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })
  export class LoginComponent {

    authService = inject(AuthService);
    router = inject(Router)
    mail: string = "";
    pass: string = "";
    isLoggedIn: boolean = false ;
    isLoggedOut:boolean= false;

    

    
    async login() {

      const usuario: IUser = {
        email: this.mail ? this.mail.trim() : '',
        password: this.pass ? this.pass.trim() : ''
      };

      await this.authService.signIn(usuario)
      this.router.navigateByUrl('/events')
    }

    async loginGoogle() {

      const response = await this.authService.loginWihtGoogle()

      if (response == true) {
        this.isLoggedIn = true;
       
        this.router.navigateByUrl("events")
        
      }
    }

    async loginGitHub() {

      const response = await this.authService.loginWihtGitHub()

      if (response == true) {
        this.isLoggedIn=true;
        
        this.router.navigateByUrl("events")
      }
    }
    async logOut() {

      const response = await this.authService.signOut();
      if (response === true) {
        this.isLoggedIn = true ;
        this.isLoggedOut = false;
      this.router.navigateByUrl("events")
      
  }
    }
    getIsLoggedIn() {
      return this.isLoggedIn;
    }
    getLoggedOut(){
      return this.isLoggedOut;
    }
  }
