import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore";
@Component({
  selector: 'app-my-currency',
  templateUrl: './my-currency.page.html',
  styleUrls: ['./my-currency.page.scss'],
})
export class MyCurrencyPage implements OnInit {
  user= null;
  allCurrency = [];
  constructor(private auth: AngularFireAuth,private firestore: AngularFirestore) { }

  ngOnInit() {
    this.auth.currentUser.then((res) => {
      this.user = res.uid;
    });
  }
  ionViewWillEnter(){
    
    if (this.user != null) {
      this.firestore
      .collection("currency")
      .doc(this.user)
      .get()
      .toPromise()
      .then((rej) => {
         this.allCurrency = rej.get("allCurrency")
      
      });
    } 
  }

}
