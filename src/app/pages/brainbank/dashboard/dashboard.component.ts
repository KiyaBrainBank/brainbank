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
  tablist = ['atm','pos','online','mobile'];
  canvas: any;
  ctx: any;
  ccanv: any;
  ctxctvh:any
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
  activeTabName:string = 'atm';
  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
   
    this.ccanv = document.getElementById('caTransVolHistory');
    this.ctxctvh = this.ccanv.getContext('2d');
    var ctvhchartDataxLabel = [
      "N01","N02","N03","N04","N05","N06","N07","N09","N08","N10","N11","N12","N13","N14","N15","N16","N18","N17","N19","N20","N21","N22","N23", "N24"
  ];
  var ctvhchartDatayData = [
      5000, 9500, 4400, 6400, 8500, 11900, 5000, 32000, 10000, 25000, 35000, 5000, 20000, 29000, 22000, 30000, 5000, 30000, 24000, 10000, 5000, 14000, 22000, 20000
  ];
  this.generateCharts(this.ctxctvh,ctvhchartDataxLabel,ctvhchartDatayData);
  }

  activetab(tab){
    this.activeTabName = tab;
    this.ccanv= '';
    this.ctxctvh = '';
    let ctvhchartDataxLabel = [];
    let ctvhchartDatayData = [];
    switch(tab){
      case 'atm':
        this.ccanv = document.getElementById('caTransVolHistory');
        this.ctxctvh = this.ccanv.getContext('2d');
         ctvhchartDataxLabel = [
            "N01","N02","N03","N04","N05","N06","N07","N09","N08","N10","N11","N12","N13","N14","N15","N16","N18","N17","N19","N20","N21","N22","N23", "N24"
        ];
         ctvhchartDatayData = [
            5000, 9500, 4400, 6400, 8500, 11900, 5000, 32000, 10000, 25000, 35000, 5000, 20000, 29000, 22000, 30000, 5000, 30000, 24000, 10000, 5000, 14000, 22000, 20000
        ];
        this.generateCharts(this.ctxctvh,ctvhchartDataxLabel,ctvhchartDatayData);
      break;
      case 'pos':
        this.ccanv = document.getElementById('caTransVolHistory2');
        this.ctxctvh = this.ccanv.getContext('2d');

         ctvhchartDataxLabel = [
            "N01","N02","N03","N04","N05","N06","N07","N09","N08","N10","N11","N12","N13","N14","N15","N16","N18","N17","N19","N20","N21","N22","N23", "N24"
        ];
         ctvhchartDatayData = [
            2000, 4500, 1400, 4400, 5500, 4900, 7000, 12000, 20000, 15000, 15000, 15000, 23000, 21000, 20000, 20000, 11000, 20000, 13000, 29000, 8000, 15000, 21000, 25000
        ];
        this.generateCharts(this.ctxctvh,ctvhchartDataxLabel,ctvhchartDatayData);
      break;
      case 'online':
        this.ccanv = document.getElementById('caTransVolHistory3');
        this.ctxctvh = this.ccanv.getContext('2d');

         ctvhchartDataxLabel = [
                "N01","N02","N03","N04","N05","N06","N07","N09","N08","N10","N11","N12","N13","N14","N15","N16","N18","N17","N19","N20","N21","N22","N23", "N24"
        ];
         ctvhchartDatayData = [
              5000, 9500, 4400, 6400, 8500, 11900, 5000, 32000, 10000, 25000, 35000, 5000, 20000, 29000, 22000, 30000, 5000, 30000, 24000, 10000, 5000, 14000, 22000, 20000
        ];
        this.generateCharts(this.ctxctvh,ctvhchartDataxLabel,ctvhchartDatayData);
      break;
      case 'mobile':
        this.ccanv = document.getElementById('caTransVolHistory4');
        this.ctxctvh = this.ccanv.getContext('2d');

         ctvhchartDataxLabel = [
            "N01","N02","N03","N04","N05","N06","N07","N09","N08","N10","N11","N12","N13","N14","N15","N16","N18","N17","N19","N20","N21","N22","N23", "N24"
        ];
         ctvhchartDatayData = [
            5000, 2500, 8400, 6400, 15500, 4000, 9000, 22000, 10000, 18000, 10000, 12000, 18000, 31000, 10000, 20000, 2000, 10000, 16000, 19000, 5000, 25000, 31000, 15000
        ];
        this.generateCharts(this.ctxctvh,ctvhchartDataxLabel,ctvhchartDatayData);
      break;
    }
    
  }

  generateCharts(ctxctvh,ctvhchartDataxLabel,ctvhchartDatayData){
    Chart.register(ChartDataLabels);
    var catvh = new Chart(ctxctvh, {
      type: 'bar',
      data: {
          labels: ctvhchartDataxLabel,
          datasets: [{
              label: 'Transaction Amount',
              data: ctvhchartDatayData,
              backgroundColor: ["#0096FF"],
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
              text: "Transaction Volume Hourly",
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
                return thousands_separators(val);
              },
            },

            tooltip: {
              position: "nearest",
              xAlign: "center",
              yAlign: "bottom",
              
              callbacks: {
                  label: function (cntx) {
                      return " Amount $ " + thousands_separators(cntx.parsed.y);
                  },
                  title: function (cntx) {
                      return "Hour - " + cntx[0].label;
                  },
              },
              padding: 10
                  }, // tooltip
           
            
      },
      scales: {
        y: {
            title: {
                text: "Amount",
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
                callback: function(v,i,t) {
                    return "$ " + thousands_separators(v);
                },
            },
            grid: {
                borderColor: 'transparent',
                color: '#444',
            },
            max: 40000,
            min: 0,
        }, //y
        x: {
            title: {
                text: "Hourly Report",
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

}
function thousands_separators(num) {
  var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}



