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

  public objeto_feed = {
    titulo: "Abner Lisboa Marques",
    data: "06/12/1983",
    descricao: "Meu primeiro APP Híbrido!!!",
    qtd_likes: 12,
    qtd_comments: 10,
    time_comment: "Now"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public funcao_teste(){
    alert("Teste de função");
  }
  ionViewDidLoad() {
    //this.funcao_teste();

  }

}
