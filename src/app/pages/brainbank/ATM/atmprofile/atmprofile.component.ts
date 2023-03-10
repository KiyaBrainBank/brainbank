import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { color as Color } from 'chart.js/helpers';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';


Chart.register(TreemapController, TreemapElement);
@Component({
  selector: 'app-atmprofile',
  templateUrl: './atmprofile.component.html',
  styleUrls: ['./atmprofile.component.sass']
})
export class AtmprofileComponent implements OnInit {


  
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


    var canvas2:any = '';
    canvas2 = document.getElementById('catmATMMixTransactions02') as HTMLCanvasElement;
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

  this.generatetreemap(canvas2,data5)
   



    this.cdpbusid = document.getElementById('atmProfileTransactionVol');
    this.ctxcdpbusid = this.cdpbusid.getContext('2d');

    var cdxLabeldpbusid = [
      "TERM0189", "TERM0181", "TERM0182", "TERM0185", "TERM0180"
    ];

    var cdyDatadpbusid = [
      {
				label: "Debit Card",
				data: [66128,115738,123480,23000,138000],
				backgroundColor: "#F0FF42",
				maxBarThickness: 50,
			}

    ];
    var xaxisTitle = ""
    var yaxisTitle = ""
    this.generateBarCharts(this.ctxcdpbusid, cdxLabeldpbusid, cdyDatadpbusid, xaxisTitle, yaxisTitle);

    
    this.cdpbusid = document.getElementById('noOfTrans');
    this.ctxcdpbusid = this.cdpbusid.getContext('2d');

    var cdxLabeldpbusid = [
      "TERM0189", "TERM0181", "TERM0182", "TERM0185"

    ];

    var cdyDatadpbusid = [
      {
				label: "Withdraw",
				data: [1189647,2234871,2485404,464940],
				backgroundColor: "#004c6d",
				maxBarThickness:50,
			},
            {
				label: "Deposit",
				data: [1579986,2800170,2511000,486000],
				backgroundColor: "#d8ffff",
				maxBarThickness: 50,
			}

    ];
    var xaxisTitle = ""
    var yaxisTitle = ""
    this.generateBarCharts55(this.ctxcdpbusid, cdxLabeldpbusid, cdyDatadpbusid, xaxisTitle, yaxisTitle);

    
    this.cdpbusid = document.getElementById('trc');
    this.ctxcdpbusid = this.cdpbusid.getContext('2d');

    var cdxLabeldpbusid = [
      "TERM0189", "TERM0181", "TERM0182", "TERM0185"


    ];

    var cdyDatadpbusid = [
      {
				label: "Customer",
				data: [18774,23000,35000,29999],
				backgroundColor: "#00ffff",
				maxBarThickness: 50,
			},
            {
				label: "Non Customer - Patner",
				data: [33682,44000,53000,30000],
				backgroundColor: "#004c6d",
				maxBarThickness: 50,
			},
            {
				label: "Non Customer - Other",
				data: [34977,40000,60000,40000],
				backgroundColor: "#00b3cf",
				maxBarThickness: 50,
			}

    ];
    var xaxisTitle = ""
    var yaxisTitle = ""
    this.generateBarCharts55(this.ctxcdpbusid, cdxLabeldpbusid, cdyDatadpbusid, xaxisTitle, yaxisTitle);

    
    this.cdpbusid = document.getElementById('Noq');
    this.ctxcdpbusid = this.cdpbusid.getContext('2d');

    var cdxLabeldpbusid = [
      "TERM0189", "TERM0181"



    ];

    var cdyDatadpbusid = [
      {
        label: "Queue Length",
        data: [323, 1940],
        backgroundColor: "#d45087",
        maxBarThickness: 50,
    }

    ];
    var xaxisTitle = ""
    var yaxisTitle = ""
    this.generateBarCharts(this.ctxcdpbusid, cdxLabeldpbusid, cdyDatadpbusid, xaxisTitle, yaxisTitle);


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
            stacked: true,

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