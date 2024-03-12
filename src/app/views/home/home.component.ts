import { Component, OnInit, inject } from '@angular/core';
import { EventService } from '../../services/event/event.services';
import { IEvent } from '../../interfaces/event.interface';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-home',
  standalone: true,
  providers: [EventService],
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  eventService = inject(EventService)

  eventos: IEvent[]

}
