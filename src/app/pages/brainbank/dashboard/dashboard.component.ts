import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  tablist = ['atm', 'pos', 'online', 'mobile'];
  canvas: any;
  ctx: any;
  ccanv: any;
  ctxctvh: any
  vrchartfont = "Avenir, Segoe UI, arial, sans-serif";
  dlbls_barvalue = "#dddddd";
  title_charttitle = "white";
  title_ylabel = "white";
  title_xlabel = "white";
  legend_textcolor = "#dddddd";
  ygrid_bordercolor = "#444444";
  ygrid_color = "#444444";
  xgrid_bordercolor = "#444444";
  xgrid_color = "#444444";
  ytick_color = "#aaa";
  xtick_color = "#aaa";
  activeTabName: string = 'atm';
  custOverviewCanvas: any;
  ctxCustOverviewCanvas: any;

  caPerDifferenceCanvas: any;
  ctxcaPerDifferenceCanvas: any;

  channelsUsedByCustomersCanvas: any;
  ctxChannelsUsedByCustomersCanvas: any;

  ctvChartDataTitle: any = [
    {
      transactionVolumeHourly: {
        titleText: "Transaction Volume Hourly",
        yAxistext: "Number of Customers",
        xAxistext: "Channels",
      },
      customerOverview: {
        titleText: "Customer Overview",
        yAxistext: "Number of Customers",
        xAxistext: "Channels",
      }
    }
  ]

  graphOptions: any = [{
    transactionVolumeHourly: {
      responsive: true,
      maintainAspectRatio: false,
      max: 40000,
      min: 0
    },
    customerOverview: {
      responsive: true,
      maintainAspectRatio: true,
      max: 2000000,
      min: 0
    }
  }]

  constructor() { }

  ngOnInit(): void {
 
  }

  ngAfterViewInit() {

    var ctvhchartDatayData;
    var ctvhchartDataxLabel
    /* //Chart 1 - Channel Analytics | Transaction Volume Hourly */

    // this.ccanv = document.getElementById('caTransVolHistory');
    // this.ctxctvh = this.ccanv.getContext('2d');
    // var ctvhchartDataxLabel = [
    //   "N01", "N02", "N03", "N04", "N05", "N06", "N07", "N09", "N08", "N10", "N11", "N12", "N13", "N14", "N15", "N16", "N18", "N17", "N19", "N20", "N21", "N22", "N23", "N24"
    // ];
    // var ctvhchartDatayData: any = [{
    //   label: 'Transaction Amount',
    //   data: [5000, 9500, 4400, 6400, 8500, 11900, 5000, 32000, 10000, 25000, 35000, 5000, 20000, 29000, 22000, 30000, 5000, 30000, 24000, 10000, 5000, 14000, 22000, 20000],
    //   backgroundColor: ["#0096FF"],
    // }]

    // // console.log(this.ctvChartDataTitle);

    // this.generateCharts(this.ctxctvh, ctvhchartDataxLabel, ctvhchartDatayData, this.ctvChartDataTitle[0].transactionVolumeHourly, this.graphOptions[0].transactionVolumeHourly);


    /* //Chart 2 - Channel Analytics | Customer Overview */


    /* //Chart 2 - POS | Customer Overview */

   this.activetab("atm");
  }

  activetab(tab) {
    this.activeTabName = tab;
    this.ccanv = '';
    this.ctxctvh = '';
    let ctvhchartDataxLabel = [];
    let ctvhchartDatayData = [];
    switch (tab) {
      case 'atm':
        console.log(`tab value${tab}`);

        this.ccanv = document.getElementById('caTransVolHistory');
        this.ctxctvh = this.ccanv.getContext('2d');
        ctvhchartDataxLabel = [
          "N01", "N02", "N03", "N04", "N05", "N06", "N07", "N09", "N08", "N10", "N11", "N12", "N13", "N14", "N15", "N16", "N18", "N17", "N19", "N20", "N21", "N22", "N23", "N24"
        ];
        ctvhchartDatayData = [{
          label: 'Transaction Amount',
          data: [5000, 9500, 4400, 6400, 8500, 11900, 5000, 32000, 10000, 25000, 35000, 5000, 20000, 29000, 22000, 30000, 5000, 30000, 24000, 10000, 5000, 14000, 22000, 20000],
          backgroundColor: ["#0096FF"],
        }];
        this.generateCharts(this.ctxctvh, ctvhchartDataxLabel, ctvhchartDatayData, this.ctvChartDataTitle[0].transactionVolumeHourly, this.graphOptions[0].transactionVolumeHourly);

        //2nd graph
        this.custOverviewCanvas = document.getElementById('caCustOverview');
        console.log(this.custOverviewCanvas + "2nd graph");
        this.ctxCustOverviewCanvas = this.custOverviewCanvas.getContext('2d');

        ctvhchartDataxLabel = ["Online", "Mobile", "ATM", "POS"];
        ctvhchartDatayData = [
          {
            label: "Last Completed Week",
            backgroundColor: "#A2B5BB",
            data: [1061004, 1717591, 89000, 90000],
            maxBarThickness: 50,
          },
          {
            label: "Previous Week",
            backgroundColor: "#495C83",
            data: [1057305, 1715957, 100000, 78000],
            maxBarThickness: 50,
          }
        ]

        this.generateCharts(this.ctxCustOverviewCanvas, ctvhchartDataxLabel, ctvhchartDatayData, this.ctvChartDataTitle[0].customerOverview, this.graphOptions[0].customerOverview);


        //Chart 3 - Channel Analytics | Percentage Difference 

        this.caPerDifferenceCanvas = document.getElementById('caPerDifference');
        this.ctxcaPerDifferenceCanvas = this.caPerDifferenceCanvas.getContext('2d');

        var cpdchartDataxLabel = [
          "Online", "Mobile", "ATM", "POS"
        ];
        var cpdchartDatayData = [
          {
            label: "Percentage Difference",
            backgroundColor: "#FFA500",
            data: [0.35, 0.1, -11, 15.3],
            maxBarThickness: 50,
          }
        ];

        this.createChartPerDifference(this.ctxcaPerDifferenceCanvas, cpdchartDataxLabel, cpdchartDatayData);

        /* //Chart 4 - Channel Analytics | No of Channels Used by Customers */

        this.channelsUsedByCustomersCanvas = document.getElementById('caNoChannelsUsers');
        this.ctxChannelsUsedByCustomersCanvas = this.channelsUsedByCustomersCanvas.getContext('2d');

        var cnocchartDataxLabel = [
          "Customer Distribution", "Transaction Value Distribution", "Transaction Volume Distribution"
        ];
        var cnocchartDatayData = [
          {
            label: "Customer Used 1 Channel",
            backgroundColor: "#FF8FB1",
            data: [42, 20, 20],
            maxBarThickness: 50,
          },
          {
            label: "Customer Used 2 Channels",
            backgroundColor: "#B270A2", //36AE7C
            data: [45, 70, 70],
            maxBarThickness: 50,
          },
          {
            label: "Customer Used 3 Channels",
            backgroundColor: "#7A4495", //FFA500
            data: [0, 14, 18],
            maxBarThickness: 50,
          }
        ];

        this.createChartNoChannelsUsers(this.ctxChannelsUsedByCustomersCanvas, cnocchartDataxLabel, cnocchartDatayData)

        break;
      case 'pos':
        this.ccanv = document.getElementById('caTransVolHistory2');
        console.log(this.ccanv + "1st graph");
        this.ctxctvh = this.ccanv.getContext('2d');

        ctvhchartDataxLabel = [
          "N01", "N02", "N03", "N04", "N05", "N06", "N07", "N09", "N08", "N10", "N11", "N12", "N13", "N14", "N15", "N16", "N18", "N17", "N19", "N20", "N21", "N22", "N23", "N24"
        ];
        ctvhchartDatayData = [{
          label: 'Transaction Amount',
          data: [2000, 4500, 1400, 4400, 5500, 4900, 7000, 12000, 20000, 15000, 15000, 15000, 23000, 21000, 20000, 20000, 11000, 20000, 13000, 29000, 8000, 15000, 21000, 25000],
          backgroundColor: ["#0096FF"],
        }];
        this.generateCharts(this.ctxctvh, ctvhchartDataxLabel, ctvhchartDatayData, this.ctvChartDataTitle[0].transactionVolumeHourly, this.graphOptions[0].transactionVolumeHourly);

        /* //Chart 2 - pos | Customer Overview */

        this.custOverviewCanvas = document.getElementById('caCustOverview02');
        this.ctxCustOverviewCanvas = this.custOverviewCanvas.getContext('2d');

        ctvhchartDataxLabel = ["Online", "Mobile", "ATM", "POS"];
        ctvhchartDatayData = [
          {
            label: "Last Completed Week",
            backgroundColor: "#A2B5BB",
            data: [1161004, 917591, 1921000, 80000],
            maxBarThickness: 50,
          },
          {
            label: "Previous Week",
            backgroundColor: "#495C83",
            data: [1257305, 1115957, 122000, 78010],
            maxBarThickness: 50,
          }
        ]

        this.generateCharts(this.ctxCustOverviewCanvas, ctvhchartDataxLabel, ctvhchartDatayData, this.ctvChartDataTitle[0].customerOverview, this.graphOptions[0].customerOverview);
        //Chart 3 - POS | Percentage Difference 

        this.caPerDifferenceCanvas = document.getElementById('caPerDifference02');
        this.ctxcaPerDifferenceCanvas = this.caPerDifferenceCanvas.getContext('2d');

        var cpdchartDataxLabel = [
          "Online", "Mobile", "ATM", "POS"
        ];
        var cpdchartDatayData = [
          {
            label: "Percentage Difference",
            backgroundColor: "#FFA500",
            data: [10.35, 18.1, -8, 11.3],
            maxBarThickness: 50,
          }
        ];
        this.createChartPerDifference(this.ctxcaPerDifferenceCanvas, cpdchartDataxLabel, cpdchartDatayData);

        /* //Chart 4 - POS | No of Channels Used by Customers */

        this.channelsUsedByCustomersCanvas = document.getElementById('caNoChannelsUsers02');
        this.ctxChannelsUsedByCustomersCanvas = this.channelsUsedByCustomersCanvas.getContext('2d');

        var cnocchartDataxLabel = [
          "Customer Distribution", "Transaction Value Distribution", "Transaction Volume Distribution"
        ];
        var cnocchartDatayData = [
          {
            label: "Customer Used 1 Channel",
            backgroundColor: "#FF8FB1",
            data: [42, 20, 20],
            maxBarThickness: 50,
          },
          {
            label: "Customer Used 2 Channels",
            backgroundColor: "#B270A2", //36AE7C
            data: [45, 70, 70],
            maxBarThickness: 50,
          },
          {
            label: "Customer Used 3 Channels",
            backgroundColor: "#7A4495", //FFA500
            data: [0, 14, 18],
            maxBarThickness: 50,
          }
        ];

        this.createChartNoChannelsUsers(this.ctxChannelsUsedByCustomersCanvas, cnocchartDataxLabel, cnocchartDatayData)

        break;
      case 'online':
        this.ccanv = document.getElementById('caTransVolHistory3');
        this.ctxctvh = this.ccanv.getContext('2d');

        ctvhchartDataxLabel = [
          "N01", "N02", "N03", "N04", "N05", "N06", "N07", "N09", "N08", "N10", "N11", "N12", "N13", "N14", "N15", "N16", "N18", "N17", "N19", "N20", "N21", "N22", "N23", "N24"
        ];
        ctvhchartDatayData = [{
          label: 'Transaction Amount',
          data: [
            2000, 1500, 6400, 1400, 2200, 5600, 12200, 5000, 25000, 35000, 15000, 35000, 3000, 3000, 30000, 34000, 3000, 20000, 33000, 9000, 32000, 25000, 15000, 5000
          ],
          backgroundColor: ["#0096FF"],
        }];
        this.generateCharts(this.ctxctvh, ctvhchartDataxLabel, ctvhchartDatayData, this.ctvChartDataTitle[0].transactionVolumeHourly, this.graphOptions[0].transactionVolumeHourly);

        /* //Chart 2 - online | Customer Overview */

        this.custOverviewCanvas = document.getElementById('caCustOverview03');
        this.ctxCustOverviewCanvas = this.custOverviewCanvas.getContext('2d');

        ctvhchartDataxLabel = ["Online", "Mobile", "ATM", "POS"];
        ctvhchartDatayData = [
          {
            label: "Last Completed Week",
            backgroundColor: "#A2B5BB",
            data: [1161004, 917591, 1921000, 80000],
            maxBarThickness: 50,
          },
          {
            label: "Previous Week",
            backgroundColor: "#495C83",
            data: [1257305, 1115957, 122000, 78010],
            maxBarThickness: 50,
          }
        ]

        this.generateCharts(this.ctxCustOverviewCanvas, ctvhchartDataxLabel, ctvhchartDatayData, this.ctvChartDataTitle[0].customerOverview, this.graphOptions[0].customerOverview);
        //Chart 3 - online | Percentage Difference 

        this.caPerDifferenceCanvas = document.getElementById('caPerDifference03');
        this.ctxcaPerDifferenceCanvas = this.caPerDifferenceCanvas.getContext('2d');

        var cpdchartDataxLabel = [
          "Online", "Mobile", "ATM", "POS"
        ];
        var cpdchartDatayData = [
          {
            label: "Percentage Difference",
            backgroundColor: "#FFA500",
            data: [10.35, 18.1, -8, 11.3],
            maxBarThickness: 50,
          }
        ];

        this.createChartPerDifference(this.ctxcaPerDifferenceCanvas, cpdchartDataxLabel, cpdchartDatayData);

        /* //Chart 4 - online | No of Channels Used by Customers */

        this.channelsUsedByCustomersCanvas = document.getElementById('caNoChannelsUsers03');
        this.ctxChannelsUsedByCustomersCanvas = this.channelsUsedByCustomersCanvas.getContext('2d');

        var cnocchartDataxLabel = [
          "Customer Distribution", "Transaction Value Distribution", "Transaction Volume Distribution"
        ];
        var cnocchartDatayData = [
          {
            label: "Customer Used 1 Channel",
            backgroundColor: "#FF8FB1",
            data: [42, 20, 20],
            maxBarThickness: 50,
          },
          {
            label: "Customer Used 2 Channels",
            backgroundColor: "#B270A2", //36AE7C
            data: [45, 70, 70],
            maxBarThickness: 50,
          },
          {
            label: "Customer Used 3 Channels",
            backgroundColor: "#7A4495", //FFA500
            data: [0, 14, 18],
            maxBarThickness: 50,
          }
        ];

        this.createChartNoChannelsUsers(this.ctxChannelsUsedByCustomersCanvas, cnocchartDataxLabel, cnocchartDatayData)


        break;
      case 'mobile':
        this.ccanv = document.getElementById('caTransVolHistory4');
        this.ctxctvh = this.ccanv.getContext('2d');

        ctvhchartDataxLabel = [
          "N01", "N02", "N03", "N04", "N05", "N06", "N07", "N09", "N08", "N10", "N11", "N12", "N13", "N14", "N15", "N16", "N18", "N17", "N19", "N20", "N21", "N22", "N23", "N24"
        ];
        ctvhchartDatayData = [{
          label: 'Transaction Amount',
          data: [5000, 9500, 4400, 6400, 8500, 11900, 5000, 32000, 10000, 25000, 35000, 5000, 20000, 29000, 22000, 30000, 5000, 30000, 24000, 10000, 5000, 14000, 22000, 20000],
          backgroundColor: ["#0096FF"],
        }];
        this.generateCharts(this.ctxctvh, ctvhchartDataxLabel, ctvhchartDatayData, this.ctvChartDataTitle[0].transactionVolumeHourly, this.graphOptions[0].transactionVolumeHourly);
        
        
    /* //Chart  - mobile | Customer Overview */

    this.custOverviewCanvas = document.getElementById('caCustOverview04');
    this.ctxCustOverviewCanvas = this.custOverviewCanvas.getContext('2d');

    ctvhchartDataxLabel = ["Online", "Mobile", "ATM", "POS"];
    ctvhchartDatayData = [
      {
        label: "Last Completed Week",
        backgroundColor: "#A2B5BB",
        data: [1161004, 917591, 1921000, 80000],
        maxBarThickness: 50,
      },
      {
        label: "Previous Week",
        backgroundColor: "#495C83",
        data: [1257305, 1115957, 122000, 78010],
        maxBarThickness: 50,
      }
    ]

    this.generateCharts(this.ctxCustOverviewCanvas, ctvhchartDataxLabel, ctvhchartDatayData, this.ctvChartDataTitle[0].customerOverview, this.graphOptions[0].customerOverview);

      //Chart 3 - mobile | Percentage Difference 

      this.caPerDifferenceCanvas = document.getElementById('caPerDifference04');
      this.ctxcaPerDifferenceCanvas = this.caPerDifferenceCanvas.getContext('2d');
  
      var cpdchartDataxLabel = [
        "Online", "Mobile", "ATM", "POS"
      ];
      var cpdchartDatayData = [
        {
          label: "Percentage Difference",
          backgroundColor: "#FFA500",
          data: [10.35, 18.1, -8, 11.3],
          maxBarThickness: 50,
        }
      ];
  
      this.createChartPerDifference(this.ctxcaPerDifferenceCanvas, cpdchartDataxLabel, cpdchartDatayData);
      
  
    /* //Chart 4 - mobile | No of Channels Used by Customers */

    this.channelsUsedByCustomersCanvas = document.getElementById('caNoChannelsUsers04');
    this.ctxChannelsUsedByCustomersCanvas = this.channelsUsedByCustomersCanvas.getContext('2d');

    var cnocchartDataxLabel = [
      "Customer Distribution", "Transaction Value Distribution", "Transaction Volume Distribution"
    ];
    var cnocchartDatayData = [
      {
        label: "Customer Used 1 Channel",
        backgroundColor: "#FF8FB1",
        data: [42, 20, 20],
        maxBarThickness: 50,
      },
      {
        label: "Customer Used 2 Channels",
        backgroundColor: "#B270A2", //36AE7C
        data: [45, 70, 70],
        maxBarThickness: 50,
      },
      {
        label: "Customer Used 3 Channels",
        backgroundColor: "#7A4495", //FFA500
        data: [0, 14, 18],
        maxBarThickness: 50,
      }
    ];

    this.createChartNoChannelsUsers(this.ctxChannelsUsedByCustomersCanvas, cnocchartDataxLabel, cnocchartDatayData)
        break;
    }
 
  }

  generateCharts(ctxctvh, ctvhchartDataxLabel, ctvhchartDatayData, ctvChartDataTitle, graphOptions) {
    Chart.register(ChartDataLabels);
    var catvh = new Chart(ctxctvh, {
      type: 'bar',
      data: {
        labels: ctvhchartDataxLabel,
        datasets: ctvhchartDatayData,
      },
      options: {
        responsive: graphOptions.responsive,
        maintainAspectRatio: graphOptions.maintainAspectRatio,
        plugins: {

          legend: {
            display: false,
          },
          title: {
            display: false,
            text: ctvChartDataTitle.titleText,
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

          annotation: {
            annotations: {
              line1: {
                type: "line",
                yMin: 2500,
                yMax: 35000,
                borderColor: "#e51529", //e51529 - 2a5ff5
                borderWidth: 1,
                // pointStyle: "circle",
                // borderDash: [8, 3],
              }, //line1
            }, //annotations
          }, //annotation
          datalabels: {
            color: this.dlbls_barvalue,
            align: "top",
            anchor: "end",
            font: {
              family: this.vrchartfont,
            },
            formatter: function (val, ctx) {
              return abbreviateNumber(val);
            },
          },

          tooltip: {
            position: "nearest",
            xAlign: "center",
            yAlign: "bottom",

            callbacks: {
              label: function (cntx) {
                console.log(ctvChartDataTitle.titleText);

                if (ctvChartDataTitle.titleText == 'Transaction Volume Hourly') {
                  return " Amount $ " + thousands_separators(cntx.parsed.y);
                } else {
                  return " " + thousands_separators(cntx.parsed.y);
                }
              },
              title: function (cntx) {
                if (ctvChartDataTitle.titleText == 'Transaction Volume Hourly') {
                  return "Hour - " + cntx[0].label;
                } else {
                  return "Channel - " + cntx[0].label;
                }

              },
            },
            padding: 10
          }, // tooltip


        },
        scales: {
          y: {
            title: {
              text: ctvChartDataTitle.yAxistext,
              display: true,
              color: this.title_ylabel,
              font: {
                size: 14,
                family: this.vrchartfont,
              },
            }, //title
            beginAtZero: true,
            ticks: {
              color: this.title_xlabel,
              font: {
                family: this.vrchartfont,
              },
              callback: function (v, i, t) {
                if (ctvChartDataTitle.titleText == 'Transaction Volume Hourly') {
                  return "$ " + thousands_separators(v);
                } else {
                  return thousands_separators(v);
                }
              },
            },
            grid: {
              borderColor: 'transparent',
              color: '#444',
            },
            max: graphOptions.max,
            min: graphOptions.min,
          }, //y
          x: {
            title: {
              text: ctvChartDataTitle.xAxistext,
              display: true,
              color: this.title_xlabel,
              font: {
                size: 14,
                family: this.vrchartfont,
              },
            },
            ticks: {
              color: this.xtick_color,
              font: {
                family: this.vrchartfont,
              },
            },
            grid: {
              borderColor: this.xgrid_bordercolor,
              color: "transparent",
            },
          } //x
        }, //scales
      }
    });
  }


  createChartPerDifference(ctxctvh, ctvhchartDataxLabel, ctvhchartDatayData) {


    var capd = new Chart(ctxctvh, {
      type: "bar",
      data: {
        labels: ctvhchartDataxLabel,
        datasets: ctvhchartDatayData,
      },
      options: {
        responsive: true,
        plugins: {

          legend: {
            display: false,
          },

          title: {
            display: false,
            text: "Percentage Difference",
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

          annotation: {
            annotations: {
              line1: {
                type: "line",
                yMin: 0,
                yMax: 0,
                borderColor: "#999", //e51529 - 2a5ff5
                borderWidth: 1,
              }, //line1
            }, //annotations
          }, //annotation

          datalabels: {
            color: this.dlbls_barvalue,
            // align: "top",
            align: function (v) {
              // if (v.data <)
              //console.log('v = ', v.dataset.data[v.dataIndex]);
              if (v.dataset.data[v.dataIndex] > 0) {
                return "top";
              } else {
                return "bottom";
              }
            },
            anchor: function (v) {
              // if (v.data <)
              // console.log('v = ', v.dataset.data[v.dataIndex]);
              if (v.dataset.data[v.dataIndex] > 0) {
                return "end";
              } else {
                return "start";
              }
            },
            // anchor: "end",
            font: {
              family: this.vrchartfont,
            },
            formatter: function (val, ctx) {
              return thousands_separators(val) + " %";
              // if (val < 0) {console.log('ctx is = ', ctx);return ctx;};
              // return thousands_separators(val);
            },
          }, // datalables

          tooltip: {
            position: "nearest",
            xAlign: "center",
            yAlign: "bottom",
            /*yAlign: function (vx1, cx1) {
              // console.log('vvvv = ', vx1.tooltip.dataPoints[0].parsed.y);
              var dbarval = vx1.tooltip.dataPoints[0].parsed.y;
              if (dbarval < 0)
                return "top"
              else 
                return "bottom"
              // console.log('cccc = ', cx);
              // return "top";
            },*/
            // yAlign: "bottom",
            bodyFont: {
              family: this.vrchartfont,
            },
            padding: 10,
            callbacks: {
              label: function (ctxc) {
                return "Percentage Difference " + ctxc.parsed.y + "%";
              },
            }, // callbacks

          }, // tooltip

        }, // plugins

        scales: {
          y: {
            title: {
              text: "Percentage",
              display: true,
              color: this.title_ylabel,
              font: {
                family: this.vrchartfont,
              },
            },
            ticks: {
              color: this.ytick_color,
              font: {
                family: this.vrchartfont,
              },
              callback: function (v, i, t) {
                return v + " %";
              },
            },
            grid: {
              borderColor: "transparent",
              color: this.ygrid_color,
            },
          },
          x: {
            // title: {},
            ticks: {
              color: this.xtick_color,
              font: {
                family: this.vrchartfont,
              },
            },
            grid: {
              borderColor: this.xgrid_bordercolor,
              color: "transparent",
            },
          },
        },

      }, // options
    });
  }


  createChartNoChannelsUsers(ctxcnoc, cnocchartDataxLabel, cnocchartDatayData) {



    var canoc = new Chart(ctxcnoc, {
      type: "bar",
      data: {
        labels: cnocchartDataxLabel,
        datasets: cnocchartDatayData
      }, // data
      options: {
        responsive: true,
        plugins: {
          // beforeInit: function (cht, opts) {
          // 	chart.legend.afterFit = function () {
          // 		this.height = this.height + 100
          // 	};
          // },
          legend: {
            /*title: {
              display: true,
              text: "The Sheen",
            },*/
            labels: {
              padding: 10,
              color: this.legend_textcolor,
              font: {
                family: this.vrchartfont,
              },
            }, // labels 
          }, // legend

          annotation: {
            annotations: {
              line1: {
                type: "line",
                xMin: 0,
                xMax: 2,
                yMin: 45,
                yMax: 70,
                borderColor: "#B270A2", //e51529 - 2a5ff5
                borderWidth: 1,
              }, //line1
            }, //annotations
          }, //annotation

          //datalabels 
          datalabels: {
            color: this.dlbls_barvalue,
            align: "top",
            anchor: "end",
            font: {
              family: this.vrchartfont,
            },
            formatter: function (val, ctx) {
              // 	return "$ " + thousands_separators(val);
              if (val == 0) return "";
              // return thousands_separators(val);
              return val + " %";
            },
          }, // datalabels

          title: {
            display: false,
            text: "No of Channels Used by Customers",
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

          tooltip: {
            position: "nearest",
            xAlign: "center",
            yAlign: "bottom",
            bodyFont: {
              family: this.vrchartfont,
            },
            padding: 10,
            callbacks: {
              label: function (ctxc) {
                return ctxc.dataset.label + " " + ctxc.parsed.y + "%";
              },
            }, // callbacks
          }, // tooltip

        }, // plugins

        scales: {
          y: {
            beginAtZero: true,
            title: {
              text: "Percentage",
              display: true,
              color: this.title_ylabel,
              font: {
                family: this.vrchartfont,
              },
            },
            ticks: {
              color: this.ytick_color,
              font: {
                family: this.vrchartfont,
              },
              callback: function (v, i, t) {
                return v + " %";
              },
            },
            grid: {
              borderColor: this.ygrid_bordercolor,
              color: this.ygrid_color,
            },
            max: 100,
            min: 0,
          }, // y
          x: {
            title: {
              text: "Machine Type - Mobile",
              display: true,
              color: this.title_xlabel,
              font: {
                family: this.vrchartfont,
              },
            },
            ticks: {
              color: this.xtick_color,
              font: {
                family: this.vrchartfont,
              },
            },
            grid: {
              borderColor: this.xgrid_bordercolor,
              color: this.xgrid_color,
            },
          }, // x
        }, // scales
        //     callback: function(v,i,t) {
        // 	return "$ " + thousands_separators(v);
        // },
      }, // options 
    });
  }
  fromDateChange(event) {

  }
}
function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}





function abbreviateNumber(value) {
  var newValue = value;
  if (value >= 1000) {
      var suffixes = ["", "k", "M", "b","t"];
      var suffixNum = Math.floor( (""+value).length/3 );
      var shortValue:any ;
      var shortValue1 = '';

      console.log(`short value as ${typeof(shortValue)} AND short value1 as ${typeof(shortValue1)}`);
      for (var precision = 2; precision >= 1; precision--) {
          shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
          var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
          if (dotLessShortValue.length <= 2) { break; }
      }
      if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
      newValue = shortValue+suffixes[suffixNum];
  }
  return newValue;
}