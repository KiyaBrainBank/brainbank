import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {TreemapController, TreemapElement} from 'chartjs-chart-treemap';
@Component({
  selector: 'app-atmtransaction-analysis',
  templateUrl: './atmtransaction-analysis.component.html',
  styleUrls: ['./atmtransaction-analysis.component.sass']
})
export class AtmtransactionAnalysisComponent implements OnInit {
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
  eatmmixtxn :any;
  ctxatmmixtxn :any;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.eatmmixtxn = document.getElementById("catmATMMixTransactions");
    this.ctxatmmixtxn = this.eatmmixtxn.getContext("2d");

    var cdxyDataatmmixtxn = [
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
            ];

            var getArrayofColors = getthenewcolorarray();
           //this.generateTreeChart(this.ctxatmmixtxn,cdxyDataatmmixtxn)
  }

  // generateTreeChart(ctxatmmixtxn,cdxyDataatmmixtxn){
  //   
  //   var chartatmtopbotpervol = new Chart(ctxatmmixtxn, {
  //     type: 'treemap',
  //     data: lineChartData,
  //     // {
  //         // datasets: [
  //         //     tree: cdxyDataatmmixtxn,
  //         //     key: 'value',
  //         //     groups: ['category', 'value'],
  //         //     // backgroundColor: "#6CC4A1", final 
  //         //     // backgroundColor: [getthenewcolorarray],
  //         //     // backgroundColor: colorFromRaw, //final
  //         //     // backgroundColor: getthenewcolorarray,
  //         //     backgroundColor: function (ctx) {
  //         //         // console.log("ctx = back = ", getArrayofColors[ctx.index]);
  //         //         return getArrayofColors[ctx.index];
  //         //     }, 
  //             // labels: {
  //             //     display: true,
  //             //     color: "white",
  //             //     font: {
  //             //         size: 18,
  //             //         family: this.vrchartfont,
  //             //     },
  //             //     formatter: function(ctx) {
  //             //          console.log("ctx = ", ctx.raw._data.category);
  //             //         var tlb = ctx.raw._data.category;
  //             //         var tvl = ctx.raw.v;
  //             //          return 'The Label is = ' + tlb + ' ||| And the Value is = ' + tvl;
  //             //         return tlb;
  //             //     },
  //             // }
  //         // ]
          
      
  //     options: {
          
  //         plugins: {
  //             // datalabels: false,
  //             // legend: false,
  //             title: {
  //                 display: false,
  //                 text: "Transaction Mix",
  //                 color: this.title_charttitle2,
  //                 padding: {
  //                     bottom: 15,
  //                 },
  //                 font: {
  //                     family: this.vrchartfont,
  //                     size: 20,
  //                     weight: "500",
  //                 },
  //             }, // title
  //             tooltip: {
  //                 position: "nearest",
  //                 xAlign: "center",
  //                 yAlign: "bottom",
  //                 bodyFont: {
  //                     family: this.vrchartfont,
  //                 },
  //                 callbacks: {
  //                     label: function (cntxa) {
  //                         //console.log(cntx);
  //                         var tlba = cntxa.raw._data.category;
  //                         var tvla = cntxa.raw.v;
  //                         return tvla;
  //                         return cntxa;
  //                     },
  //                     title: function (cntxb) {
  //                         // console.log('title ',cntx);
  //                         // return "Channel - " + cntx[0].label;
  //                         // var tlbb = cntxb.raw._data.category;
  //                         // var tvlb = cntxb.raw.v;
  //                         // return tlbb;
  //                         var di = cntxb[0].dataIndex;
  //                         var dcat = cntxb[0].dataset.tree[di].category;
  //                         // console.log('index = ', cntxb[0].dataIndex);
  //                         // console.log('cntx = ', cntxb[0].dataset.tree[0].category);
  //                         return dcat;
  //                     },
  //                 },
  //                 padding: 10,
  //             }, // tooltip
  //         }, // plugins

  //     }, // options 
  // });

  // // var thebarc = document.getElementById("ctmtxnmixgradientbar");
  // // var thelegbar = getArrayofColors.length;
  // // // console.log('thelegbar = ', thelegbar);
  // // thebarc.style.background = "linear-gradient(90deg, "+ getArrayofColors[0] +", "+ getArrayofColors[thelegbar - 1] +")";
  // }
}
    


function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}
function getthenewcolorarray() {
  var newArrayGotIt = [];
  for (var zi = 0; zi < 10; zi++) {
      newArrayGotIt.push(adjustcolorme("#6CC4A1", -10 * zi));
      // console.log("the new color is = ", newArrayGotIt[zi]);
  }
  // console.log("RR newArrayGotIt = ", newArrayGotIt);
  return newArrayGotIt;
}
function adjustcolorme(color, amount) {
  // console.log("color = ", color);
  // console.log("amount = ", amount);
  return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}
