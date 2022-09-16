import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-atmdetails',
  templateUrl: './atmdetails.component.html',
  styleUrls: ['./atmdetails.component.sass']
})
export class AtmdetailsComponent implements OnInit {
  eatmwtxnp: any;
  ctxatmwtxnp: any;
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
  eatmfleetintsurate: any;
  ctxatmfleetintsurate: any;
  eatmfailureprevday: any;
  ctxatmfailureprevday: any;

  constructor() { }

  ngOnInit(): void {
  }
   ngAfterViewInit(){
    this.createChartATMWeeklyTxnVolPer();
    this.createChartATMFleetIntSucRate();
    this.createChartATMFailurePrevDay();
   }
   createChartATMWeeklyTxnVolPer() {
    //console.log("Chart 1 - Weekly Transaction Volume Performance");
    this.eatmwtxnp = document.getElementById("catmWeeklyTxnPer");
    this.ctxatmwtxnp = this.eatmwtxnp.getContext("2d");

    var cdxLabelatmwtxnvp = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    var cdyDataatmwtxnvp = [
        {
            label: "Current Week",
            data: [ 64945, 96844, 84316, 92964, 46234, 98947, 36035 ],
            backgroundColor: "#30c452",
            borderColor: "#30c452",
            pointRadius: 0,
        },
        {
            label: "Last Week",
            data: [ 45825, 75729, 66231, 31368, 66741, 75215, 34201 ],
            backgroundColor: "#007bff",
            borderColor: "#007bff",
            pointRadius: 0,
        },
        {
            label: "Last Year",
            data: [ 63481, 25489, 45686, 35209, 30686, 34010, 30569 ],
            backgroundColor: "#FFA500",
            borderColor: "#FFA500",
            pointRadius: 0,
        },
    ];

    Chart.register(ChartDataLabels);

    var chartatmwtxnp = new Chart(this.ctxatmwtxnp, {
        type: "line",
        data: {
            labels: cdxLabelatmwtxnvp,
            datasets: cdyDataatmwtxnvp,
            // tension: 0.1,
        },
        options: {
            // responsive: true,
            // maintainAspectRatio: false,
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
                },
                title: {
                    display: false,
                    text: "Weekly Transaction Volume Performance",
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
                        text: "Transaction Volume",
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
                        color:this.xtick_color,
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
createChartATMFleetIntSucRate() {
  //console.log("Chart 2 - Fleet Interaction Success Rate");
  this.eatmfleetintsurate = document.getElementById("catmFleetInsSuRate");
  this.ctxatmfleetintsurate = this.eatmfleetintsurate.getContext("2d");

  var cdxLabelatmfleetinsurate = [
      "Previous Day", "Last 7 Days", "Last 30 days"
  ];
  var cdyDataatmfleetinsurate = [
      "97.79", "94.40", "94.36"
  ];

  var chartatmfisr = new Chart(this.ctxatmfleetintsurate, {
      type: "bar",
      data: {
          labels: cdxLabelatmfleetinsurate,
          datasets: [{
              label: "Label",
              data: cdyDataatmfleetinsurate,
              backgroundColor: "#007bff",
              maxBarThickness: 80,
          }],
      },
      
      options: {
          // responsive: true,
          // maintainAspectRatio: false,
          
          plugins: {
              
              legend: {
                  display: false,
              }, // legend

              title: {
                  display: false,
                  text: "Fleet Interaction Success Rate",
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
                      return val + " %";
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
                          return cntx.parsed.y + "%";
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
                  beginAtZero: false,
                  title: {
                      text: "Percentage",
                      display: true,
                      color: this.title_ylabel,
                      font: {
                          size: 14,
                          family: this.vrchartfont,
                      },
                  }, // title 
                  ticks: {
                      color:this.ytick_color,
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
                      text: "Time Period",
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

  }); // Chart
}

createChartATMFailurePrevDay() {
  //console.log("Chart 3 - ATM Failure (Previous Day)");

  this.eatmfailureprevday = document.getElementById("catmFailurePrevDay");
  this.ctxatmfailureprevday = this.eatmfailureprevday.getContext("2d");

  var cdxLabelatmfailureprevday = [
      "User Error", "Unsupported Service", "Unavailable Service", "Deposit Dispense Error"
  ];
  var cdyDataatmfailureprevday = [
      0.28, 17.02, 1.05, 70.53
  ];

  var chartatmfailpd = new Chart(this.ctxatmfailureprevday, {
      type: "pie",
      data: {
          labels: cdxLabelatmfailureprevday,
          datasets: [{
              data: cdyDataatmfailureprevday,
              backgroundColor: ["#007bff", "#70d562", "#FFA500", "#071e31" ],
              borderColor: "transparent",
          }],
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
              }, // lengend 

              title: {
                  display: false,
                  text: "ATM Failure",
                  color: this.title_charttitle,
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
                  text: "(Previous Day)",
                  color: this.title_charttitle,
                  // align: "start",
                  padding: {
                      bottom: 40,
                  },
                  font: {
                      family: this.vrchartfont,
                      size: 14,
                      // weight: "500",
                  },
              }, // subtitle

              datalabels: {
                  color: this.dlbls_barvalue,
                  // align: "top",
                  // anchor: "end",
                  font: {
                      family: this.vrchartfont,
                  },
                  formatter: function (val, ctx) {
                      return val + " %";
                  },
                  labels: {
                      index: {
                          align: "end",
                          anchor: "end",
                          font: {size: 15},
                      }, // index
                  }, // labels
              }, // datalabels 

              tooltip: {
                  position: "nearest",
                  xAlign: "center",
                  yAlign: "bottom",
                  bodyFont: {
                      family: this.vrchartfont,
                  },
                  callbacks: {
                      label: function (c) {
                          return c.parsed + "%";
                      },
                      title: function (cntx) {
                          return cntx[0].label;
                      },
                  },
                  padding: 10,
              }, // tooltip

          }, // plugins 
      }, // options

  }); // Chart
}
}
function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}
