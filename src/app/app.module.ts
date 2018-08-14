import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { MyApp } from './app.component';

var firebaseConfig = {
  apiKey: "AIzaSyARL1KVKrWar23FrQQ90U_e3OmZVxP115g",
  authDomain: "firelistdb.firebaseapp.com",
  databaseURL: "https://firelistdb.firebaseio.com",
  projectId: "firelistdb",
  storageBucket: "firelistdb.appspot.com",
  messagingSenderId: "680802037175"
};

@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabaseModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
