import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { EventComponent } from './views/event/event.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "events", component: EventComponent, canActivate: [authGuard]
  },
  { path: '**', component: NotfoundComponent }
];
