import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ApiAiClient} from "api-ai-javascript";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  developerAccessToken = 'd6d51ec9cacf494abb638bfad93a95bc';
  
  constructor(public navCtrl: NavController) {
    let client = new ApiAiClient({accessToken: this.developerAccessToken})
    .textRequest('Hello man !');

    console.log(client);
  }
}
