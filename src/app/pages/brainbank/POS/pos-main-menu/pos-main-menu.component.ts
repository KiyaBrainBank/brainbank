import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { helpers } from 'chart.js';
// import { helpers } from 'chart.js';
// import {TreemapController, TreemapElement} from 'chartjs-chart-treemap';
import { Chart, registerables, ChartData, ChartOptions, ChartEvent, ChartType, ChartConfiguration, } from 'chart.js';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';
import annotationPlugin from 'chartjs-plugin-annotation';
import { color as Color } from 'chart.js/helpers';

import { config } from 'rxjs';

Chart.register(TreemapController, TreemapElement, annotationPlugin);

@Component({
  selector: 'app-pos-main-menu',
  templateUrl: './pos-main-menu.component.html',
  styleUrls: ['./pos-main-menu.component.sass']
})
export class PosMainMenuComponent implements OnInit {
  // @ViewChild("catmATMMixTransactions01", { read: ElementRef }) container: ElementRef;
  vrchartfont = "Avenir, Segoe UI, arial, sans-serif";
  tablist = ['posperformance', 'posfailures', 'merchant', 'customer transactions', 'lost revenue', 'configuration'];
  activeTabName: string = 'posperformance';
//helpers:any
  dlbls_barvalue = "#dddddd";
  title_charttitle = "white";
  title_charttitle2 = "#666666";
  title_ylabel = "white";
  title_xlabel = "white";
  legend_textcolor = "#dddddd";
  data4: any
  config2: any
  ygrid_bordercolor = "#444444";
  ygrid_color = "#444444";
  xgrid_bordercolor = "#444444";
  xgrid_color = "#444444";

  ytick_color = "#aaa";
  xtick_color = "#aaa";
  cdptechd: any;
  ctxcdptechd: any;
  cdpbusid: any;
  ctxcdpbusid: any;
  cdpbusid1: any;
  ctxcdpbusid1: any;
  showBD: boolean = true;
  showNonBD: boolean = false;
  showLastYear: boolean = true;
  showThisYear: boolean = false;
  cdptechd1: any;
  ctxcdptechd1: any;
  cdptxno1: any;
  ctxdptxno1: any;
  ccanv: any;
  cdxLabeldptxno = [];
  cdyDatadptxno = [];
  ctxctvh: any;
  cdxyDataatmmixtxn: any;
  scalesx1: any
  canvas1:any
  constructor( ) { }
  ngOnInit(): void {
    console.log("reintialize")


    this.canvas1 = document.getElementById('catmATMMixTransactions01234') as HTMLCanvasElement;

    this.data4 = {
      datasets: [{
        tree: [
          { category: 'A', value: 20 },
          { category: 'B', value: 18 },
          { category: 'C', value: 10 },
          { category: 'D', value: 10 },
          { category: 'E', value: 10 },
          { category: 'F', value: 5 },
          { category: 'G', value: 5 },
          { category: 'H', value: 5 },
          { category: 'I', value: 4 },
          { category: 'J', value: 3 },
        ],
        key: 'value',
        groups: ['category'],
        backgroundColor: function (ctx1) {
          return colorFromRaw()[ctx1.index];
        },
        borderWidth: 0,
        padding: 50,
        labels: {
          display: true,
          color: "white",
          font: {
            size: 18,
            family: "Avenir, Segoe UI, arial, sans-serif",
          },
          formatter: function (ctx1) {
            var tlb = ctx1.raw._data.value;
            console.log(tlb, "insikde stgsg")
            //  var tvl = ctx1.raw.v;
            return tlb;
          },

        }
      }]
    }



    this.config2 = new Chart(this.canvas1, {
      type: 'treemap',
      data: this.data4,
      options: {
        layout: {
          padding: 0
        },
        plugins: {
          title: {
            display: true,
            text: 'My treemap chart'
          },
          legend: {
            display: false
          },


        }
      }
    });

    console.log(this.config2, "treemap reintialie")
    console.log(this.data4, "dataset")
    // var ctx1 = canvas1.getContext('2d');
    // const chart = Chart.registry.elements.get('arc');
   


    // this.config2.destroy()



  }



  ngOnDestroy() {
    console.log("destroy")
    this.config2.destroy();
  }

 
  ngAfterViewInit() {

    this.activetab(this.activeTabName);
    // var canvas1 = document.getElementById('catmATMMixTransactions01234') as HTMLCanvasElement;

    // this.data4 = {
    //   datasets: [{
    //     tree: [
    //       { category: 'A', value: 20 },
    //       { category: 'B', value: 18 },
    //       { category: 'C', value: 10 },
    //       { category: 'D', value: 10 },
    //       { category: 'E', value: 10 },
    //       { category: 'F', value: 5 },
    //       { category: 'G', value: 5 },
    //       { category: 'H', value: 5 },
    //       { category: 'I', value: 4 },
    //       { category: 'J', value: 3 },
    //     ],
    //     key: 'value',
    //     groups: ['category'],
    //     backgroundColor: function (ctx1) {
    //       return colorFromRaw()[ctx1.index];
    //     },
    //     borderWidth: 0,
    //     padding: 50,
    //     labels: {
    //       display: true,
    //       color: "white",
    //       font: {
    //         size: 18,
    //         family: "Avenir, Segoe UI, arial, sans-serif",
    //       },
    //       formatter: function (ctx1) {
    //         var tlb = ctx1.raw._data.value;
    //         console.log(tlb, "insikde stgsg")
    //         //  var tvl = ctx1.raw.v;
    //         return tlb;
    //       },

    //     }
    //   }]
    // }



    // this.config2 = new Chart(canvas1, {
    //   type: 'treemap',
    //   data: this.data4,
    //   options: {
    //     layout: {
    //       padding: 0
    //     },
    //     plugins: {
    //       title: {
    //         display: true,
    //         text: 'My treemap chart'
    //       },
    //       legend: {
    //         display: false
    //       },


    //     }
    //   }
    // });

    // console.log(this.config2, "treemap reintialie")
    // console.log(this.data4, "dataset")


  }

  activetab(tab) {
    this.activeTabName = tab;
    this.ccanv = '';
    this.ctxctvh = '';
    // let cdxLabeldptxno = [];
    // let cdyDatadptxno = [];

    switch (tab) {

      case 'posperformance':
        var ctx: any = document.getElementById('cposTxnSelPOSTerminal') as HTMLElement;
        var data = {
          labels: [
            "June 2021", "September 2021", "December 2021", "March 2022", "June 2022"
          ],
          datasets: [
            {
              label: "Cashback",
              data: [64945, 96844, 84316, 92964],
              backgroundColor: "#FF9551",
              borderColor: "#FF9551",
              pointRadius: 0,
              pointBackgroundColor: '',
              pointBorderColor: '',
              pointHoverBackgroundColor: ''
            },
            {
              label: "Purchases",
              data: [45825, 75729, 66231, 31368, 66741],
              backgroundColor: "#42855B",
              borderColor: "#42855B",
              pointRadius: 0,
              pointBackgroundColor: '',
              pointBorderColor: '',
              pointHoverBackgroundColor: '#'
            },
            {
              label: "Refund",
              data: [63481, 25489, 45686, 35209, 30686],
              backgroundColor: "#277BC0",
              borderColor: "#277BC0",
              pointRadius: 0,
              pointBackgroundColor: '',
              pointBorderColor: '',
              pointHoverBackgroundColor: ''

            },
          ],
        };
        var annotation1 = {
          annotations: {

            line1: {
              type: "line",
              xMin: 3,
              xMax: 4,
              yMin: 92964,
              yMax: 46234,
              borderColor: "#FF9551", //e51529 - 2a5ff5
              borderWidth: 2,
              borderDash: [2, 4],
            },

          }, //annotations
        } //annotation


        console.log(data, "performance dta")

        var yaxisTitle = "Transactions Volume"
        this.generateLineCharts(ctx, data, yaxisTitle, annotation1)

        var ctx: any = document.getElementById('cposAvgTxnPOS') as HTMLElement;
        var data = {
          labels: [
            "June 2021", "September 2021", "December 2021", "March 2022", "June 2022"
          ],
          datasets: [
            {
              label: 'Current Week',
              data: [66945, 76844, 60316, 92964],
              backgroundColor: "#FFA500",
              borderColor: '#FFA500',
              pointRadius: 0,
              pointBackgroundColor: '',
              pointBorderColor: '',
              pointHoverBackgroundColor: ''

            },
          ],
        };
        var annotation2 = {
          annotations: {
            line1: {
              type: "line",
              xMin: 3,
              xMax: 4,
              yMin: 92964,
              yMax: 46234,
              borderColor: "#FF9551", //e51529 - 2a5ff5
              borderWidth: 2,
              borderDash: [2, 4],
            }, //line1
            line2: {
              type: "line",
              xMin: 0,
              xMax: 4,
              yMin: 110000,
              yMax: 110000,
              borderColor: "#1CD6CE",
              borderWidth: 1,
              borderDash: [2, 4],
              position: {
                x: "end",
                y: "end",
              },
            }, // line2 
            label1: {
              type: "label",
              content: "Target Average",
              xValue: 0,
              yValue: 112500,
              color: "#aaaaaa",
              position: {
                x: "start",
                y: "center",
              },

            }, // label1
            line3: {
              type: "line",
              xMin: 0,
              xMax: 4,
              yMin: 60000,
              yMax: 60000,
              borderColor: "#D61C4E",
              borderWidth: 1,
              borderDash: [2, 4],
              position: {
                x: "end",
                y: "end",
              },
            }, // line2 
            label2: {
              type: "label",
              content: "Average",
              xValue: 0,
              yValue: 62500,
              color: "#aaaaaa",
              position: {
                x: "start",
                y: "center",
              },

            }, // label2
            box1: {
              type: "box",
              xMin: 0,
              xMax: 80000,
              yMin: 40000,
              yMax: 80000,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }, // box1
            label3: {
              type: "label",
              content: "Minimum",
              xValue: 0,
              yValue: 42000,
              color: "#aaaaaa",
              position: {
                x: "start",
                y: "center",
              },

            }, // label3
            label4: {
              type: "label",
              content: "Maximum",
              xValue: 0,
              yValue: 82000,
              color: "#aaaaaa",
              position: {
                x: "start",
                y: "center",
              },

            }, // label4



          }, //annotations
        } //annotation
        var yaxisTitle = "Transactions"
        this.generateLineCharts(ctx, data, yaxisTitle, annotation2)

        break;
      case 'posfailures':
        var ctx: any = document.getElementById('cposTxnSelPOSTerminalTest') as HTMLElement;
        var data = {
          labels: [
            "May_2018", "May_2019", "May_2020", "May_2021", "May_2022", "May_2023", "May_2024", "May_2025", "May_2026", "May_2027", "May_2028", "May_2029"
          ],
          datasets: [
            {
              label: "Cashback",
              data: [1870,
                340,
                1641,
                280,
                685,
                360,
                390,
                1772,
                450,
                620,
                250,
                1162,
              ],
              backgroundColor: "#FF9551",
              borderColor: "#FF9551",
              pointRadius: 0,
              pointBackgroundColor: '',
              pointBorderColor: '',
              pointHoverBackgroundColor: ''
            },
            {
              label: "Purchases",
              data: [2828,
                2096,
                2904,
                1802,
                3039,
                2958,
                1796,
                1662,
                1904,
                2509,
                2682,
                1741,
              ],
              backgroundColor: "#42855B",
              borderColor: "#42855B",
              pointRadius: 0,
              pointBackgroundColor: '',
              pointBorderColor: '',
              pointHoverBackgroundColor: ''
            },
            {
              label: "Refund",
              data: [138,
                139,
                144,
                147,
                134,
                105,
                109,
                124,
                142,
                123,
                138,
                110,
              ],
              backgroundColor: "#277BC0",
              borderColor: "#277BC0",
              pointRadius: 0,
              pointBackgroundColor: '',
              pointBorderColor: '',
              pointHoverBackgroundColor: ''
            },
          ],
        };
        var annotation3 = {
          annotations3: {

          }, //annotations
        } //annotation
        var yaxisTitle = "Transactions"
        this.generateLineCharts(ctx, data, yaxisTitle, annotation3)



        // this.generatetreemap(canvas1,this.data4)



        break;
      case 'customer transactions':

        this.cdpbusid = document.getElementById('cposSalesValue');
        this.ctxcdpbusid = this.cdpbusid.getContext('2d');
        var cdxLabeldpbusid = [
          "April 2018", "May 2018", "June 2018", "July 2018", "Aug 2018", "Sep 2018", "Oct 2018", "Nov 2018", "Dec 2018", "Jan 2019", "Feb 2019", "March 2019"
        ];
        var cdyDatadpbusid = [
          {
            label: "Debit Card",
            data: [39000, 38000, 40000, 48000, 41000, 39000, 40000, 49000, 40000, 39000, 38000, 45000],
            backgroundColor: "#E1FFEE",
            maxBarThickness: 50,
          },
          {
            label: "Credit Card",
            data: [2000, 8000, 5000, 5000, 2000, 7000, 6000, 5000, 8000, 3000, 5000, 6000,],
            backgroundColor: "#A5C9CA",
            maxBarThickness: 50,
          }

        ];
        var xaxisTitle = "Date"
        var yaxisTitle = "Volume in million"
        this.generateBarCharts(this.ctxcdpbusid, cdxLabeldpbusid, cdyDatadpbusid, xaxisTitle, yaxisTitle);

        this.cdpbusid = document.getElementById('cposSalesValue01');
        this.ctxcdpbusid = this.cdpbusid.getContext('2d');
        var cdxLabeldpbusid = [
          "April 2018", "May 2018", "June 2018", "July 2018", "Aug 2018", "Sep 2018", "Oct 2018", "Nov 2018", "Dec 2018", "Jan 2019", "Feb 2019", "March 2019"
        ];
        var cdyDatadpbusid = [
          {
            label: "Debit Card",
            data: [10000000, 7000000, 8000000, 14000000, 11000000, 8000000, 8000000, 15000000, 9000000, 8000000, 7000000, 12000000,],
            backgroundColor: "#6CC4A1",
            maxBarThickness: 50,
          },
          {
            label: "Credit Card",
            data: [500000, 200000, 300000, 500000, 800000, 600000, 200000, 100000, 300000, 500000, 500000, 600000,],
            backgroundColor: "#277BC0",
            maxBarThickness: 50,
          }
        ];
        var xaxisTitle = "Date"
        var yaxisTitle = "Volume in million"
        this.generateBarCharts(this.ctxcdpbusid, cdxLabeldpbusid, cdyDatadpbusid, xaxisTitle, yaxisTitle);

        var ctx: any = document.getElementById('transVol') as HTMLElement;
        var data = {
          labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],


          datasets: [
            {
              label: 'This Week',
              data: [32000, 45000, 40000, 42000, 48000, 60000],
              backgroundColor: "#7DE5ED",
              borderColor: '#7DE5ED', // Add custom color border (Line)
              pointRadius: 4,
              pointBackgroundColor: '#7DE5ED',
              pointBorderColor: '#7DE5ED',
              pointHoverBackgroundColor: '#7DE5ED'

            },
            {
              label: 'Last Week',
              data: [33000, 51000, 51000, 45000, 43000, 58000, 40000],
              backgroundColor: "#BCE29E",
              borderColor: '#BCE29E',
              pointRadius: 4,
              pointBackgroundColor: '#BCE29E',
              pointBorderColor: '#BCE29E',
              pointHoverBackgroundColor: '#BCE29E'

            }
          ],
        };
        var annotation4 = {
          annotations: {

          }, //annotations
        } //annotation
        var yaxisTitle = "Amount"
        this.generateLineCharts(ctx, data, yaxisTitle, annotation4)

        this.cdpbusid = document.getElementById('netvalue');
        this.ctxcdpbusid = this.cdpbusid.getContext('2d');
        var cdxLabeldpbusid = [
          "April 2018", "May 2018", "June 2018", "July 2018", "Aug 2018", "Sep 2018", "Oct 2018", "Nov 2018", "Dec 2018", "Jan 2019", "Feb_2019", "March_2019"
        ];
        var cdyDatadpbusid = [
          {
            label: 'Master Card',
            data: [8000000, 7000000, 5000000, 12000000, 14000000, 5000000, 6000000, 15000000, 7000000, 6000000, 13000000, 12000000],
            backgroundColor: "#f1f174",
            maxBarThickness: 50,

          },
          {
            label: 'Visa',
            data: [18000000, 20000000, 14000000, 15000000, 15000000, 2800000, 13000000, 7000000, 5000000, 25000000, 16000000, 12000000],
            backgroundColor: "#B3FFAE",
            maxBarThickness: 50,


          },
          {
            label: 'Other',
            data: [1000000, 3000000, 3000000, 5000000, 1000000, 2000000, 2000000, 4000000, 5000000, 5000000, 1000000, 1000000],
            backgroundColor: "#7DE5ED",
            maxBarThickness: 50,

          }
        ];
        var xaxisTitle = "Monthly Report"
        var yaxisTitle = "Amount"
        this.generateBarCharts55(this.ctxcdpbusid, cdxLabeldpbusid, cdyDatadpbusid, xaxisTitle, yaxisTitle);
        this.cdpbusid = document.getElementById('cposSalesValue3');
        this.ctxcdpbusid = this.cdpbusid.getContext('2d');
        var cdxLabeldpbusid = [
          "April 2018", "May 2018", "June 2018", "July 2018", "Aug 2018", "Sep 2018", "Oct 2018", "Nov 2018", "Dec 2018", "Jan 2019", "Feb_2019", "March_2019"
        ];
        var cdyDatadpbusid = [
          {
            label: 'Master Card',
            data: [25000, 14000, 22000, 35000, 17000, 16000, 30000, 24000, 10000, 13000, 28000, 17000],
            backgroundColor: "#7DE5ED",
            maxBarThickness: 50,

          },
          {
            label: 'Visa',
            data: [40000, 28000, 20000, 35000, 25000, 18000, 15000, 30000, 25000, 45000, 38000, 31000,],
            backgroundColor: "#BCE29E",
            maxBarThickness: 50,

          },
          {
            label: 'Other',
            data: [15000, 12000, 8000, 3000, 3000, 5000, 16000, 2000, 3000, 7000, 3000, 6000],
            backgroundColor: "#98A8F8",
            maxBarThickness: 50,

          }
        ];
        var xaxisTitle = "Monthly Report"
        var yaxisTitle = "Amount"
        this.generateBarCharts55(this.ctxcdpbusid, cdxLabeldpbusid, cdyDatadpbusid, xaxisTitle, yaxisTitle);

        break;
      case 'lost revenue':
        this.cdpbusid = document.getElementById('cposSalesValue4');

        this.ctxcdpbusid = this.cdpbusid.getContext('2d');
        var cdxLabeldpbusid = [
          "User Error", "Unavailable Service", "Other", "Card Error", "Account error", "Unsupported Service", "Deposit/Dispense Error", "Data Error"

        ];
        var cdyDatadpbusid = [
          {
            label: "Amount (₹ )",
            data: [380000000, 80000000, 42000000, 20000000, 3000000, 2000000, 500000,],
            backgroundColor: "#6CC4A1",
            maxBarThickness: 50,
          }
        ];
        var xaxisTitle = "Lost Revenue Type"
        var yaxisTitle = "Amount"
        this.generateBarCharts55(this.ctxcdpbusid, cdxLabeldpbusid, cdyDatadpbusid, xaxisTitle, yaxisTitle);
        var ctx: any = document.getElementById('lrot3') as HTMLElement;
        var data = {
          labels: [
            "Jan 2018", "Feb 2018", "March 2018", "April 2018", "May 2018", "June 2018", "July 2018", "Aug 2018", "Sep 2018", "Oct 2018", "Nov 2018", "Dec 2018"
          ],
          datasets: [
            {
              label: "User Error",
              data: [2411712, 2999409, 2831053, 2157259, 1562856, 1179224, 2958059, 1125203, 2688398, 1192069, 3100549, 2680533], // Specify the data values array
              pointRadius: 3,
              borderColor: '#FB2576', // Add custom color border (Line)
              backgroundColor: '#FB2576', // Add custom color background (Points and Fill)
              pointBackgroundColor: '#FB2576',
              pointBorderColor: '#FB2576',
              pointHoverBackgroundColor: '#FB2576'

            },
            {
              label: "Unavailable Service",
              data: [1169281, 1236305, 780151, 596394, 1063379, 539041, 1239308, 818409, 1470297, 899186, 1418623, 569078], // Specify the data values array
              pointRadius: 3,
              borderColor: '#E1FFB1', // Add custom color border (Line)
              backgroundColor: '#E1FFB1', // Add custom color background (Points and Fill)
              pointBackgroundColor: '#E1FFB1',
              pointBorderColor: '#E1FFB1',
              pointHoverBackgroundColor: '#E1FFB1'

            },
            {
              label: 'Other', // Name the series
              data: [363283, 234234, 910234, 811623, 751829, 817326, 619551, 811022, 86102, 92384, 94600, 94416, 73958
              ], // Specify the data values array
              pointRadius: 3,
              borderColor: '#2196f3', // Add custom color border (Line)
              backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
              pointBackgroundColor: '#2196f3',
              pointBorderColor: '#2196f3',
              pointHoverBackgroundColor: '#2196f3'

            },
            {
              label: 'Card Error', // Name the series
              data: [313293, 427100, 321002, 17618, 26679, 12944, 215512, 441175, 1011645, 272017, 317715, 140464], // Specify the data values array
              pointRadius: 3,
              borderColor: '#F5EFE6', // Add custom color border (Line)
              backgroundColor: '#F5EFE6', // Add custom color background (Points and Fill)
              pointBackgroundColor: '#F5EFE6',
              pointBorderColor: '#F5EFE6',
              pointHoverBackgroundColor: '#F5EFE6'

            },
            {
              label: 'Account Error', // Name the series
              data: [1119691, 1032221, 1821217, 1811252, 1216877, 1774212, 1991276, 1421252, 1031254, 1321271, 1129427, 1212822], // Specify the data values array
              pointRadius: 3,
              borderColor: '#FA7070', // Add custom color border (Line)
              backgroundColor: '#FA7070', // Add custom color background (Points and Fill)
              pointBackgroundColor: '#FA7070',
              pointBorderColor: '#FA7070',
              pointHoverBackgroundColor: '#FA7070'
            },
            {
              label: 'Unsupported Service', // Name the series
              data: [411252, 341272, 3461, 2367123, 212359, 3431257, 325124, 312275, 237120, 236124, 231260, 212363], // Specify the data values array
              pointRadius: 3,
              borderColor: '#CDF0EA', // Add custom color border (Line)
              backgroundColor: '#CDF0EA', // Add custom color background (Points and Fill)
              pointBackgroundColor: '#CDF0EA',
              pointBorderColor: '#CDF0EA',
              pointHoverBackgroundColor: '#CDF0EA'
            },
            {
              label: 'Deposit/Dispense Error', // Name the series
              data: [3112341, 412313, 3312314, 312346, 311234, 421234, 411231, 311237, 231231, 341234, 343123, 33912], // Specify the data values array
              pointRadius: 3,
              borderColor: '#FF731D', // Add custom color border (Line)
              backgroundColor: '#FF731D', // Add custom color background (Points and Fill)
              pointBackgroundColor: '#FF731D',
              pointBorderColor: '#FF731D',
              pointHoverBackgroundColor: '#FF731D'

            }
          ],
        };
        var yaxisTitle = "Amount"
        var annotation5 = {
          annotations: {

          }, //annotations
        } //annotation
        this.generateLineCharts(ctx, data, yaxisTitle, annotation5)
        var ctx: any = document.getElementById('lrot2') as HTMLElement;
        var data = {
          labels: [
            "Jan 2018", "Feb 2018", "March 2018", "April 2018", "May 2018", "June 2018", "July 2018", "Aug 2018", "Sep 2018", "Oct 2018", "Nov 2018", "Dec 2018"
          ],
          datasets: [
            {
              label: "User Error",
              data: [2195, 1193, 1509, 2884, 1679, 2704, 1708, 1563, 1616, 3082, 3129, 3498], // Specify the data values array

              borderColor: '#FB2576', // Add custom color border (Line)
              backgroundColor: '#FB2576', // Add custom color background (Points and Fill)
              pointRadius: 3,
              pointBackgroundColor: '#FB2576',
              pointBorderColor: '#FB2576',
              pointHoverBackgroundColor: '#FB2576'
            },
            {
              label: "Unavailable Service",
              data: [752, 695, 410, 428, 670, 644, 691, 467, 715, 495, 429, 642], // Specify the data values array

              borderColor: '#E1FFB1', // Add custom color border (Line)
              backgroundColor: '#E1FFB1', // Add custom color background (Points and Fill)
              pointRadius: 3,
              pointBackgroundColor: '#E1FFB1',
              pointBorderColor: '#E1FFB1',
              pointHoverBackgroundColor: '#E1FFB1'
            },
            {
              label: 'Other',
              data: [1232, 1304, 1129, 1173, 1100, 1218, 2850, 1150, 1245, 1432, 1987, 1290], // Specify the data values array

              borderColor: '#2196f3', // Add custom color border (Line)
              backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
              pointRadius: 3,
              pointBackgroundColor: '#2196f3',
              pointBorderColor: '#2196f3',
              pointHoverBackgroundColor: '#2196f3'
            },
            {
              label: 'Card Error', // Name the series
              data: [230, 193, 236, 118, 237, 123, 299, 283, 184, 135, 184, 136], // Specify the data values array

              borderColor: '#F5EFE6', // Add custom color border (Line)
              backgroundColor: '#F5EFE6', // Add custom color background (Points and Fill)
              pointRadius: 3,
              pointBackgroundColor: '#F5EFE6',
              pointBorderColor: '#F5EFE6',
              pointHoverBackgroundColor: '#F5EFE6'
            },
            {
              label: 'Account Error', // Name the series
              data: [49, 43, 234, 435, 502, 646, 16, 14, 542, 528, 107, 125], // Specify the data values array

              borderColor: '#FA7070', // Add custom color border (Line)
              backgroundColor: '#FA7070', // Add custom color background (Points and Fill)
              pointRadius: 3,
              pointBackgroundColor: '#FA7070',
              pointBorderColor: '#FA7070',
              pointHoverBackgroundColor: '#FA7070'
            },
            {
              label: 'Unsupported Service', // Name the series
              data: [152, 72, 61, 67, 59, 57, 54, 75, 70, 64, 60, 63], // Specify the data values array

              borderColor: '#CDF0EA', // Add custom color border (Line)
              backgroundColor: '#CDF0EA', // Add custom color background (Points and Fill)
              pointRadius: 3,
              pointBackgroundColor: '#CDF0EA',
              pointBorderColor: '#CDF0EA',
              pointHoverBackgroundColor: '#CDF0EA'
            },
            {
              label: 'Deposit/Dispense Error', // Name the series
              data: [341, 413, 334, 346, 314, 424, 411, 317, 231, 344, 343, 339], // Specify the data values array

              borderColor: '#FF731D', // Add custom color border (Line)
              backgroundColor: '#FF731D', // Add custom color background (Points and Fill)
              pointRadius: 3,
              pointBackgroundColor: '#FF731D',
              pointBorderColor: '#FF731D',
              pointHoverBackgroundColor: '#FF731D'
            }
          ],
        };
        var yaxisTitle = "Amount"
        var annotation6 = {
          annotations: {

          }, //annotations
        } //annotation
        this.generateLineCharts(ctx, data, yaxisTitle, annotation6)



    }

  }




  generateLineCharts(ctx, data, yaxisTitle, annotation) {
    console.log("UPI G1");

    var chart = new Chart(ctx, {
      //   type: 'line',
      //  data: data,
      //   options: options,

      type: 'line',
      data: data,



      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "bottom"
          },


          annotation: annotation


        }, // plugins

        scales: {
          y: {
            // display: true,
            title: {
              text: yaxisTitle,
              display: true,
              color: this.title_ylabel,
              font: {
                size: 14,
                // weight: "bold",
                family: this.vrchartfont,
                // family: "Segoe UI, arial, sans-serif",
              },
            },
            beginAtZero: true,
            // ticks: {
            //   color: "transparent",
            //   // stepSize: 5000,
            //   font: {
            //     family: this.vrchartfont,
            //   },
            // },
            grid: {
              borderColor: "transparent",
              color: this.ygrid_bordercolor,
            },
          }, // y
          x: {
            ticks: {
              color: this.xtick_color,
              font: {
                family: this.vrchartfont,
              },
            },
            grid: {
              borderColor: this.xgrid_bordercolor,
              color: this.xgrid_bordercolor,
            },
          }, // x
        }, // scales

      }, // option 
    });


  }


  generateBarCharts(ctxctvh, cdxLabeldptxno, cdyDatadptxno, xaxisTitle, yaxisTitle) {
    var cadphd = new Chart(ctxctvh, {
      type: 'bar',
      data: {
        labels: cdxLabeldptxno,
        datasets: cdyDatadptxno,
      },
      options: {
        // responsive: true,
        // maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              padding: 10,
              color: this.legend_textcolor,
              font: {
                family: this.vrchartfont,
              },
            }, // labels 
          },

          // title: {
          //   display: false,
          //   text: "Technical Decline",
          //   color: this.title_charttitle,
          //   padding: {
          //     bottom: 15,
          //   },
          //   font: {
          //     family: this.vrchartfont,
          //     size: 20,
          //     weight: "500",
          //   },
          // }, // title

          datalabels: {
            color: this.dlbls_barvalue,
            align: "top",
            anchor: "end",
            font: {
              family: this.vrchartfont,
            },
            formatter: function (val, ctx) {
              // 	return "$ " + thousands_separators(val);
              return thousands_separators(val);
            },
          }, // datalabels 

          tooltip: {
            position: "nearest",
            xAlign: "center",
            yAlign: "bottom",
            bodyFont: {
              family: this.vrchartfont,
            },
            callbacks: {
              label: function (cntx) {
                //console.log(cntx);
                return " " + thousands_separators(cntx.parsed.y);
              },
              title: function (cntx) {
                // console.log('title ',cntx);
                return "Channel - " + cntx[0].label;
              },
            },
            padding: 10,
          }, // tooltip

        }, // plugins 

        scales: {
          y: {
            beginAtZero: true,
            stacked: true,
            title: {
              text: yaxisTitle,
              display: true,
              color: this.title_ylabel,
              font: {
                size: 14,
                // weight: "bold",
                family: this.vrchartfont,
                // family: "Segoe UI, arial, sans-serif",
              },
            }, // title 
            ticks: {
              color: this.ytick_color,
              font: {
                family: this.vrchartfont,
              },
            }, // ticks
            grid: {
              borderColor: this.ygrid_bordercolor,
              color: this.ygrid_color,
            }, // grid
          }, // y
          x: {
            stacked: true,
            title: {
              text: xaxisTitle,
              display: true,
              color: this.title_xlabel,
              font: {
                size: 14,
                family: this.vrchartfont,
              }, // title
            },
            ticks: {
              color: this.xtick_color,
              font: {
                family: this.vrchartfont,
              },
            }, // ticks
            grid: {
              borderColor: "transparent",
              color: "transparent",
            }, // grid
          }, // x
        }, // scales 

      }, // options 
    });
  }

  generateBarCharts55(ctxctvh, cdxLabeldptxno, cdyDatadptxno, xaxisTitle, yaxisTitle) {
    var cadphd = new Chart(ctxctvh, {
      type: 'bar',
      data: {
        labels: cdxLabeldptxno,
        datasets: cdyDatadptxno,
      },
      options: {
        // responsive: true,
        // maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              padding: 10,
              color: this.legend_textcolor,
              font: {
                family: this.vrchartfont,
              },
            }, // labels 
          },

          // title: {
          //   display: false,
          //   text: "Technical Decline",
          //   color: this.title_charttitle,
          //   padding: {
          //     bottom: 15,
          //   },
          //   font: {
          //     family: this.vrchartfont,
          //     size: 20,
          //     weight: "500",
          //   },
          // }, // title

          datalabels: {
            color: this.dlbls_barvalue,
            align: "top",
            anchor: "end",
            font: {
              family: this.vrchartfont,
            },
            formatter: function (val, ctx) {
              // 	return "$ " + thousands_separators(val);
              return thousands_separators(val);
            },
          }, // datalabels 

          tooltip: {
            position: "nearest",
            xAlign: "center",
            yAlign: "bottom",
            bodyFont: {
              family: this.vrchartfont,
            },
            callbacks: {
              label: function (cntx) {
                //console.log(cntx);
                return " " + thousands_separators(cntx.parsed.y);
              },
              title: function (cntx) {
                // console.log('title ',cntx);
                return "Channel - " + cntx[0].label;
              },
            },
            padding: 10,
          }, // tooltip

        }, // plugins 

        scales: {
          y: {
            beginAtZero: true,
            title: {
              text: yaxisTitle,
              display: true,
              color: this.title_ylabel,
              font: {
                size: 14,
                // weight: "bold",
                family: this.vrchartfont,
                // family: "Segoe UI, arial, sans-serif",
              },
            }, // title 
            ticks: {
              color: this.ytick_color,
              font: {
                family: this.vrchartfont,
              },
            }, // ticks
            grid: {
              borderColor: this.ygrid_bordercolor,
              color: this.ygrid_color,
            }, // grid
          }, // y
          x: {
            title: {
              text: xaxisTitle,
              display: true,
              color: this.title_xlabel,
              font: {
                size: 14,
                family: this.vrchartfont,
              }, // title
            },
            ticks: {
              color: this.xtick_color,
              font: {
                family: this.vrchartfont,
              },
            }, // ticks
            grid: {
              borderColor: "transparent",
              color: "transparent",
            }, // grid
          }, // x
        }, // scales 

      }, // options 
    });
  }








}
function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}



function colorFromRaw() {
  var newArrayGotIt = [];
  for (var zi = 0; zi < 10; zi++) {
    newArrayGotIt.push(adjustcolorme("#6CC4A1", -10 * zi));
  }
  return newArrayGotIt;
}

function adjustcolorme(color, amount) {
  return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

