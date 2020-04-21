import { Component, OnInit } from '@angular/core';

import Chart from 'chart.js';

import * as HighCharts from 'highcharts';

import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dnf',
  templateUrl: './dnf.page.html',
  styleUrls: ['./dnf.page.scss'],
})
export class DnfPage implements OnInit {

  constructor() { }

  //----------------- Bar Chart ----------------------------------------------------------

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  //Chart Labels
  public barChartLabels:string[] = ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  //Chart data
  public barChartData:any[] = [
    {data: [66, 55, 83, 82, 56, 51, 43], label: 'Loss'},
    {data: [29, 38, 40, 21, 82, 30, 89], label: 'Profit'}
  ];

  // Chart events
  public chartClickeds(e:any):void {
    console.log(e);
  }
  // Chart events
  public chartHovereds(e:any):void {
    console.log(e);
  }
  
  //----------------- Bar Chart ----------------------------------------------------------

  //----------------- Doughnut Chart ----------------------------------------------------------
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

// events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  //----------------- Doughnut Chart ----------------------------------------------------------

  
  pieChartData;

  // Tab Change Event
  beforeChange($event: NgbTabChangeEvent) {
    // dont do anything if id matches
    if ($event.nextId === 'tab-4') {
      $event.preventDefault();
    }
  }

  ngOnInit() {
    this.useAnotherOneWithWebpack();
    this.useAngularLibrary();
  }

  ionViewDidEnter() {
    this.barChartPopulation();
    this.pieChartBrowser();
  }

  barChartPopulation() {
    HighCharts.chart('barChart', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Historic World Population by Region'
      },
      xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Population (millions)',
          align: 'high'
        },
      },
      tooltip: {
        valueSuffix: ' millions'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        type: undefined,
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
      }, {
        type: undefined,
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
      }, {
        type: undefined,
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31]
      }, {
        type: undefined,
        name: 'Year 2016',
        data: [1216, 1001, 4436, 738, 40]
      }]
    });
  }

  pieChartBrowser() {
    HighCharts.chart('pieChart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares in October, 2019'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        type: undefined,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Sogou Explorer',
          y: 1.64
        }, {
          name: 'Opera',
          y: 1.6
        }, {
          name: 'QQ',
          y: 1.2
        }, {
          name: 'Other',
          y: 2.61
        }]
      }]
    });
  }

  useAnotherOneWithWebpack() {
    var ctx = (<any>document.getElementById('canvas-chart')).getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',

        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
              label: "My First dataset",
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              data: [0, 10, 5, 2, 20, 30, 45],
              borderWidth: 1
            }]
       }
    });
  }

  useAngularLibrary() {
    this.pieChartData = {
      chartType: 'PieChart',
      dataTable: [
        ['Languages', 'Percent'],
        ['Ionic',     33],
        ['Angular',      33],
        ['JavaScript',  33]
      ],
      options: {
      'title': 'Technologies',
      'width': 400,
      'height': 300
      }
    };
  }   
  
}


