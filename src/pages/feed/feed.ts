import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string = "Abner Lisboa Marques";
  public data_nasc:string = "06/12/1983";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public funcao_teste(){
    alert("Teste de função");
  }
  ionViewDidLoad() {
    //this.funcao_teste();

  }

}
