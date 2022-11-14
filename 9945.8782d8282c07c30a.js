"use strict";(self.webpackChunkbrainbank=self.webpackChunkbrainbank||[]).push([[9945],{9945:(C,v,r)=>{r.r(v),r.d(v,{PosCardUsageModule:()=>a});var t=r(6895),m=r(770),d=r(5311),e=r(4650),y=r(7999);const p=[{path:"",component:(()=>{class o{constructor(){this.vrchartfont="Avenir, Segoe UI, arial, sans-serif",this.dlbls_barvalue="#dddddd",this.title_charttitle="white",this.title_charttitle2="#666666",this.title_ylabel="white",this.title_xlabel="white",this.legend_textcolor="#dddddd",this.ygrid_bordercolor="#444444",this.ygrid_color="#444444",this.xgrid_bordercolor="#444444",this.xgrid_color="#444444",this.ytick_color="#aaa",this.xtick_color="#aaa"}ngOnInit(){}ngAfterViewInit(){this.eposcardtxnvol=document.getElementById("cposCardTxnVol"),this.ctxposcardtxnvol=this.eposcardtxnvol.getContext("2d"),this.generateLineCharts(this.ctxposcardtxnvol,["May 2021","June 2021","September 2021","December 2021","March 2022","June 2022","July 2022"],[{label:"Sales Value 1",data:[810,780,690,710,null,720,900],backgroundColor:"#6CC4A1",pointRadius:0,borderColor:"red",fill:!0}]),this.epostxnbyamount=document.getElementById("cposTxnByAmount"),this.ctxpostxnbyamount=this.epostxnbyamount.getContext("2d"),this.generateLineCharts2(this.ctxpostxnbyamount,["0-20","21-40","41-60","61-80","81-100","101-200","201-300","301-400","401-500","501-1000","> 1001"],[{label:"Cashback",data:[64945,96844,84316,92964,46234,98947,36035,30400,87920,90102,78920],backgroundColor:"#FFA500",borderColor:"#FFA500",pointRadius:0,tension:.1},{label:"Purchases",data:[45825,75729,66231,31368,66741,75215,34201,57839,58372,20103,89002],backgroundColor:"#B270A2",borderColor:"#B270A2",pointRadius:0,tension:.1},{label:"Refund",data:[63481,25489,45686,35209,30686,34010,30569,84728,45872,58892,89100],backgroundColor:"#6CC4A1",borderColor:"#6CC4A1",pointRadius:0,tension:.1}]),this.eposavgtxnamount=document.getElementById("cposAvgTxnAmount"),this.ctxposavgtxnamount=this.eposavgtxnamount.getContext("2d"),this.generateLineCharts3(this.ctxposavgtxnamount,["June 2021","July 2021","August 2021","September 2021","October 2021","November 2021","December 2021","January 2022","February 2022","March 2022","April 2022","May 2022"],[{label:"Credit",data:[1e3,1200,1400,4500,5e3,3e3,2002,4939,2002,4993,2920,4e3],backgroundColor:"#FFA500",borderColor:"#FFA500",pointRadius:0,tension:.1},{label:"Debit",data:[398,488,599,848,199,488,428,588,883,245,583,488],backgroundColor:"#B270A2",borderColor:"#B270A2",pointRadius:0,tension:.1}]),this.eposcardtypeusage=document.getElementById("cposCardTypeUsage"),this.ctxposcardtypeusage=this.eposcardtypeusage.getContext("2d"),this.generateBarCharts(this.ctxposcardtypeusage,["Master Card","Visa","American Express","Discover","Bank Card (Inactive)","Dankort","Private Label Card","China Union Pay","ATM","JCB"],[55.59,43.27,1.09,.04,.01,0,0,0,0,0,0])}generateLineCharts(n,l,g){new d.kL(n,{type:"line",data:{labels:l,datasets:g},options:{plugins:{legend:{display:!1},datalabels:{display:!1}},scales:{y:{beginAtZero:!0,ticks:{color:this.ytick_color,font:{family:this.vrchartfont}},grid:{borderColor:this.ygrid_bordercolor,color:this.ygrid_color}},x:{ticks:{color:this.xtick_color,font:{family:this.vrchartfont}},grid:{borderColor:"transparent",color:"transparent"}}}}})}generateLineCharts2(n,l,g){new d.kL(n,{type:"line",data:{labels:l,datasets:g},options:{plugins:{legend:{display:!0,position:"bottom",labels:{padding:20,color:this.legend_textcolor,font:{family:this.vrchartfont}}},title:{display:!1,text:"Transaction by Amount",color:this.title_charttitle,padding:{bottom:15},font:{family:this.vrchartfont,size:20,weight:"500"}},datalabels:{display:!1},tooltip:{position:"nearest",xAlign:"center",yAlign:"bottom",bodyFont:{family:this.vrchartfont},padding:10}},scales:{y:{beginAtZero:!0,title:{text:"Transactions",display:!0,color:this.title_ylabel,font:{size:14,family:this.vrchartfont}},ticks:{color:this.ytick_color,font:{family:this.vrchartfont}},grid:{borderColor:this.ygrid_bordercolor,color:this.ygrid_color}},x:{title:{text:"Amount",display:!0,color:this.title_xlabel,font:{size:14,family:this.vrchartfont}},ticks:{color:this.xtick_color,font:{family:this.vrchartfont}},grid:{borderColor:"transparent",color:"transparent"}}}}})}generateLineCharts3(n,l,g){new d.kL(n,{type:"line",data:{labels:l,datasets:g},options:{plugins:{legend:{display:!0,position:"bottom",labels:{padding:20,color:this.legend_textcolor,font:{family:this.vrchartfont}}},title:{display:!1,text:"Average Transaction Amount",color:this.title_charttitle,padding:{bottom:15},font:{family:this.vrchartfont,size:20,weight:"500"}},datalabels:{display:!1},tooltip:{position:"nearest",xAlign:"center",yAlign:"bottom",bodyFont:{family:this.vrchartfont},padding:10}},scales:{y:{beginAtZero:!0,ticks:{color:this.ytick_color,font:{family:this.vrchartfont}},grid:{borderColor:this.ygrid_bordercolor,color:this.ygrid_color}},x:{ticks:{color:this.xtick_color,font:{family:this.vrchartfont}},grid:{borderColor:"transparent",color:"transparent"}}}}})}generateBarCharts(n,l,g){new d.kL(n,{type:"bar",data:{labels:l,datasets:[{label:"Card Usage",data:g,backgroundColor:["rgb(55, 82, 146)"]}]},options:{indexAxis:"y",plugins:{legend:{display:!1},title:{display:!1,text:"Card Type Usage",color:this.title_charttitle,padding:{bottom:15},font:{family:this.vrchartfont,size:20,weight:"500"}},datalabels:{color:this.dlbls_barvalue,align:"right",anchor:"end",font:{family:this.vrchartfont},formatter:function(h,x){return(Math.round(100*h)/100).toFixed(2)+"%"}},tooltip:{position:"nearest",xAlign:"left",yAlign:"center",bodyFont:{family:this.vrchartfont},callbacks:{label:function(h){return h.parsed.x+"%"},title:function(h){return h[0].label}},padding:10}},scales:{y:{beginAtZero:!0,ticks:{color:this.ytick_color,font:{family:this.vrchartfont}},grid:{borderColor:this.ygrid_bordercolor,color:this.ygrid_color}},x:{ticks:{color:this.xtick_color,font:{family:this.vrchartfont}},grid:{borderColor:"transparent",color:"transparent"}}}}})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-pos-card-usage"]],decls:55,vars:1,consts:[[1,"right-main-column"],[1,"right-col-container","pad-b"],[1,"body-page-container"],[1,"container-fluid"],[1,"row"],[1,"col-12"],[3,"item"],[1,"whitecard","no-bg"],[1,"center-div"],[1,"col-sm-12","col-12","col-md-12"],[1,"bg-white1","dark-bg"],[1,"row","mb-4"],[1,"light-text"],[1,"col-12","col-md-8","m-auto"],[1,"chart-box"],[1,"chart-area"],["id","cposCardTxnVol","width","600","height","400"],["id","cposTxnByAmount","width","600","height","400"],["id","cposAvgTxnAmount","width","600","height","400"],["id","cposCardTypeUsage","width","600","height","400"]],template:function(n,l){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"app-userdetails",6),e.TgZ(7,"div",4)(8,"div",7)(9,"div",8)(10,"div",4)(11,"div",9)(12,"div",10)(13,"div",11)(14,"div",5)(15,"h2",12),e._uU(16,"Card Transaction Volume"),e.qZA()()(),e.TgZ(17,"div",4)(18,"div",13)(19,"div",14)(20,"div",15),e._UZ(21,"canvas",16),e.qZA()()()()()(),e.TgZ(22,"div",9)(23,"div",10)(24,"div",11)(25,"div",9)(26,"h2",12),e._uU(27,"Transactions by $Amount "),e.qZA()()(),e.TgZ(28,"div",4)(29,"div",13)(30,"div",14)(31,"div",15),e._UZ(32,"canvas",17),e.qZA()()()()()(),e.TgZ(33,"div",9)(34,"div",10)(35,"div",11)(36,"div",9)(37,"h2",12),e._uU(38,"Average Transactions Amount "),e.qZA()()(),e.TgZ(39,"div",4)(40,"div",13)(41,"div",14)(42,"div",15),e._UZ(43,"canvas",18),e.qZA()()()()()(),e.TgZ(44,"div",9)(45,"div",10)(46,"div",11)(47,"div",9)(48,"h2",12),e._uU(49,"Card Type Usage "),e.qZA()()(),e.TgZ(50,"div",4)(51,"div",13)(52,"div",14)(53,"div",15),e._UZ(54,"canvas",19),e.qZA()()()()()()()()()()()()()()()()),2&n&&(e.xp6(6),e.Q6J("item","POS"))},dependencies:[y.w]}),o})()}];let i=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.Bz.forChild(p),m.Bz]}),o})();var u=r(8524);let a=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[t.ez,i,u.v,u.v]}),o})()},7999:(C,v,r)=>{r.d(v,{w:()=>p});var t=r(4650),m=r(770),d=r(6895);function e(i,u){1&i&&t._UZ(0,"i")}function y(i,u){if(1&i){const a=t.EpF();t.TgZ(0,"li")(1,"a",20),t.NdJ("click",function(){const n=t.CHM(a).$implicit,l=t.oxw(3);return t.KtG(l.goToPage(n.route))}),t._uU(2),t.qZA()()}if(2&i){const a=u.$implicit;t.xp6(2),t.Oqu(a.menuName)}}function f(i,u){if(1&i&&(t.TgZ(0,"div",15)(1,"ul",16)(2,"li",17)(3,"ul",18),t.YNc(4,y,3,1,"li",19),t.qZA()()()()),2&i){const a=t.oxw().$implicit;t.xp6(4),t.Q6J("ngForOf",a.subMenu)}}function s(i,u){if(1&i){const a=t.EpF();t.TgZ(0,"div",10)(1,"div",11)(2,"a",12),t.NdJ("click",function(){const n=t.CHM(a).$implicit,l=t.oxw();return t.KtG(l.goToPage(n.route))}),t.TgZ(3,"em"),t._uU(4),t.qZA(),t.YNc(5,e,1,0,"i",13),t.qZA(),t.YNc(6,f,5,1,"div",14),t.qZA()()}if(2&i){const a=u.$implicit,o=t.oxw();t.Q6J("ngClass",a.menuName==o.selectedMenuName?"active-bar":""),t.xp6(4),t.Oqu(a.menuName),t.xp6(1),t.Q6J("ngIf",(null==a?null:a.subMenu.length)>0),t.xp6(1),t.Q6J("ngIf",(null==a?null:a.subMenu.length)>0)}}let p=(()=>{class i{constructor(a){this.route=a}ngOnInit(){console.log("item",this.item),this.selectedMenuName=this.item,this.mainMenuList=[{Status:"Active",menuName:"Channel Analytics",route:"dashboard",subMenu:[]},{Status:"Active",menuName:"Digital Payments",route:"digitalpayment",subMenu:[]},{Status:"Active",menuName:"ATM",subMenu:[{Status:"Active",menuName:"Main Menu",route:"atm"},{Status:"Active",menuName:"ATM Profile",route:"atmprofile"},{Status:"Active",menuName:"ATM Placement",route:"atmplacement"},{Status:"Active",menuName:"ATM Transaction Analysis",route:"atmtransaction-analysis"}]},{Status:"Active",menuName:"POS",subMenu:[{Status:"Active",menuName:"Main Menu",route:"posmainmenu"},{Status:"Active",menuName:"Card Usage",route:"poscardusage"},{Status:"Active",menuName:"Merchant Analysis",route:"posmerchantanalysis"}]}]}goToPage(a){this.route.navigate(["/"+a])}}return i.\u0275fac=function(a){return new(a||i)(t.Y36(m.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-userdetails"]],inputs:{item:"item"},decls:27,vars:1,consts:[[1,"row"],[1,"whitecard"],[1,"center-div"],[1,"row","mb-2"],[1,"slide-text"],[1,"marquee-list"],["src","assets/images/svg/go-up1.svg","alt","icon"],["src","assets/images/svg/go-down.svg","alt","icon"],[1,"col-12","col-md-12"],["class","language-bar",3,"ngClass",4,"ngFor","ngForOf"],[1,"language-bar",3,"ngClass"],[1,"lang-dropdown"],[1,"btn-selectlang",3,"click"],[4,"ngIf"],["class","language-list","style","display: none;",4,"ngIf"],[1,"language-list",2,"display","none"],[1,"lst-languages"],[1,"list-nh"],[1,"dropdown-sub"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(a,o){1&a&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"div",3)(4,"div",4)(5,"marquee")(6,"div",0)(7,"ul",5)(8,"li")(9,"em"),t._uU(10,"Top Payee App"),t.qZA()(),t.TgZ(11,"li")(12,"em"),t._uU(13,"Google Pay 29.66 % "),t._UZ(14,"img",6),t.qZA()(),t.TgZ(15,"li")(16,"em"),t._uU(17,"BHIM YES Pay 39.72 % "),t._UZ(18,"img",7),t.qZA()(),t.TgZ(19,"li")(20,"em"),t._uU(21,"Other Payee Apps 45.22 % "),t._UZ(22,"img",7),t.qZA()()()()()()(),t.TgZ(23,"div",2)(24,"div",0)(25,"div",8),t.YNc(26,s,7,4,"div",9),t.qZA()()()()()),2&a&&(t.xp6(26),t.Q6J("ngForOf",o.mainMenuList))},dependencies:[d.mk,d.sg,d.O5]}),i})()},8524:(C,v,r)=>{r.d(v,{v:()=>f});var t=r(6895),m=r(770),d=r(4650);const e=[];let y=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=d.oAB({type:s}),s.\u0275inj=d.cJS({imports:[m.Bz.forChild(e),m.Bz]}),s})(),f=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=d.oAB({type:s}),s.\u0275inj=d.cJS({imports:[t.ez,y]}),s})()}}]);