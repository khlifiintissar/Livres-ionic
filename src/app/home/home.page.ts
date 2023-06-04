import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  livres:any=[]

  constructor(private fire:AngularFirestore,private route:Router) {
    this.getLivres();
  }
  getLivres(){
    this.fire.collection("Livres").snapshotChanges()
       .subscribe(
        data =>{
          this.livres=data.map(
            e =>{
              return{
                id:e.payload.doc.id,
                data:e.payload.doc.data(),
              //  title:e.payload.doc.data()["title"],
              //  author:e.payload.doc.data()["author"],
              //  quantity:e.payload.doc.data()["quantity"],
             //   price:e.payload.doc.data()["price"],
              }
            }
          )
        }
       )
  }
  delBook(item:any){
    this.fire.doc("Livres/"+item.id).delete();
  }
  allerAjout(){
    this.route.navigateByUrl("ajout");

  }


}
