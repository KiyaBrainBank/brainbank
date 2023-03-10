import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { color as Color } from 'chart.js/helpers';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';


Chart.register(TreemapController, TreemapElement);
@Component({
  selector: 'app-atmplacement',
  templateUrl: './atmplacement.component.html',
  styleUrls: ['./atmplacement.component.sass']
})
export class AtmplacementComponent implements OnInit {

  
  
  cdptxno: any;
  ctxdptxno: any;
  vrchartfont = "Avenir, Segoe UI, arial, sans-serif";

  dlbls_barvalue = "#dddddd";
  title_charttitle = "white";
  title_ylabel = "white";
  title_xlabel = "white";

  legend_textcolor = "#dddddd";

  ygrid_bordercolor = "#313e55";
  ygrid_color = "#313e55";
  xgrid_bordercolor = "#313e55";
  xgrid_color = "#313e55";

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
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    
    var canvas3:any = '';
    canvas3 = document.getElementById('catmATMMixTransactions02') as HTMLCanvasElement;
    // var ctx1 = canvas1.getContext('2d');
    let data5:any = {};
    data5 = {
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

          backgroundColor: function(ctx1) {
            return colorFromRaw()[ctx1.index];
          },
          labels: {
              display: true,
              color: "white",
              font: {
                  size: 18,
                  family: "Avenir, Segoe UI, arial, sans-serif",
              },
              // formatter: function(ctx1) {
              //     var tlb = ctx1.raw._data.category;
              //   var tvl = ctx1.raw.v;
              //     return tlb;
              // },
          }
      }]
  }

  this.generatetreemap(canvas3,data5)
    
    var canvas4:any = '';
    canvas4 = document.getElementById('catmATMMixTransactions03') as HTMLCanvasElement;
    // var ctx1 = canvas1.getContext('2d');
    let data6:any = {};
    data6 = {
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

          backgroundColor: function(ctx1) {
            return colorFromRaw()[ctx1.index];
          },
          labels: {
              display: true,
              color: "white",
              font: {
                  size: 18,
                  family: "Avenir, Segoe UI, arial, sans-serif",
              },
              // formatter: function(ctx1) {
              //     var tlb = ctx1.raw._data.category;
              //   var tvl = ctx1.raw.v;
              //     return tlb;
              // },
          }
      }]
  }

  this.generatetreemap(canvas4,data6)

    this.cdpbusid = document.getElementById('Noq1');
    this.ctxcdpbusid = this.cdpbusid.getContext('2d');

    var cdxLabeldpbusid = [
      "TERM0189", "TERM0181",
      "TERM0182", "TERM0180",
    ];

    var cdyDatadpbusid = [
      {
        label: "Queue Length",
        data: [2399, 35,1750,1760],
        backgroundColor: "#d45087",
        maxBarThickness: 50,
    }

    ];
    var xaxisTitle = ""
    var yaxisTitle = ""
    this.generateBarCharts(this.ctxcdpbusid, cdxLabeldpbusid, cdyDatadpbusid, xaxisTitle, yaxisTitle);

    var ctx: any = document.getElementById('atmPlacementTransactionVol') as HTMLElement;
    var data = {
      labels: [
        "Jun 2021", "July 2021", "Aug 2021", "Sep 2021", "Oct 2021"


      ],
      datasets: [
        {
          label: "Avg transaction per month",
          data: [7000,6000,4000,6500,3000],
          backgroundColor: "#F0FF42",
          maxBarThickness: 20,
          borderColor:"#F0FF42",
          pointBackgroundColor: '#F0FF42',
              pointBorderColor: '#F0FF42',
              pointHoverBackgroundColor: '#F0FF42'
        }
      ],
    };
    var yaxisTitle = ""
    this.generateLineCharts(ctx, data, yaxisTitle)

 
    


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
          title: {
            display: false,
            text: "Technical Decline",
            color: this.title_charttitle,
            padding: {
              bottom: 15,
            },
            font: {
              family: this.vrchartfont,
              size: 20,
              weight: "500",
            },
          }, // title

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

  
  generateLineCharts(ctx, data, yaxisTitle) {
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
          // title: {
          //   display: false,
          //   text: "Transaction Overview",
          //   color: this.title_charttitle,
          //   align: "start",
          //   padding: {
          //     bottom: 5,
          //   },
          //   font: {
          //     family: this.vrchartfont,
          //     size: 20,
          //     weight: "500",
          //   },
          // }, // title
          // subtitle: {
          //   display: false,
          //   text: "Number of Transactions",
          //   color: this.title_charttitle,
          //   align: "start",
          //   padding: {
          //     bottom: 15,
          //   },
          //   font: {
          //     family: this.vrchartfont,
          //     size: 14,
          //     // weight: "500",
          //   },
          // }, // subtitle

          // datalabels: {
          //   display: false,
          // }, // datalabels 

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

  generatetreemap(canvas2,data5){
    const config =  new Chart( canvas2,{
      type: 'treemap',
      data: data5,
      options: {
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
  return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}
