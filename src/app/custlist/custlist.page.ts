// import { CustlistpopPage } from './../custlistpop/custlistpop.page';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './../shared/data.service';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { NavController , AlertController, PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-custlist',
  templateUrl: './custlist.page.html',
  styleUrls: ['./custlist.page.scss'],
})
export class CustlistPage implements OnInit, OnDestroy {
  public data: any[] = []; // สำหรับใส่ concat ตัวแปร
  public dataRx: any[];
  public loading: any;
  public page: number = 1;
  public sorttype: string = '';
  public queryString: string = '';
  public event: any;
  public sub: Subscription; /// for clear data this page
  public totalData:number = 0;
  public allData:number = 0;
  public totalPage:number = 0;

  constructor(
    private dataService: DataService,
    public loadingController: LoadingController,
    public alertCtrl: AlertController,
    public popoverCtrl: PopoverController,
    private navCtrl: NavController
    //private iab: InAppBrowser
  ) { }

  ngOnInit() {

  }

  async openUrl(url: string) {

    const { Browser } = Plugins;
    await Browser.open({ url: url });

  }

  ionViewWillEnter() {
    this.data=[];
    this.presentLoading();
    this.getData();
  }
  //// เวลาเรียก จะใส่หรือไม่ใส่ event ก็ได้ ถ้ามี ?  ตามหลัง
  getData(event?: any) {
    this.sub = this.dataService.getCustomer(this.page, this.queryString, this.sorttype).subscribe(
      (dataTx: any) => {
        this.totalData = dataTx.totalData;
        this.allData = dataTx.allData;
        this.totalPage = dataTx.totalPage;
        this.data = this.data.concat(dataTx.data);
        //console.log(this.product);
      },
      ///// สำหรับยกเลิก loading
      async (error: any) => {
        await this.loading.dismiss();
        if (event) { event.target.complete(); } ///// สำหรับยกเลิก doRefresh
      },
      async () => {
        await this.loading.dismiss();
        if (event) { event.target.complete(); } ///// สำหรับยกเลิก doRefresh
      }
    );
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'กำลังโหลดดดดดดดดดด',
      //duration: 2000,
      spinner: "dots"
    });
    await this.loading.present();
    //console.log('Loading dismissed!');
  }

  doRefresh(event: any) {
    /// สำหรับการเปลี่ยนข้อมูล update ข้อมูลใหม่ๆ
    //alert('doReFresh');
    if (this.event) {
      event.target.disabled = false;
    }
    this.data = [];
    this.page = 1;
    this.getData(event);
    //console.log('queryString = '+this.queryString);
  }

  loadData(event: any) {
    this.event = event;
    this.page++;
    this.getData(event);
    if (this.page === Math.ceil(this.totalData / this.page)) {
      event.target.disabled = true;
    }

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goHome() {
    this.navCtrl.navigateForward(['/home']);
  }

  async doHelp() {
    const alert = await this.alertCtrl.create({
      header: 'Help Search',
      subHeader: 'ใจเย็นๆจ้า',
      cssClass: 'alert-warning',
      message: 'เนื่องจากข้อมูลมีเป็นจำนวนมาก ให้เลือกปุ่มมุมบนขวาเพื่อเลือกประเภทการแสดงผลก่อน จากนั้นใน Search ค่อยพิมพ์ชื่อลูกค้าที่ต้องการ',
      buttons: ['OK']
    });
    await alert.present();
  }

  async custFilter() {
    const alert = await this.alertCtrl.create({
      header: 'Service Name',
      inputs: [
        {
          name: 'All Customer',
          type: 'radio',
          label: 'All Customer',
          value: '',
          checked: true
        },
        {
          name: 'ADSL',
          type: 'radio',
          label: 'ADSL',
          value: 'ADSL'
        },
        {
          name: 'ATM',
          type: 'radio',
          label: 'ATM',
          value: 'ATM'
        },
        {
          name: 'BWA',
          type: 'radio',
          label: 'BWA : Broadband Wireless Access',
          value: 'BWA'
        },
        {
          name: 'CES',
          type: 'radio',
          label: 'CES',
          value: 'CES'
        },
        {
          name: 'Circuit',
          type: 'radio',
          label: 'Circuit',
          value: 'Circuit'
        } ,
        {
          name: 'Cloud',
          type: 'radio',
          label: 'Cloud',
          value: 'Cloud'
        },
        {
          name: 'Dark Fiber',
          type: 'radio',
          label: 'Dark Fiber',
          value: 'Dark Fiber'
        },
        {
          name: 'DDN',
          type: 'radio',
          label: 'DDN',
          value: 'DDN'
        },
        {
          name: 'Digital TV/TV Codec',
          type: 'radio',
          label: 'Digital TV/TV Codec',
          value: 'Digital TV/TV Codec'
        },
        {
          name: 'DSL-VPN',
          type: 'radio',
          label: 'DSL-VPN',
          value: 'DSL-VPN'
        },
        {
          name: 'FIBER 2U',
          type: 'radio',
          label: 'FIBER 2U',
          value: 'FIBER 2U'
        },
        {
          name: 'FR',
          type: 'radio',
          label: 'FR',
          value: 'FR'
        },
        {
          name: 'Hotspot',
          type: 'radio',
          label: 'Hotspot',
          value: 'Hotspot'
        },
        {
          name: 'ICT-Solution Coperate<',
          type: 'radio',
          label: 'ICT-Solution Coperate<',
          value: 'ICT-Solution Coperate<'
        },
        {
          name: 'ICT-Solution Retail',
          type: 'radio',
          label: 'ICT-Solution Retail',
          value: 'ICT-Solution Retail'
        },
        {
          name: 'IIG',
          type: 'radio',
          label: 'IIG',
          value: 'IIG'
        },
        {
          name: 'IP Other',
          type: 'radio',
          label: 'IP Other',
          value: 'IP Other'
        },
        {
          name: 'IP-VPN',
          type: 'radio',
          label: 'IP-VPN',
          value: 'IP-VPN'
        },
        {
          name: 'Leased Line Interne',
          type: 'radio',
          label: 'Leased Line Interne',
          value: 'Leased Line Interne'
        },
        {
          name: 'Metro LAN',
          type: 'radio',
          label: 'Metro LAN',
          value: 'Metro LAN'
        },
        {
          name: 'Mobile',
          type: 'radio',
          label: 'Mobile',
          value: 'Mobile'
        },
        {
          name: 'NIX',
          type: 'radio',
          label: 'NIX',
          value: 'NIX'
        },
        {
          name: 'PRI (ISDN)',
          type: 'radio',
          label: 'PRI (ISDN)',
          value: 'PRI'
        },
        {
          name: 'Trunking Access',
          type: 'radio',
          label: 'Trunking Access',
          value: 'Trunking Access'
        },
        {
          name: 'Wireless LAN',
          type: 'radio',
          label: 'Wireless LAN',
          value: 'Wireless LAN'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            //console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            //console.log(JSON.stringify(data)); //to see the object
            //console.log(data);
            this.sorttype=data;
          }
        }
      ]
    });
    await alert.present();
  }



}
