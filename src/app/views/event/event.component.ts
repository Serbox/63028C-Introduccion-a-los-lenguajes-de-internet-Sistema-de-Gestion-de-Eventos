import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { IEvent, Ilocacion } from '../../interfaces/event.interface';
import { AuthService } from '../../services/auth/auth.service';
import { EventService } from '../../services/event/event.services';



@Component({
  selector: 'app-event',
  standalone: true,
  providers: [provideNativeDateAdapter(), EventService],
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {

  authService = inject(AuthService)
  eventService = inject(EventService)

  nombre: string
  descripcion: string
  fecha: string
  foto: string
  user: string
  ciudad: string
  direccion: string
  pais: string

  likes: number = 1
  fechaSeparada: string
  horaSeparada: string

  actualizarFechaHora() {
    if (this.fecha) {
      const fechaHora = new Date(this.fecha);
      this.fechaSeparada = fechaHora.toISOString().split('T')[0]; // Obtiene la fecha
      this.horaSeparada = fechaHora.toTimeString().split(' ')[0]; // Obtiene la hora
    }
  }


  async crearEvento() {

    const userUid = this.authService.getAuth().currentUser.uid

    const locacion: Ilocacion = {
      ciudad: this.ciudad,
      pais: this.pais,
      hora: this.horaSeparada,
      direccion: this.direccion
    }

    const evento: IEvent = {
      nombre: this.nombre,
      fecha: this.fechaSeparada,
      descripcion: this.descripcion,
      likes: this.likes,
      foto: "https://todo",
      locacion: locacion,
      user: userUid
    }

    this.eventService.guardarEvento(evento)
  }











}
