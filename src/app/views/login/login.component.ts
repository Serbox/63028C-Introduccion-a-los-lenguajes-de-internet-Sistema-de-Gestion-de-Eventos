import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { IUser } from '../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authService = inject(AuthService);
  router = inject(Router)
  mail: string = "";
  pass: string = "";
  isLoggedIn: boolean;

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

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
      this.isLoggedIn=true;
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

}
