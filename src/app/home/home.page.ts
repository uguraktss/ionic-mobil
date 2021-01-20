import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

import { AngularFirestore } from "@angular/fire/firestore";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  kullanici = {}
  constructor(private nav: NavController, private auth: AngularFireAuth,private firestore: AngularFirestore) { }
  Login(kullanici) {
    this.auth.signInWithEmailAndPassword(kullanici.email, kullanici.password)
      .then((rej) => {
        this.nav.navigateRoot("tabs")
      })
      .catch((err) => {
        console.log(err)
      })

  }
  Register(kullanici) {
    this.auth.createUserWithEmailAndPassword(kullanici.email, kullanici.password)
      .then((rej) => {
        this.firestore.collection('currency').doc(rej.user.uid).set({allCurrency:[]})
        this.nav.navigateRoot("tabs")
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
