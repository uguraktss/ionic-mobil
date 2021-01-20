import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rates } from '../models/currencıes';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-all-currency',
  templateUrl: './all-currency.page.html',
  styleUrls: ['./all-currency.page.scss'],
})
export class AllCurrencyPage implements OnInit {

  response = []
  user= null;
  constructor(private http: HttpClient,private firestore: AngularFirestore,private auth: AngularFireAuth) { }

  ngOnInit() {
    this.auth.currentUser.then((res) => {
      this.user = res.uid;
      console.log(this.user)
    });
  }
  ionViewWillEnter() {

    this.http.get("http://data.fixer.io/api/latest?access_key=d97ddc6a4826f431e450541f69eac852&format=1&base=EUR")
      .toPromise()
      .then((res) => {
        var rates = res["rates"]
        this.response = []
        Object.keys(rates).forEach((key) => {
          this.response.push({
            currency: key,
            value: rates[key]
          })
        })
      });
  }

  liked(value){
    console.log(value)
    
    if (this.user != null) {
      this.firestore
      .collection("currency")
      .doc(this.user)
      .get()
      .toPromise()
      .then((rej) => {
        var currency = rej.get("allCurrency")
        currency[currency.length]=value;
        this.firestore
          .collection("currency")
          .doc(this.user)
          .set({ allCurrency: currency })
          .then(() => {
          });
      });
    }
  }

}
