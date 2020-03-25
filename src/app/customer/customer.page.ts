import { Component, OnInit } from '@angular/core';

import { IpaddrService } from '../ipaddr';
import { HttpClient } from '@angular/common/http';

import { Subscription, from } from 'rxjs';

interface resultData {
  cus_id: string,
  ncd_customer: string,
  ncd_services: string,
  ncd_ip_wan: string,
  ncd_device: any[],
  
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  
  public service_id: string = ''; // เก็บข้อความที่ใช้ค้น
  public ip_addr3: string = ''; 
  public ncd_device: any[] = [];
  public cus_id: string = ''; 
  public ncd_customer: string = ''; 
  public ncd_services: string = ''; 
  public ncd_ip_wan: string = ''; 

  sub: Subscription;

  constructor(
    private IpaddrService: IpaddrService,
    public  http: HttpClient,
  ) { }

  ngOnInit() {
    
  }


  getCust() {
    this.ip_addr3 = this.IpaddrService.ip_addr3;
    this.sub = this.http.get(
      this.ip_addr3 + this.service_id
    ).subscribe((result: resultData) => {
      this.cus_id = result.cus_id;
      this.ncd_customer = result.ncd_customer;
      this.ncd_device = result.ncd_device;
      this.ncd_services = result.ncd_services;
      this.ncd_ip_wan = result.ncd_ip_wan;
      // for (const [key, value] of Object.entries(result)) {
      //   let type = typeof value;
      //   if(type === "object"){

      //   }
      //   // console.log(`${key} ${value}`);
      // }
      
     

    });
  
  }

}
