import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp } from 'firebase/app'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'


const firebaseConfig = {
  apiKey: "AIzaSyDk6wTO_p1AMX73rJmjXOBB83Jaa9ZvbTo",
  authDomain: "gestion-eventos-f696f.firebaseapp.com",
  databaseURL: "https://gestion-eventos-f696f-default-rtdb.firebaseio.com",
  projectId: "gestion-eventos-f696f",
  storageBucket: "gestion-eventos-f696f.appspot.com",
  messagingSenderId: "876409458629",
  appId: "1:876409458629:web:a84367b3ca25222bbb85ac"
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule,
      AngularFirestoreModule
    ), provideAnimationsAsync()
  ]
};
