import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

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
  providers:[
    MoovieProvider
  ]
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

  public lista_filmes = new Array<any>();

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     private movieProvider: MoovieProvider) {
  }

  public funcao_teste(){
    alert("Teste de função");
  }
  ionViewDidLoad() {
    this.movieProvider.getLastestMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error=>{
        console.log(error);
      }
      
    )
  }

}
