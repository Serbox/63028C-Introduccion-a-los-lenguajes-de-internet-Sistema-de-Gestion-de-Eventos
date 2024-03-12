import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { Router } from '@angular/router';
import { IUser } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  router = inject(Router);


  getAuth() {
    return getAuth();
  }

  async signIn(user: IUser) {
    try {
      const response = await signInWithEmailAndPassword(getAuth(), user.email, user.password);
      const token = await response.user.getIdToken();
      sessionStorage.setItem("token", token)
      return true;
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      throw error;
    }
  }



  // social login

  async loginWihtGoogle() {

    try {
      const proveedor = new GoogleAuthProvider
      const response = await this.auth.signInWithPopup(proveedor)
      const token = await response.user.getIdToken()
      sessionStorage.setItem("token", token)
      return true
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      throw error;
    }
  }

  async loginWihtGitHub() {

    try {
      const proveedor = new GithubAuthProvider
      const response = await this.auth.signInWithPopup(proveedor)
      const token = await response.user.getIdToken()
      sessionStorage.setItem("token", token)
      return true
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      throw error;
    }
  }

  signUp(user: any) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //updateUser(displayName: any) {
  //  return updateProfile(getAuth().currentUser, {displayName} );
  //}

  // setDocument(path: any, data: any) {
  //   return setDoc(doc(getFirestore(), path), data)
  // }

  // async getDocument(path: any) {
  //   return (await getDoc(doc(getFirestore(), path))).data()
  // }

  sendRecoveryEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email);
  }

  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    return true;
    //this.routerlink('/auth');
  }


  //routerlink(url: any) {
  //  this.router.navigateByUrl(url)
  //}


}
