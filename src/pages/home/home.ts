import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { isRightSide } from '../../../node_modules/ionic-angular/umd/util/util';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  items: Observable<any[]>;
   name:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public fdb:AngularFireDatabase) {
    this.items = fdb.list('cuisines').valueChanges();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  onCruisines(name){
    this.fdb.list('cuisines').push(this.name);
  }

}
