import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAm8U_yZhPvhaSKTIYN8jBRZAi_2b_e74I",
  authDomain: "livre-f3dfb.firebaseapp.com",
  projectId: "livre-f3dfb",
  storageBucket: "livre-f3dfb.appspot.com",
  messagingSenderId: "1012956657023",
  appId: "1:1012956657023:web:7f6f4443eeffa562d0164a"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
