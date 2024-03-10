import { inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IEvent } from '../../interfaces/event.interface';
import { map } from 'rxjs';



export class EventService {

  storeService = inject(AngularFirestore)

  async guardarEvento(evento: IEvent) {

    try {
      const response = await this.storeService.collection('eventos').add(evento)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }


}
