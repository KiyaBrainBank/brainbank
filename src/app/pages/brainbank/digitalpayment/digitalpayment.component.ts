import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-digitalpayment',
  templateUrl: './digitalpayment.component.html',
  styleUrls: ['./digitalpayment.component.sass']
})
export class DigitalpaymentComponent implements OnInit {

  tablist = ['upi', 'imps', 'rtgs', 'neft'];
  activeTabName: string = 'upi';
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
  showBD : boolean = true;
  showNonBD : boolean = false;
  showLastYear : boolean = true;
  showThisYear : boolean = false;
  cdptechd1: any;
  ctxcdptechd1: any;
  cdptxno1: any;
  ctxdptxno1: any;
  ccanv: any;
  ctxctvh: any;



  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.activetab(this.activeTabName);
    this.onBankDeclineBD('bd');

    this.cdpbusid = document.getElementById('dpBusiDecline');
    this.ctxcdpbusid = this.cdpbusid.getContext('2d');

    var cdxLabeldpbusid = [
      "Account Does Not Exist (Remitter)", "Number Or Pin Tries Exceeded", "Invalid UPI Pin", "Invalid ATM Pin", "Invalid/Incorrect OTP", "UPI Pin Not Set BY Customer"
    ];

    var cdyDatadpbusid = [
      {
        label: "For The Day Count",
        backgroundColor: "#DF7861",
        data: [ 534253, 269717, 249946, 20248, 19547, 14475 ],
        maxBarThickness: 50,
      },
      {
        label: "Month To Date Count",
        backgroundColor: "#6CC4A1",
        data: [ 7454062, 3968664, 3867326, 287699, 271045, 213153 ],
        maxBarThickness: 50,
      }
    ];
    this.generateBarCharts(this.ctxcdpbusid, cdxLabeldpbusid, cdyDatadpbusid);
    // this.onLastYear('lastyear');
    //this.createChartdpBusiDecline();
  }

  activetab(tab) {
    this.activeTabName = tab;
    this.ccanv = '';
    this.ctxctvh = '';
    let cdxLabeldptxno = [];
    let cdyDatadptxno = [];
    
    switch (tab) {   
      case 'upi': 
      console.log("upi click");
            this.ccanv = document.getElementById('dpTransOverview');
            this.ctxctvh = this.ccanv.getContext('2d');
           
            cdxLabeldptxno = [
              "Jul 21", "Aug 21", "Sep 21", "Oct 21", "Nov 21", "Dec 21",
              "Jan 22", "Feb 22", "Mar 22", "Apr 22", "May 22", "Jun 22",
            ];
            cdyDatadptxno = [
              10, 20, 30, 20, 10, 20,
              40, 80, 90, 20, 20, 30,
            ];
            this.generateLineCharts( this.ctxctvh , cdxLabeldptxno , cdyDatadptxno);
            // this.createChartdpTxnOverview();  
            break;
      case 'imps':
        console.log("imps click");
            break;
      case 'rtgs':
        break;
      case 'neft':      
        break;
    }

  }

  generateLineCharts(ctxctvh,cdxLabeldptxno, cdyDatadptxno) {
    console.log("RRRRR");
    
    var dpTxnoChart = new Chart(ctxctvh, {
      type:  'line',
      data: {
        labels: cdxLabeldptxno, 
        datasets: [{
          label: "New Chart",
          data: cdyDatadptxno,
          // backgroundColor: ["red"],
          borderColor: "rgb(106, 114, 191)",
          // pointBackgroundColor: "red",
          // pointBackgroundColor: "transparent",
          pointRadius: 0,
          tension: 0.1,
          fill: {
            target: "origin",
            above: "rgba(106, 114, 191, 0.2)",
            // below: "red",
          },
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: "Transaction Overview",
            color: this.title_charttitle,
            align: "start",
            padding: {
              bottom: 5,
            },
            font: {
              family: this.vrchartfont,
              size: 20,
              weight: "500",
            },
          }, // title
          subtitle: {
            display: false,
            text: "Number of Transactions",
            color: this.title_charttitle,
            align: "start",
            padding: {
              bottom: 15,
            },
            font: {
              family: this.vrchartfont,
              size: 14,
              // weight: "500",
            },
          }, // subtitle

          datalabels: {
            display: false,
          }, // datalabels 

        }, // plugins

        scales: {
          y: {
            // display: false,
            beginAtZero: true,
            ticks: {
              color: "transparent",
              // stepSize: 5000,
              font: {
                family: this.vrchartfont,
              },
            },
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

  generateBarCharts(ctxctvh,cdxLabeldptxno, cdyDatadptxno) {
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
              text: "Count",
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
              text: "CBS",
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

  onBankDeclineBD(value){
    console.log("value",value);
    var chartExist = Chart.getChart(this.cdptechd); // <canvas> id
    if (chartExist != undefined)  
      chartExist.destroy(); 
    var chartExist1 = Chart.getChart(this.cdptechd1); // <canvas> id
      if (chartExist1 != undefined)  
        chartExist1.destroy(); 
    
    if(value == 'bd'){
      this.showBD =true;
      this.showNonBD=false;
      // this.createChartdpTechDecline()
      this.cdptechd = document.getElementById('dpTechDecline');
      this.ctxcdptechd = this.cdptechd.getContext('2d');
  
      var cdxLabeldptechd = [
        "Invalid Transaction","Unable To Process Due To Remitter Side Issue","Response Code Error","Requath Time Out For Pay", "PSP Not Available"
      ];
  
      var cdyDatadptechd = [
        {
          label: "For The Day Count",
          backgroundColor: "#277BC0",
          data: [ 30445, 26, 558, 129, 32 ],
          maxBarThickness: 50,
        },
        {
          label: "Month To Date Count",
          backgroundColor: "#FFB200",
          data: [ 532460, 53822, 6377, 2271, 173 ],
          maxBarThickness: 50,
        }
      ];
      this.generateBarCharts( this.ctxcdptechd , cdxLabeldptechd , cdyDatadptechd);
     }else{
      this.showBD =false;
      this.showNonBD=true;
      this.cdptechd1 = document.getElementById('dpTechDecline2');
      this.ctxcdptechd1 = this.cdptechd1.getContext('2d');
  
      var cdxLabeldptechd = [
        "No Response from CBS","Remitter CBS Offline"
      ];
  
      var cdyDatadptechd = [
        {
          label: "For The Day Count",
          backgroundColor: "#277BC0",
          data: [ 741, 100837 ],
          maxBarThickness: 100,
        },
        {
          label: "Month To Date Count",
          backgroundColor: "#FFB200",
          data: [ 83, 23148 ],
          maxBarThickness: 100,
        }
      ];
      this.generateBarCharts( this.ctxcdptechd1 , cdxLabeldptechd , cdyDatadptechd);
      //this.createChartdpTechDecline2()
    } 
    
  }

  onLastYear(value) {
    console.log('last year value', value);
    var chartExist = Chart.getChart(this.ccanv); // <canvas> id
    if (chartExist != undefined)  
      chartExist.destroy(); 
    var chartExist1 = Chart.getChart(this.cdptxno1); // <canvas> id
      if (chartExist1 != undefined)  
        chartExist1.destroy()
    if(value == 'lastyear') {
      this.showLastYear = true;
      this.showThisYear = false;
      this.ccanv = document.getElementById('dpTransOverview');
      this.ctxctvh = this.ccanv.getContext('2d');
     
      cdxLabeldptxno = [
      "Jul 21", "Aug 21", "Sep 21", "Oct 21", "Nov 21", "Dec 21",
      "Jan 22", "Feb 22", "Mar 22", "Apr 22", "May 22", "Jun 22",
      ];
      cdyDatadptxno = [
      10, 20, 30, 20, 10, 20,
      40, 80, 90, 20, 20, 30,
      ];
      this.generateLineCharts( this.ctxctvh , cdxLabeldptxno , cdyDatadptxno);
 
      //this.createChartdpTxnOverview()
    } else {
      this.showLastYear = false;
      this.showThisYear = true;
      console.log("Chart 2 - Transaction Overview");
      this.cdptxno1 = document.getElementById("dpTransOverview2");
      this.ctxdptxno1 = this.cdptxno1.getContext("2d");
  
      var cdxLabeldptxno = [
        "Jul 21", "Aug 21", "Sep 21", "Oct 21", "Nov 21", "Dec 21",
        "Jan 22", "Feb 22", "Mar 22", "Apr 22", "May 22", "Jun 22",
      ];
      var cdyDatadptxno = [
                  10, 20, 30, 20, 30, 20,
        40, 60, 70, 30, 20, 30,
      ];
      this.generateLineCharts( this.ctxdptxno1 , cdxLabeldptxno , cdyDatadptxno);
      // this.createChartdpTxnOverview2();
    }
  }

}


function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");

}