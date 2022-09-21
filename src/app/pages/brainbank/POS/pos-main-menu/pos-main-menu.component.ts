import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-pos-main-menu',
  templateUrl: './pos-main-menu.component.html',
  styleUrls: ['./pos-main-menu.component.sass']
})
export class PosMainMenuComponent implements OnInit {
  vrchartfont = "Avenir, Segoe UI, arial, sans-serif";

  dlbls_barvalue = "#dddddd";
  title_charttitle = "white";
  title_charttitle2 = "#666666";
  title_ylabel = "white";
  title_xlabel = "white";

  legend_textcolor = "#dddddd";

  ygrid_bordercolor = "#444444";
  ygrid_color = "#444444";
  xgrid_bordercolor = "#444444";
  xgrid_color = "#444444";

  ytick_color = "#aaa";
  xtick_color = "#aaa";
  epostxnselposterminal :any;
  ctxpostxnselposterminal :any;
  eposavgtxnpos:any;
  ctxposavgtxnpos:any;
  epossalesvalue:any;
  ctxpossalesvalue:any;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
     this.epostxnselposterminal = document.getElementById("cposTxnSelPOSTerminal");
     this.ctxpostxnselposterminal = this.epostxnselposterminal.getContext("2d");

    var cdxDatapostxnselposterminal = [
      "June 2021", "September 2021", "December 2021", "March 2022", "June 2022"
    ];

    var cdyDatapostxnselposterminal = [{
      label: "Cashback",
      data: [64945, 96844, 84316, 92964],
      backgroundColor: "#FF9551",
      borderColor: "#FF9551",
      pointRadius: 0,
    },
    {
      label: "Purchases",
      data: [45825, 75729, 66231, 31368, 66741],
      backgroundColor: "#42855B",
      borderColor: "#42855B",
      pointRadius: 0,
    },
    {
      label: "Refund",
      data: [63481, 25489, 45686, 35209, 30686],
      backgroundColor: "#277BC0",
      borderColor: "#277BC0",
      pointRadius: 0,
    },
    ];
    this.generateChart(this.ctxpostxnselposterminal,cdxDatapostxnselposterminal,cdyDatapostxnselposterminal);

    this.eposavgtxnpos = document.getElementById("cposAvgTxnPOS");
		this.ctxposavgtxnpos = this.eposavgtxnpos.getContext("2d");

			var cdxDataposavgtxnpos = [
				"June 2021", "September 2021", "December 2021", "March 2022", "June 2022"
			];
			var cdyDataposavgtxnpos = [{
				label: "Current Week",
				data: [66945, 76844, 60316, 92964],
				backgroundColor: "#FFA500",
				borderColor: "#FFA500",
				pointRadius: 0,
			},];
       this.generateChart2(this.ctxposavgtxnpos,cdxDataposavgtxnpos,cdyDataposavgtxnpos);

      this.epossalesvalue = document.getElementById("cposSalesValue");
			this.ctxpossalesvalue = this.epossalesvalue.getContext("2d");

			var cdxDatapossalesvalue = [
				"POS 001", "POS 002", "POS 003", "POS 004", "POS 005", "POS 006"
			];
			var cdyDatapossalesvalue123 = [{
				label: "Sales Value 1",
				data: [80, 20, 90, 10, 20, 100],
				backgroundColor: "#6CC4A1",
				maxBarThickness: 50,
			},
			{
				label: "Sales Value 2",
				data: [40, 90, 10, 80, 20, 90],
				backgroundColor: "#277BC0",
				maxBarThickness: 50,
			}
			];

      this.generateBarChart(this.ctxpossalesvalue,cdxDatapossalesvalue,cdyDatapossalesvalue123);
  }

  generateChart(ctxpostxnselposterminal,cdxDatapostxnselposterminal,cdyDatapostxnselposterminal){
    var chartposavgtxnpos = new Chart(ctxpostxnselposterminal, {
      type: "line",
      data: {
        labels: cdxDatapostxnselposterminal,
        datasets: cdyDatapostxnselposterminal,
        //tension: 0.1,
      },
      options: {

        plugins: {

          legend: {
            display: true,
            position: "bottom",
            labels: {
              padding: 20,
              color: this.legend_textcolor,
              font: {
                family: this.vrchartfont,
              },
            }, // labels 
          }, // legend 

          title: {
            display: false,
            text: "Transactions for Selected POS Terminals",
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
            display: false,
          }, // datalabels 

          annotation: {
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
            }, //annotations
          }, //annotation

          tooltip: {
            position: "nearest",
            xAlign: "center",
            yAlign: "bottom",
            bodyFont: {
              family: this.vrchartfont,
            },
            callbacks: {
              label: function (cntx) {
                console.log(cntx);
                return " " + thousands_separators(cntx.parsed.y);
              },
              title: function (cntx) {
                console.log('title ', cntx);
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
              text: "Transactions",
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

  generateChart2(ctxposavgtxnpos,cdxDataposavgtxnpos,cdyDataposavgtxnpos){
    var chartposavgtxnpos = new Chart(ctxposavgtxnpos, {
      type: "line",
      data: {
        labels: cdxDataposavgtxnpos,
        datasets: cdyDataposavgtxnpos,
        //tension: 0.1,
      },
      options: {

        plugins: {

          legend: {
            display: false,
          }, // legend 

          title: {
            display: false,
            text: "Average Transactions / POS",
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
            display: false,
          }, // datalabels 

          annotation: {
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
                // position: {
                //   x: "end",
                //   y: "end",
                // },
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
                font: {
                  family: this.vrchartfont,
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
                // position: {
                //   x: "end",
                //   y: "end",
                // },
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
                font: {
                  family: this.vrchartfont,
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
                font: {
                  family: this.vrchartfont,
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
                font: {
                  family: this.vrchartfont,
                },
              }, // label4
            }, //annotations
          }, //annotation

          tooltip: {
            position: "nearest",
            xAlign: "center",
            yAlign: "bottom",
            bodyFont: {
              family: this.vrchartfont,
            },
            callbacks: {
              label: function (cntx) {
                console.log(cntx);
                return " " + thousands_separators(cntx.parsed.y);
              },
              title: function (cntx) {
                console.log('title ', cntx);
                return "-" + cntx[0].label;
              },
            },
            padding: 10,
          }, // tooltip

        }, // plugins

        scales: {

          y: {
            beginAtZero: true,
            title: {
              text: "Transactions",
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
    }); // chart
  }

  generateBarChart(ctxpossalesvalue,cdxDatapossalesvalue,cdyDatapossalesvalue123){
    var catvh = new Chart(ctxpossalesvalue, {
      type: 'bar',
      data: {
        labels: cdxDatapossalesvalue,
        datasets: cdyDatapossalesvalue123,
      }, // data

      options: {

        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: "POS Sales Value",
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
            mode: "index",
            bodyFont: {
              family: this.vrchartfont,
            },
            callbacks: {
              label: function (cntx) {
                return cntx.dataset.label + " - " + cntx.parsed.y;
              },
              title: function (cntx) {
                return cntx[0].label;
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
              text: "Sales Value",
              display: true,
              color: this.title_ylabel,
              font: {
                size: 14,
                family: this.vrchartfont,
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
            ticks: {
              color: this.xtick_color,
              font: {
                family: this.vrchartfont,
              },
              // minRotation: 90,
              // maxRotation: 90,
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
