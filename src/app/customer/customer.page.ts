import { Component, OnInit } from '@angular/core';

import { IpaddrService } from '../ipaddr';
import { HttpClient } from '@angular/common/http';

import { Subscription, from } from 'rxjs';

interface resultData {
  cus_id: string,
  ncd_customer: any[],
  ncd_services: any[],
  ncd_ip_wan: any[],
  ncd_device: any[],
  ncd_interface: any[],
  ncd_vrf: any[],
  
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
  public ncd_customer: any[] = []; 
  public ncd_services: any[] = [];
  public ncd_ip_wan: any[] = [];
  public ncd_interface: any[] = [];
  public ncd_vrf: any[] = [];

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
      this.ncd_customer = Object.entries(result.ncd_customer);
      this.ncd_device = Object.entries(result.ncd_device);
      this.ncd_services = Object.entries(result.ncd_services);
      this.ncd_ip_wan = Object.entries(result.ncd_ip_wan);
      this.ncd_interface = Object.entries(result.ncd_interface);
      this.ncd_vrf = Object.entries(result.ncd_vrf);
      // for (const [key, value] of Object.entries(result)) {
      //   let type = typeof value;
        
      //   if(type === "object"){
      //     for (const [k, va] of Object.entries(value)) {
      //       // console.log(va);
      //     }
      //   }else{
          
      //   }
        
      // }


      console.log(this.ncd_device)
      
     

    });
  
  }

}
