import { Component, OnInit, inject } from '@angular/core';
import { EventService } from '../../services/event/event.services';
import { IEvent } from '../../interfaces/event.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [EventService],
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  eventService = inject(EventService)

  eventos: IEvent[]

}
