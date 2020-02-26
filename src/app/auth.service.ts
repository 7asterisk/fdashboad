import { Injectable } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authState: any = null;
  constructor(private af: AngularFireAuth) {}

  get authenticated(): boolean {
    console.log("cool");
    return this.authState !== null;
  }

  signOut(): void {
    this.af.auth.signOut();
  }

  loginWithEmail(email: string, password: string) {
    return this.af.auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }
}
