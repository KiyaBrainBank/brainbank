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

    this.activetab(this.activeTabName);
    this.onBankDeclineBD('bd');

    this.cdpbusid = document.getElementById('dpBusiDecline');
    this.ctxcdpbusid = this.cdpbusid.getContext('2d');

    var cdxLabeldpbusid = [
      "Account Does Not Exist (Remitter)", "Number Or Pin Tries Exceeded", "Invalid UPI Pin", "Invalid ATM Pin", "Invalid/Incorrect OTP", "UPI Pin Not Set BY Customer"
    ];

    var cdyDatadpbusid = [
      {
        text: "dynamic dta",
        label: "For The Day Count",
        backgroundColor: "#DF7861",
        data: [534253, 269717, 249946, 20248, 19547, 14475],
        maxBarThickness: 50,
      },
      {
        label: "Month To Date Count",
        backgroundColor: "#6CC4A1",
        data: [7454062, 3968664, 3867326, 287699, 271045, 213153],
        maxBarThickness: 50,
      }

    ];
    var xaxisTitle = "Error Type"
    var yaxisTitle = "Count"
    this.generateBarCharts(this.ctxcdpbusid, cdxLabeldpbusid, cdyDatadpbusid, xaxisTitle, yaxisTitle);

    // for imps

  }

  activetab(tab) {
    this.activeTabName = tab;
    this.ccanv = '';
    this.ctxctvh = '';
    // let cdxLabeldptxno = [];
    // let cdyDatadptxno = [];

    switch (tab) {
      case 'upi':
        console.log("upi click");
        this.ccanv = document.getElementById('dpTransOverview');
        this.ctxctvh = this.ccanv.getContext('2d');

        this.cdxLabeldptxno = [
          "Jul 21", "Aug 21", "Sep 21", "Oct 21", "Nov 21", "Dec 21",
          "Jan 22", "Feb 22", "Mar 22", "Apr 22", "May 22", "Jun 22",
        ];
        this.cdyDatadptxno = [
          20, 20, 30, 20, 10, 20,
          40, 80, 90, 20, 20, 30,
        ];
        this.generateLineCharts(this.ctxctvh, this.cdxLabeldptxno, this.cdyDatadptxno);
        // this.createChartdpTxnOverview();  
        break;
      case 'imps':
        this.cdpbusid = document.getElementById('dpTransOverview4');
        this.ctxcdpbusid = this.cdpbusid.getContext('2d');
        var cdxLabeldpbusid = [

          "1-AUG", "2-AUG", "3-AUG", "4-AUG", "5-AUG", "5-AUG", "6-AUG", "7-AUG", "8-AUG", "9-AUG", "10-AUG", "11-AUG", "12-AUG", "13-AUG", "14-AUG", "15-AUG", "16-AUG", "17-AUG", "18-AUG", "19-AUG", "20-AUG", "22-AUG", "22-AUG", "23-AUG",
          "24-AUG", "25-AUG", "26-AUG", "27-AUG", "28-AUG", "29-AUG", "30-AUG", "31-AUG"
        ];

        var cdyDatadpbusid = [
          {
            label: "Transactions Overview",
            backgroundColor: "#6a72bf",
            data: [
              4299, 3931, 3683, 3382, 2155, 4232, 4056, 4152, 3135, 3727, 4218, 2192, 4309, 4620, 2372, 4278, 2955, 4096, 2305, 4373, 4393, 2599, 3829, 4122, 3132, 2041, 4138, 4038, 4092, 4157, 4623
            ],

            maxBarThickness: 50,
          }

        ];
        var xaxisTitle = "Date"
        var yaxisTitle = "Count"

        this.generateBarCharts(this.ctxcdpbusid, cdxLabeldpbusid, cdyDatadpbusid, xaxisTitle, yaxisTitle);
        var ctx: any = document.getElementById('dpTransOverview9') as HTMLElement;
        var data = {
          labels: ["1-AUG", "2-AUG", "3-AUG", "4-AUG", "5-AUG", "5-AUG", "6-AUG", "7-AUG", "8-AUG", "9-AUG", "10-AUG", "11-AUG", "12-AUG", "13-AUG", "14-AUG", "15-AUG", "16-AUG", "17-AUG", "18-AUG", "19-AUG", "20-AUG", "22-AUG", "22-AUG", "23-AUG",
            "24-AUG", "25-AUG", "26-AUG", "27-AUG", "28-AUG", "29-AUG", "30-AUG", "31-AUG"],
          datasets: [
            {
              label: 'Technical Decline',
              data: [395, 130, 468, 100, 203, 149, 147, 490, 178, 49, 265, 171, 55, 200, 138, 165, 59, 201, 128, 84, 450, 166, 377, 51, 107, 168, 179, 76, 187, 120, 904],
              backgroundColor: '#ffb200',
              borderColor: '#ffb200',
              fill: false,
              lineTension: 0,
              radius: 4,
              pointBackgroundColor: '#ffb200',
              pointBorderColor: '#ffb200',
              pointHoverBackgroundColor: '#ffb200'
            }

          ],
        };
        var yaxisTitle = "Count"
        this.generateLineCharts55(ctx, data, yaxisTitle);
        var ctx: any = document.getElementById('impsBusiDec') as HTMLElement;
        var data = {
          labels: ["1-AUG", "2-AUG", "3-AUG", "4-AUG", "5-AUG", "5-AUG", "6-AUG", "7-AUG", "8-AUG", "9-AUG", "10-AUG", "11-AUG", "12-AUG", "13-AUG", "14-AUG", "15-AUG", "16-AUG", "17-AUG", "18-AUG", "19-AUG", "20-AUG", "22-AUG", "22-AUG", "23-AUG",
            "24-AUG", "25-AUG", "26-AUG", "27-AUG", "28-AUG", "29-AUG", "30-AUG", "31-AUG"],
          datasets: [
            {
              label: 'Bussiness Decline',
              data: [610, 584, 540, 533, 287, 602, 540, 525, 507, 564, 558, 348, 575, 670, 171, 249, 537, 418, 622, 249, 774, 201, 700, 388, 760, 651, 583, 330, 617, 927, 764], // Specify the data values array

              backgroundColor: '#2196f3',
              borderColor: '#2196f3',
              fill: false,
              lineTension: 0,
              radius: 4,
              pointBackgroundColor: '#2196f3',
              pointHoverBackgroundColor: '#2196f3',
              pointBorderColor: '#2196f3',

            }

          ],
        };
        var yaxisTitle = "Count"
        this.generateLineCharts55(ctx, data, yaxisTitle);
        break;
      case 'rtgs':
        console.log("RTGS");

        this.cdpbusid = document.getElementById('rtgsVolume');
        this.ctxcdpbusid = this.cdpbusid.getContext('2d');
        var cdxLabeldpbusid = [
          "Jun_21", "Jul_21", "Aug_21", "Sep_21", "Oct_21", "Nov_21", "Dec_21", "Jan_22", "Feb_22", "Mar_22", "Apr_22", "May_22", "Jun_22"

        ];
        var cdyDatadpbusid = [
          {
            label: "RTGS volume Trend",
            backgroundColor: "#6cc4a1",
            data: [
              15.41, 16.77, 16.65, 17.46, 18.41, 17.21, 19.28, 18.13, 18.03, 23, 19.53, 19.57, 19.44

            ],
            maxBarThickness: 50,
          }

        ];
        var xaxisTitle = "Date"
        var yaxisTitle = "Volume in million"
        this.generateBarCharts(this.ctxcdpbusid, cdxLabeldpbusid, cdyDatadpbusid, xaxisTitle, yaxisTitle);
        this.cdpbusid = document.getElementById('rtgsAvgVol2');
        this.ctxcdpbusid = this.cdpbusid.getContext('2d');
        var cdxLabeldpbusid = [
          "Jun 21", "Jul 21", "Aug 21", "Sep 21", "Oct 21", "Nov 21", "Dec 21", "Jan 22", "Feb 22", "Mar 22", "Apr 22", "May 22", "Jun 22"

        ];

        var cdyDatadpbusid = [
          {
            label: "Average Per Day Volume",
            backgroundColor: "#6a72bf",
            data: [
              0.51, 0.54, 0.54, 0.58, 0.59, 0.57, 0.62, 0.58, 0.63, 0.77, 0.65, 0.63, 0.65

            ],

            maxBarThickness: 50,
          }

        ];
        var xaxisTitle = "Date"
        var yaxisTitle = "Avg volume in million"

        this.generateBarCharts(this.ctxcdpbusid, cdxLabeldpbusid, cdyDatadpbusid, xaxisTitle, yaxisTitle);
        break;
      case 'neft':
        console.log("NEFT")

        this.cdpbusid = document.getElementById('NEFTVolTren');
        this.ctxcdpbusid = this.cdpbusid.getContext('2d');
        var cdxLabeldpbusid = [
          "Jun 21", "Jul 21", "Aug 21", "Sep 21", "Oct 21", "Nov 21", "Dec 21", "Jan 22", "Feb 22", "Mar 22", "Apr 22", "May 22", "Jun 22"
        ];

        var cdyDatadpbusid = [
          {
            label: "NEFT Volume Trend",
            backgroundColor: "#6cc4a1",
            data: [

              9.74, 10.23, 10.38, 11.2, 11.53, 11.31, 12.14, 11.71, 12.75, 14.38, 12.46, 12.3, 13.41
            ],

            maxBarThickness: 50,
          }

        ];
        var xaxisTitle = "Date"
        var yaxisTitle = " Volume in million"
        this.generateBarCharts(this.ctxcdpbusid, cdxLabeldpbusid, cdyDatadpbusid, xaxisTitle, yaxisTitle);

        this.cdpbusid = document.getElementById('neftAvgPerDayVol');
        this.ctxcdpbusid = this.cdpbusid.getContext('2d');
        var cdxLabeldpbusid = [
          "Jun 21", "Jul 21", "Aug 21", "Sep 21", "Oct 21", "Nov 21", "Dec 21", "Jan 22", "Feb 22", "Mar 22", "Apr 22", "May 22", "Jun 22"

        ];

        var cdyDatadpbusid = [
          {
            label: "Average Per Day Volume",
            backgroundColor: "#277bc0",
            data: [
              292.3, 317, 321.9, 336, 357.4, 339.4, 376.3, 362.9, 363.3, 431.4, 373.8, 381.3, 402.2

            ],

            maxBarThickness: 50,
          }

        ];
        var xaxisTitle = "Date"
        var yaxisTitle = " Volume in million"
        this.generateBarCharts(this.ctxcdpbusid, cdxLabeldpbusid, cdyDatadpbusid, xaxisTitle, yaxisTitle);


        var ctx: any = document.getElementById('neftGrwper') as HTMLElement;
        var data = {
          labels: ["Jun 21", "Jul 21", "Aug 21", "Sep 21", "Oct 21", "Nov 21", "Dec 21", "Jan 22", "Feb 22", "Mar 22", "Apr 22", "May 22", "Jun 22"],

          datasets: [
            {
              label: 'NEFT GROWTH PERCENTAGE',
              data: [8.44, 1.54, 4.37, 6.40, -5.05, 10.88, -3.57, 0.10, 18.36, -13.37, 2.03, 5.48],

              backgroundColor: '#6a72bf',
              borderColor: '#6a72bf',
              fill: false,
              lineTension: 0,
              radius: 3,
              pointBackgroundColor: '#6a72bf',
              pointHoverBackgroundColor: '#6a72bf',
              pointBorderColor: '#6a72bf',

            }

          ],
        };
        var yaxisTitle = "Percentage Change"

        this.generateLineCharts55(ctx, data, yaxisTitle);
        break;
    }

  }

  generateLineCharts(ctxctvh, cdxLabeldptxno, cdyDatadptxno) {
    console.log("UPI G1");

    var dpTxnoChart = new Chart(ctxctvh, {
      type: 'line',
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

  generateLineCharts2(ctxctvh, cdxLabeldptxno, cdyDatadptxno) {
    console.log("UPI G1");

    var dpTxnoChart = new Chart(ctxctvh, {
      type: 'line',
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




  generateLineCharts55(ctx, data, yaxisTitle) {
    console.log("UPI G1");

    var chart = new Chart(ctx, {
      //   type: 'line',
      //  data: data,
      //   options: options,

      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: data.datasets[0].label,
          data: data.datasets[0].data,
          backgroundColor: data.datasets[0].backgroundColor,
          borderColor: data.datasets[0].borderColor,
          pointRadius: data.datasets[0].radius,
          pointBackgroundColor: data.datasets[0].pointBackgroundColor,
          pointHoverBorderColor: data.datasets[0].pointHoverBackgroundColor,
          // tension: 0.1,
          fill: false
        }],
      },

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



  onBankDeclineBD(value) {
    console.log("value", value);
    var chartExist = Chart.getChart(this.cdptechd); // <canvas> id
    if (chartExist != undefined)
      chartExist.destroy();
    var chartExist1 = Chart.getChart(this.cdptechd1); // <canvas> id
    if (chartExist1 != undefined)
      chartExist1.destroy();

    if (value == 'bd') {
      this.showBD = true;
      this.showNonBD = false;
      // this.createChartdpTechDecline()
      this.cdptechd = document.getElementById('dpTechDecline');
      this.ctxcdptechd = this.cdptechd.getContext('2d');

      var cdxLabeldptechd = [
        "Invalid Transaction", "Unable To Process Due To Remitter Side Issue", "Response Code Error", "Requath Time Out For Pay", "PSP Not Available"
      ];

      var cdyDatadptechd = [
        {
          label: "For The Day Count",
          backgroundColor: "#277BC0",
          data: [30445, 26, 558, 129, 32],
          maxBarThickness: 50,
        },
        {
          label: "Month To Date Count",
          backgroundColor: "#FFB200",
          data: [532460, 53822, 6377, 2271, 173],
          maxBarThickness: 50,
        }
      ];
      var xaxisTitle = "CBS"
      var yaxisTitle = "Count"

      this.generateBarCharts(this.ctxcdptechd, cdxLabeldptechd, cdyDatadptechd, xaxisTitle, yaxisTitle);
    } else {
      this.showBD = false;
      this.showNonBD = true;
      this.cdptechd1 = document.getElementById('dpTechDecline2');
      this.ctxcdptechd1 = this.cdptechd1.getContext('2d');

      var cdxLabeldptechd = [
        "No Response from CBS", "Remitter CBS Offline"
      ];

      var cdyDatadptechd = [
        {
          label: "For The Day Count",
          backgroundColor: "#277BC0",
          data: [741, 100837],
          maxBarThickness: 100,
        },
        {
          label: "Month To Date Count",
          backgroundColor: "#FFB200",
          data: [83, 23148],
          maxBarThickness: 100,
        }
      ];
      var xaxisTitle = "demoz"
      var yaxisTitle = "Count"

      this.generateBarCharts(this.ctxcdptechd1, cdxLabeldptechd, cdyDatadptechd, xaxisTitle, yaxisTitle);
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
    if (value == 'lastyear') {
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
      this.generateLineCharts(this.ctxctvh, cdxLabeldptxno, cdyDatadptxno);

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
      this.generateLineCharts(this.ctxdptxno1, cdxLabeldptxno, cdyDatadptxno);
      // this.createChartdpTxnOverview2();
    }
  }




















}


function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");

}

// new from dash




function abbreviateNumber(value) {
  var newValue = value;
  if (value >= 1000) {
    var suffixes = ["", "k", "M", "b", "t"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue: any;
    var shortValue1 = '';

    console.log(`short value as ${typeof (shortValue)} AND short value1 as ${typeof (shortValue1)}`);
    for (var precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
      var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
      if (dotLessShortValue.length <= 2) { break; }
    }
    if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
}