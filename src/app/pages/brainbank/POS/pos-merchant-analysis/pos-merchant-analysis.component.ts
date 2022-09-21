import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pos-merchant-analysis',
  templateUrl: './pos-merchant-analysis.component.html',
  styleUrls: ['./pos-merchant-analysis.component.sass']
})
export class PosMerchantAnalysisComponent implements OnInit {
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
  eposcusttxnvol:any;
  constructor() { }
 ngOnInit(): void {
   
 }
  ngAfterViewInit(): void {
    this.eposcusttxnvol = document.getElementById("cposCustTxnVolume");
      this.eposcusttxnvol.style.height = "400px";
      var cdDataposcusttxnvol = [
        {"label": "Grocery", "value": 35.17,},
        {"label": "Electronics", "value": 20,},
        {"label": "Departmental", "value": 60,},
        {"label": "Hardware Store", "value": 65,},
        {"label": "Sporting Goods", "value": 85,},
        {"label": "Vehical Retailers", "value": 100,},
      ];
      this.generateChart(this.eposcusttxnvol,cdDataposcusttxnvol);

      this.eposcusttxnvol = document.getElementById("cposCustTxnValue");
      this.eposcusttxnvol.style.height = "400px";
      var cdDataposcusttxnval = [
        {"label": "Grocery", "value": 38.17,},
        {"label": "Electronics", "value": 20,},
        {"label": "Departmental", "value": 50,},
        {"label": "Hardware Store", "value": 65,},
        {"label": "Sporting Goods", "value": 85,},
        {"label": "Vehical Retailers", "value": 100,},
      ];
      this.generateChart(this.eposcusttxnvol,cdDataposcusttxnval);
  }

  generateChart(eposcusttxnvol,cdDataposcusttxnvol){
    var thedatacolors = ["#FF9551", "#42855B", "#277BC0", "#5F6F94", "#A10035", "#CA4E79", "#51557E", "#D82148", "#F1D00A", "#E60965", "#4FBDBA", "#D77FA1", "#370665", "#1A374D", "#B958A5", "#95D1CC", "#DAD992", "#FF87CA", "#B85252", "#3E065F", "#6D9886", "#14279B", "#316B83", "#4B6587", "#DF711B", "#B97A95", "#50CB93", "#FF94CC", "#125D98", "#DDDDDD", "#3C8DAD", "#F5A962", "#E5D549"];

    var canwi = eposcusttxnvol.offsetWidth;
    var canht = eposcusttxnvol.offsetHeight;

    // console.log('can width = ', canwi);
    // console.log('can height = ', canht);

    for (var zi = cdDataposcusttxnvol.length - 1; zi >= 0; zi--) {
      var thecLabel = cdDataposcusttxnvol[zi].label;
      var thecValue = cdDataposcusttxnvol[zi].value;
      // console.log(cdDataposcusttxnvol[zi]);

      var nel = document.createElement('div');
      nel.classList.add('tbubble');

      var nelspan = document.createElement('span');
      var nelspantxt = document.createTextNode(thecValue + "%");
      nelspan.appendChild(nelspantxt);
      nel.appendChild(nelspan);
      
      var nelem = document.createElement('em');
      var nelemtxt = document.createTextNode(thecLabel);
      nelem.appendChild(nelemtxt);
      nel.appendChild(nelem);

      eposcusttxnvol.appendChild(nel);

      switch(true) {
        case(thecValue < 25): 
          // console.log('this is 20 = ', thecValue);
          nel.classList.add('s1');
          nel.style.width = "50px";
          nel.style.height = "50px";
          break;
        case(thecValue < 50):
          // console.log('this is 40 = ', thecValue);
          nel.classList.add('s2');
          nel.style.width = "80px";
          nel.style.height = "80px";
          break;
        case(thecValue < 75):
          // console.log('this is 60 = ', thecValue);
          nel.classList.add('s3');
          nel.style.width = "120px";
          nel.style.height = "120px";
          break;
        case(thecValue <= 100):
          // console.log('this is 100 = ', thecValue);
          nel.classList.add('s4');
          nel.style.width = "160px";
          nel.style.height = "160px";
          break;
      }

      var xlocation = getRandomLoc(0, canwi - nel.offsetWidth);
      // console.log('thecLabel = ', thecLabel);
      // console.log('nel.offsetWidth = ', nel.offsetWidth);
      // console.log('nel.xlocation = ', xlocation);
      var ylocation = getRandomLoc(0, canht - nel.offsetHeight);
      // console.log('nel.offsetHeight = ', nel.offsetHeight);
      // console.log('nel.ylocation = ', ylocation);

      nel.style.left = xlocation + "px";
      nel.style.top = ylocation + "px";

      // thedatacolors
      var therealcolor = thedatacolors[Math.floor(Math.random()*thedatacolors.length)];
      // nel.style.backgroundColor = therealcolor; // Random color
      nel.style.backgroundColor = thedatacolors[zi];
      // console.log('var item = items[Math.floor(Math.random()*items.length)] = ', therealcolor);
    }
  }
 

}
function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}
function getRandomLoc(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
