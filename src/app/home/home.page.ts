import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  
})
export class HomePage  {
  public checkLogin: string = '';
  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private route: ActivatedRoute,

  ) {
    this.checkLogin = this.route.snapshot.paramMap.get('checkLogin');
    console.log(this.checkLogin);
  }

  
 

  goMixDash() {
    this.navCtrl.navigateForward('/mix-dash');
  }




}

