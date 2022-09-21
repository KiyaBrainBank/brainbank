import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-pos-card-usage',
  templateUrl: './pos-card-usage.component.html',
  styleUrls: ['./pos-card-usage.component.sass']
})
export class PosCardUsageComponent implements OnInit {

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
  eposcardtxnvol :any;
  ctxposcardtxnvol : any;
  epostxnbyamount :any;
  ctxpostxnbyamount :any;
  eposavgtxnamount:any;
  ctxposavgtxnamount:any;
  eposcardtypeusage:any;
  ctxposcardtypeusage :any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    //chart 1
     this.eposcardtxnvol = document.getElementById("cposCardTxnVol");
		 this.ctxposcardtxnvol = this.eposcardtxnvol.getContext("2d");
     var cdxDataposcardtxnvol = [
      "May 2021", "June 2021", "September 2021", "December 2021", "March 2022", "June 2022", "July 2022"
    ];
    var cdyDataposcardtxnvol = [
      {
        label: "Sales Value 1",
        data: [810, 780, 690, 710, null, 720, 900],
        backgroundColor: "#6CC4A1",
        pointRadius: 0,
        borderColor: "red",
        fill: true,
      },
    ]
    this.generateLineCharts(this.ctxposcardtxnvol, cdxDataposcardtxnvol, cdyDataposcardtxnvol);

    //chart 2
    this.epostxnbyamount = document.getElementById("cposTxnByAmount");
		this.ctxpostxnbyamount = this.epostxnbyamount.getContext("2d");

				var cdxDatapostxnbyamount = [
					"0-20", "21-40", "41-60", "61-80", "81-100", "101-200", "201-300", "301-400", "401-500", "501-1000", "> 1001",
				];

				var cdyDatapostxnbyamount = [
					{
						label: "Cashback",
						data: [ 64945, 96844, 84316, 92964, 46234, 98947, 36035, 30400, 87920, 90102, 78920 ],
						backgroundColor: "#FFA500",
						borderColor: "#FFA500",
						pointRadius: 0,
						tension: 0.1,
					},
					{
						label: "Purchases",
						data: [ 45825, 75729, 66231, 31368, 66741, 75215, 34201, 57839, 58372, 20103, 89002 ],
						backgroundColor: "#B270A2",
						borderColor: "#B270A2",
						pointRadius: 0,
						tension: 0.1,
					},
					{
						label: "Refund",
						data: [ 63481, 25489, 45686, 35209, 30686, 34010, 30569, 84728, 45872, 58892, 89100 ],
						backgroundColor: "#6CC4A1",
						borderColor: "#6CC4A1",
						pointRadius: 0,
						tension: 0.1,
					},
				];
        this.generateLineCharts2(this.ctxpostxnbyamount,cdxDatapostxnbyamount,cdyDatapostxnbyamount);

        //chart 3
        this.eposavgtxnamount = document.getElementById("cposAvgTxnAmount");
				this.ctxposavgtxnamount = this.eposavgtxnamount.getContext("2d");

				var cdxDataposavgtxnamount = [
					"June 2021", "July 2021", "August 2021", "September 2021", "October 2021", "November 2021", "December 2021", "January 2022", "February 2022", "March 2022", "April 2022", "May 2022",
				];

				var cdyDataposavgtxnamount = [
					{
						label: "Credit",
						data: [ 1000, 1200, 1400, 4500, 5000, 3000, 2002, 4939, 2002, 4993, 2920, 4000 ],
						backgroundColor: "#FFA500",
						borderColor: "#FFA500",
						pointRadius: 0,
						tension: 0.1,
					},
					{
						label: "Debit",
						data: [ 398, 488, 599, 848, 199, 488, 428, 588, 883, 245, 583, 488 ],
						backgroundColor: "#B270A2",
						borderColor: "#B270A2",
						pointRadius: 0,
						tension: 0.1,
					},
				];
        this.generateLineCharts3(this.ctxposavgtxnamount,cdxDataposavgtxnamount,cdyDataposavgtxnamount)
      //chart 4
      this.eposcardtypeusage = document.getElementById("cposCardTypeUsage");
			this.ctxposcardtypeusage = this.eposcardtypeusage.getContext("2d");

				var cdxDataposcardtypeusage = [
					"Master Card", "Visa", "American Express", "Discover", "Bank Card (Inactive)", "Dankort", "Private Label Card", "China Union Pay", "ATM", "JCB",
				];

				var cdyDataposcardtypeusage = [
					55.59, 43.27, 1.09, 0.04, 0.01, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
					// 55.59, 43.27, 1.09, 0.04, 0.01,
					// "55.59", "43.27", "1.09", "0.04", "0.01", "0.00", "0.00", "0.00", "0.00", "0.00", "0.00",
					// 10, 20, 30, 40, 50, 60, 70, 80, 90, 20,
				];
        this.generateBarCharts(this.ctxposcardtypeusage,cdxDataposcardtypeusage,cdyDataposcardtypeusage)
  }

  generateLineCharts(ctxposcardtxnvol,cdxDataposcardtxnvol, cdyDataposcardtxnvol) {
  var chartposcardtxnvol = new Chart(ctxposcardtxnvol, {
    type: 'line',
    data:{
      labels: cdxDataposcardtxnvol,
      datasets: cdyDataposcardtxnvol,
    }, // data

    options: {

      plugins: {
        legend: {
          display: false,
        },

        datalabels: {
          display: false,
        }, // datalabels 

      }, // plugins

      scales: {

        y: {
          beginAtZero: true,
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
generateLineCharts2(ctxpostxnbyamount,cdxDatapostxnbyamount,cdyDatapostxnbyamount){
  var chartpostxnbyamount = new Chart(ctxpostxnbyamount, {
    type: 'line',
    data:{
      labels: cdxDatapostxnbyamount,
      datasets: cdyDatapostxnbyamount,
    }, // data
  
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
          text: "Transaction by Amount",
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
  
        tooltip: {
          // display: true,
          position: "nearest",
          xAlign: "center",
          yAlign: "bottom",
          bodyFont: {
            family: this.vrchartfont,
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
          title: {
            text: "Amount",
            display: true,
            color: this.title_xlabel,
            font: {
              size: 14,
              family: this.vrchartfont,
            },
          }, // title 
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
generateLineCharts3(ctxposavgtxnamount,cdxDataposavgtxnamount,cdyDataposavgtxnamount){
  var chartposavgtxnamount = new Chart(ctxposavgtxnamount, {
    type: "line",
    data: {
      labels: cdxDataposavgtxnamount,
      datasets: cdyDataposavgtxnamount,
      // tension: 0.1,
    }, // data

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
          text: "Average Transaction Amount",
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

        tooltip: {
          // display: true,
          position: "nearest",
          xAlign: "center",
          yAlign: "bottom",
          bodyFont: {
            family: this.vrchartfont,
          },
          padding: 10,
        }, // tooltip

      }, // plugins

      scales: {

        y: {
          beginAtZero: true, 
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

generateBarCharts(ctxposcardtypeusage,cdxDataposcardtypeusage,cdyDataposcardtypeusage){
  var chartposcardtypeusage = new Chart(ctxposcardtypeusage, {
    type: "bar",
    data: {
      labels: cdxDataposcardtypeusage,
      datasets: [{
        label: "Card Usage",
        data: cdyDataposcardtypeusage,
        backgroundColor: ["rgb(55, 82, 146)"],
        // barThickness: 10,
      }],
    }, // data

    options: {

      indexAxis: "y",

      plugins: {
        
        legend: {
          display: false,
        },
        title: {
          display: false,
          text: "Card Type Usage",
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
          align: "right",
          anchor: "end",
          font: {
            family: this.vrchartfont,
          },
          formatter: function (val, ctx) {
            // return Math.floor(val).toFixed(2) + "%";
            return (Math.round(val * 100) / 100).toFixed(2) + "%";
          },
        }, // datalabels

        tooltip: {
          position: "nearest",
          xAlign: "left",
          yAlign: "center",
          bodyFont: {
            family: this.vrchartfont,
          },
          callbacks: {
            label: function (cntx) {
              return cntx.parsed.x + "%";
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
          beginAtZero: true, 
          // min: 0,
          // suggestedMax: 100,
          // max: 100,
          ticks: {
            color: this.ytick_color,
            font: {
              family: this.vrchartfont,
            },
            // min: 0,
            // max: 100,
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
          // max: 100,
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
