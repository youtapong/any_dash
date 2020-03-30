import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  public ip_addr: string = '';

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  goToHome() {
    //this.navCtrl.navigateForward('/home');
    this.navCtrl.navigateRoot('/home');
  };

}










