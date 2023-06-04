import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.page.html',
  styleUrls: ['./ajout.page.scss'],
})
export class AjoutPage implements OnInit {
  titre:string="";
  auteur:string="";
  quantity:string="";
  prix:string="";


  constructor(private fire:AngularFirestore,private route:Router) { }

  ngOnInit() {
  }
  ajouter(){
   this.fire.collection("Livres").add(
    {titre:this.titre,auteur:this.auteur,prix:this.prix,quantity:this.quantity}
   ) ;
   this.route.navigateByUrl("home");
  }

}
