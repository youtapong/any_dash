import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IpaddrService } from '../ipaddr.service';
import { LoadingController, AlertController, MenuController, NavController } from '@ionic/angular';

interface resultData {
  cus_id: string,
  ncd_customer1: string,
  ncd_device: any[],
  companyName: string,
  Product_Name: string,
  customerTypeName: string,
  customerId: string,
  customerClass: string,
  BA_BillHanding: string,
  BillAddr_Detail: string,
  BillAddr_ID: string,
  m4_total: string,
  m4_actualBill: string,
  m3_total: string,
  m3_actualBill: string,
  m2_total: string,
  m2_actualBill: string,
}

@Component({
  selector: 'app-mix-dash',
  templateUrl: './mix-dash.page.html',
  styleUrls: ['./mix-dash.page.scss'],
})
export class MixDashPage implements OnInit {
  bars: any;
  colorArray: any;
  /////// data from json
  public ncd_device: any[] = [];
  public cus_id: string = '';
  public ncd_customer1: string = '';
  /////// end data from json
  public ip_addr: string = '';
  public ip_addr2: string = '';
  public ip_addr3: string = '';
  public service_id: string = '0213300mml0129';
  public companyName: string = '';
  public Product_Name: string = '';
  public customerTypeName: string = '';
  public customerId: string = '';
  public customerClass: string = '';
  public BA_BillHanding: string = '';
  public BillAddr_Detail: string = '';
  public BillAddr_ID: string = '';
  public m4_total: string = '';
  public m4_actualBill: string = '';
  public m3_total: string = '';
  public m3_actualBill: string = '';
  public m2_total: string = '';
  public m2_actualBill: string = '';

  sub: Subscription;

  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
    private http: HttpClient,
    private alertCtrl: AlertController,
    private IpaddrService: IpaddrService,
    public loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
    this.menu.enable(false);
    this.presentLoading();
    ////// ทำครั้งแรกเมื่อโหลด  หรือ click ปุ่ม
    this.chart_doughnut();
    this.getCust();
    this.hideLoader();
  }

  chart_doughnut() {
    var ctx = (<any>document.getElementById('doughnut-chart')).getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: "doughnut",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {

            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
          }
        ]
      }
    });
  }

  getCust() {
    this.ip_addr2 = this.IpaddrService.ip_addr2;
    this.sub = this.http.get(
      this.ip_addr2 + this.service_id
    ).subscribe((result: resultData) => {
      this.companyName = result.companyName;
      this.Product_Name = result.Product_Name;
      this.customerTypeName = result.customerTypeName;
      this.customerId = result.customerId;
      this.customerClass = result.customerClass;
      this.BA_BillHanding = result.BA_BillHanding;
      this.BillAddr_Detail = result.BillAddr_Detail;
      this.BillAddr_ID = result.BillAddr_ID;
      this.m4_total = result.m4_total;
      this.m4_actualBill = result.m4_actualBill;
      this.m3_total = result.m3_total;
      this.m3_actualBill = result.m3_actualBill;
      this.m2_total = result.m2_total;
      this.m2_actualBill = result.m2_actualBill;
    });
    console.log('This is getCust = ' + this.ip_addr2 + this.service_id);
  }

  async custDetail(companyName, customerClass, BA_BillHanding, BillAddr_Detail, BillAddr_ID, m4_total, m4_actualBill, m3_total, m3_actualBill, m2_total, m2_actualBill) {
    {
      const alert = this.alertCtrl.create({
        header: companyName,
        subHeader: 'Class = ' + customerClass,
        message:
          'BA_BillHanding = ' + BA_BillHanding + '<br>' +
          'Adr = ' + BillAddr_Detail + '<br><br>' +
          'BillAddr_ID = ' + BillAddr_ID + '<br><br>' +
          'จ่าย ' + m4_total + ' บาท วันที่ ' + m4_actualBill + '<br><br>' +
          'จ่าย ' + m3_total + ' บาท วันที่ ' + m3_actualBill + '<br><br>' +
          'จ่าย ' + m2_total + ' บาท วันที่ ' + m2_actualBill + '<br><br>',

        buttons: [
          {
            text: 'Ok',
            cssClass: 'secondary',
            handler: () => {
              //console.log('Confirm Ok');
            }
          }
        ]
      }).then(alert => alert.present());
    }
  }


  presentLoading() {
    this.loadingCtrl.create({
      message: 'ช้าๆ ได้พร้าเล่มงาม ',
      duration: 1000
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed! after 1 Seconds');
      });
    });
  }

  hideLoader() {
    setTimeout(() => {
      this.loadingCtrl.dismiss();
    }, 500);
  }

}
