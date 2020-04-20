import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: '../assets/svg/home-1.svg'
    },
    {
      title: 'Mix',
      url: '/mix-dash',
      icon: '../assets/svg/app.svg'
    },
    {
      title: 'ข้อมูลลูกค้า',
      url: '/customer',
      icon: '../assets/svg/users.svg'
    },
    {
      title: 'DNF Sector',
      url: '/dnf',
      icon: '../assets/svg/notepad.svg'
    },
    {
      title: 'About Us',
      url: '/about-us',
      icon: '../assets/svg/info.svg'
    }
    
   
  ];
 // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}


