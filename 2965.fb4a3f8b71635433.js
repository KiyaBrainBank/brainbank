"use strict";(self.webpackChunkbrainbank=self.webpackChunkbrainbank||[]).push([[2965],{2965:(J,x,c)=>{c.r(x),c.d(x,{DashboardModule:()=>P});var m=c(6895),D=c(770),v=c(5311),N=c(7154),e=c(4650),w=c(7999),h=c(4016);function k(o,d){if(1&o){const r=e.EpF();e.TgZ(0,"li",88)(1,"a",89),e.NdJ("click",function(){const t=e.CHM(r).$implicit,n=e.oxw();return e.KtG(n.activetab(t))}),e.TgZ(2,"em"),e._uU(3),e.ALo(4,"uppercase"),e.qZA()()()}if(2&o){const r=d.$implicit,i=e.oxw();e.Q6J("ngClass",i.activeTabName==r?"active":""),e.xp6(3),e.Oqu(e.lcZ(4,2,r))}}function g(o){var d=o.toString().split(".");return d[0]=d[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),d.join(".")}const B=[{path:"",component:(()=>{class o{constructor(){this.tablist=["atm","pos","online","mobile"],this.vrchartfont="Avenir, Segoe UI, arial, sans-serif",this.dlbls_barvalue="#dddddd",this.title_charttitle="white",this.title_ylabel="white",this.title_xlabel="white",this.legend_textcolor="#dddddd",this.ygrid_bordercolor="#444444",this.ygrid_color="#444444",this.xgrid_bordercolor="#444444",this.xgrid_color="#444444",this.ytick_color="#aaa",this.xtick_color="#aaa",this.activeTabName="atm",this.ctvChartDataTitle=[{transactionVolumeHourly:{titleText:"Transaction Volume Hourly",yAxistext:"Number of Customers",xAxistext:"Channels"},customerOverview:{titleText:"Customer Overview",yAxistext:"Number of Customers",xAxistext:"Channels"}}],this.graphOptions=[{transactionVolumeHourly:{responsive:!0,maintainAspectRatio:!1,max:4e4,min:0},customerOverview:{responsive:!0,maintainAspectRatio:!0,max:2e6,min:0}}]}ngOnInit(){}ngAfterViewInit(){this.activetab("atm")}activetab(r){this.activeTabName=r,this.ccanv="",this.ctxctvh="";let i=[],a=[];switch(r){case"atm":console.log(`tab value${r}`),this.ccanv=document.getElementById("caTransVolHistory"),this.ctxctvh=this.ccanv.getContext("2d"),i=["N01","N02","N03","N04","N05","N06","N07","N09","N08","N10","N11","N12","N13","N14","N15","N16","N18","N17","N19","N20","N21","N22","N23","N24"],a=[{label:"Transaction Amount",data:[5e3,9500,4400,6400,8500,11900,5e3,32e3,1e4,25e3,35e3,5e3,2e4,29e3,22e3,3e4,5e3,3e4,24e3,1e4,5e3,14e3,22e3,2e4],backgroundColor:["#0096FF"]}],this.generateCharts(this.ctxctvh,i,a,this.ctvChartDataTitle[0].transactionVolumeHourly,this.graphOptions[0].transactionVolumeHourly),this.custOverviewCanvas=document.getElementById("caCustOverview"),console.log(this.custOverviewCanvas+"2nd graph"),this.ctxCustOverviewCanvas=this.custOverviewCanvas.getContext("2d"),i=["Online","Mobile","ATM","POS"],a=[{label:"Last Completed Week",backgroundColor:"#A2B5BB",data:[1061004,1717591,89e3,9e4],maxBarThickness:50},{label:"Previous Week",backgroundColor:"#495C83",data:[1057305,1715957,1e5,78e3],maxBarThickness:50}],this.generateCharts(this.ctxCustOverviewCanvas,i,a,this.ctvChartDataTitle[0].customerOverview,this.graphOptions[0].customerOverview),this.caPerDifferenceCanvas=document.getElementById("caPerDifference"),this.ctxcaPerDifferenceCanvas=this.caPerDifferenceCanvas.getContext("2d"),this.createChartPerDifference(this.ctxcaPerDifferenceCanvas,["Online","Mobile","ATM","POS"],[{label:"Percentage Difference",backgroundColor:"#FFA500",data:[.35,.1,-11,15.3],maxBarThickness:50}]),this.channelsUsedByCustomersCanvas=document.getElementById("caNoChannelsUsers"),this.ctxChannelsUsedByCustomersCanvas=this.channelsUsedByCustomersCanvas.getContext("2d"),this.createChartNoChannelsUsers(this.ctxChannelsUsedByCustomersCanvas,["Customer Distribution","Transaction Value Distribution","Transaction Volume Distribution"],[{label:"Customer Used 1 Channel",backgroundColor:"#FF8FB1",data:[42,20,20],maxBarThickness:50},{label:"Customer Used 2 Channels",backgroundColor:"#B270A2",data:[45,70,70],maxBarThickness:50},{label:"Customer Used 3 Channels",backgroundColor:"#7A4495",data:[0,14,18],maxBarThickness:50}]);break;case"pos":this.ccanv=document.getElementById("caTransVolHistory2"),console.log(this.ccanv+"1st graph"),this.ctxctvh=this.ccanv.getContext("2d"),i=["N01","N02","N03","N04","N05","N06","N07","N09","N08","N10","N11","N12","N13","N14","N15","N16","N18","N17","N19","N20","N21","N22","N23","N24"],a=[{label:"Transaction Amount",data:[2e3,4500,1400,4400,5500,4900,7e3,12e3,2e4,15e3,15e3,15e3,23e3,21e3,2e4,2e4,11e3,2e4,13e3,29e3,8e3,15e3,21e3,25e3],backgroundColor:["#0096FF"]}],this.generateCharts(this.ctxctvh,i,a,this.ctvChartDataTitle[0].transactionVolumeHourly,this.graphOptions[0].transactionVolumeHourly),this.custOverviewCanvas=document.getElementById("caCustOverview02"),this.ctxCustOverviewCanvas=this.custOverviewCanvas.getContext("2d"),i=["Online","Mobile","ATM","POS"],a=[{label:"Last Completed Week",backgroundColor:"#A2B5BB",data:[1161004,917591,1921e3,8e4],maxBarThickness:50},{label:"Previous Week",backgroundColor:"#495C83",data:[1257305,1115957,122e3,78010],maxBarThickness:50}],this.generateCharts(this.ctxCustOverviewCanvas,i,a,this.ctvChartDataTitle[0].customerOverview,this.graphOptions[0].customerOverview),this.caPerDifferenceCanvas=document.getElementById("caPerDifference02"),this.ctxcaPerDifferenceCanvas=this.caPerDifferenceCanvas.getContext("2d"),this.createChartPerDifference(this.ctxcaPerDifferenceCanvas,["Online","Mobile","ATM","POS"],[{label:"Percentage Difference",backgroundColor:"#FFA500",data:[10.35,18.1,-8,11.3],maxBarThickness:50}]),this.channelsUsedByCustomersCanvas=document.getElementById("caNoChannelsUsers02"),this.ctxChannelsUsedByCustomersCanvas=this.channelsUsedByCustomersCanvas.getContext("2d"),this.createChartNoChannelsUsers(this.ctxChannelsUsedByCustomersCanvas,["Customer Distribution","Transaction Value Distribution","Transaction Volume Distribution"],[{label:"Customer Used 1 Channel",backgroundColor:"#FF8FB1",data:[42,20,20],maxBarThickness:50},{label:"Customer Used 2 Channels",backgroundColor:"#B270A2",data:[45,70,70],maxBarThickness:50},{label:"Customer Used 3 Channels",backgroundColor:"#7A4495",data:[0,14,18],maxBarThickness:50}]);break;case"online":this.ccanv=document.getElementById("caTransVolHistory3"),this.ctxctvh=this.ccanv.getContext("2d"),i=["N01","N02","N03","N04","N05","N06","N07","N09","N08","N10","N11","N12","N13","N14","N15","N16","N18","N17","N19","N20","N21","N22","N23","N24"],a=[{label:"Transaction Amount",data:[2e3,1500,6400,1400,2200,5600,12200,5e3,25e3,35e3,15e3,35e3,3e3,3e3,3e4,34e3,3e3,2e4,33e3,9e3,32e3,25e3,15e3,5e3],backgroundColor:["#0096FF"]}],this.generateCharts(this.ctxctvh,i,a,this.ctvChartDataTitle[0].transactionVolumeHourly,this.graphOptions[0].transactionVolumeHourly),this.custOverviewCanvas=document.getElementById("caCustOverview03"),this.ctxCustOverviewCanvas=this.custOverviewCanvas.getContext("2d"),i=["Online","Mobile","ATM","POS"],a=[{label:"Last Completed Week",backgroundColor:"#A2B5BB",data:[1161004,917591,1921e3,8e4],maxBarThickness:50},{label:"Previous Week",backgroundColor:"#495C83",data:[1257305,1115957,122e3,78010],maxBarThickness:50}],this.generateCharts(this.ctxCustOverviewCanvas,i,a,this.ctvChartDataTitle[0].customerOverview,this.graphOptions[0].customerOverview),this.caPerDifferenceCanvas=document.getElementById("caPerDifference03"),this.ctxcaPerDifferenceCanvas=this.caPerDifferenceCanvas.getContext("2d"),this.createChartPerDifference(this.ctxcaPerDifferenceCanvas,["Online","Mobile","ATM","POS"],[{label:"Percentage Difference",backgroundColor:"#FFA500",data:[10.35,18.1,-8,11.3],maxBarThickness:50}]),this.channelsUsedByCustomersCanvas=document.getElementById("caNoChannelsUsers03"),this.ctxChannelsUsedByCustomersCanvas=this.channelsUsedByCustomersCanvas.getContext("2d"),this.createChartNoChannelsUsers(this.ctxChannelsUsedByCustomersCanvas,["Customer Distribution","Transaction Value Distribution","Transaction Volume Distribution"],[{label:"Customer Used 1 Channel",backgroundColor:"#FF8FB1",data:[42,20,20],maxBarThickness:50},{label:"Customer Used 2 Channels",backgroundColor:"#B270A2",data:[45,70,70],maxBarThickness:50},{label:"Customer Used 3 Channels",backgroundColor:"#7A4495",data:[0,14,18],maxBarThickness:50}]);break;case"mobile":this.ccanv=document.getElementById("caTransVolHistory4"),this.ctxctvh=this.ccanv.getContext("2d"),i=["N01","N02","N03","N04","N05","N06","N07","N09","N08","N10","N11","N12","N13","N14","N15","N16","N18","N17","N19","N20","N21","N22","N23","N24"],a=[{label:"Transaction Amount",data:[5e3,9500,4400,6400,8500,11900,5e3,32e3,1e4,25e3,35e3,5e3,2e4,29e3,22e3,3e4,5e3,3e4,24e3,1e4,5e3,14e3,22e3,2e4],backgroundColor:["#0096FF"]}],this.generateCharts(this.ctxctvh,i,a,this.ctvChartDataTitle[0].transactionVolumeHourly,this.graphOptions[0].transactionVolumeHourly),this.custOverviewCanvas=document.getElementById("caCustOverview04"),this.ctxCustOverviewCanvas=this.custOverviewCanvas.getContext("2d"),i=["Online","Mobile","ATM","POS"],a=[{label:"Last Completed Week",backgroundColor:"#A2B5BB",data:[1161004,917591,1921e3,8e4],maxBarThickness:50},{label:"Previous Week",backgroundColor:"#495C83",data:[1257305,1115957,122e3,78010],maxBarThickness:50}],this.generateCharts(this.ctxCustOverviewCanvas,i,a,this.ctvChartDataTitle[0].customerOverview,this.graphOptions[0].customerOverview),this.caPerDifferenceCanvas=document.getElementById("caPerDifference04"),this.ctxcaPerDifferenceCanvas=this.caPerDifferenceCanvas.getContext("2d"),this.createChartPerDifference(this.ctxcaPerDifferenceCanvas,["Online","Mobile","ATM","POS"],[{label:"Percentage Difference",backgroundColor:"#FFA500",data:[10.35,18.1,-8,11.3],maxBarThickness:50}]),this.channelsUsedByCustomersCanvas=document.getElementById("caNoChannelsUsers04"),this.ctxChannelsUsedByCustomersCanvas=this.channelsUsedByCustomersCanvas.getContext("2d"),this.createChartNoChannelsUsers(this.ctxChannelsUsedByCustomersCanvas,["Customer Distribution","Transaction Value Distribution","Transaction Volume Distribution"],[{label:"Customer Used 1 Channel",backgroundColor:"#FF8FB1",data:[42,20,20],maxBarThickness:50},{label:"Customer Used 2 Channels",backgroundColor:"#B270A2",data:[45,70,70],maxBarThickness:50},{label:"Customer Used 3 Channels",backgroundColor:"#7A4495",data:[0,14,18],maxBarThickness:50}])}}generateCharts(r,i,a,t,n){v.kL.register(N.Z),new v.kL(r,{type:"bar",data:{labels:i,datasets:a},options:{responsive:n.responsive,maintainAspectRatio:n.maintainAspectRatio,plugins:{legend:{display:!1},title:{display:!1,text:t.titleText,color:this.title_charttitle,padding:{bottom:15},font:{family:this.vrchartfont,size:20,weight:"500"}},annotation:{annotations:{line1:{type:"line",yMin:2500,yMax:35e3,borderColor:"#e51529",borderWidth:1}}},datalabels:{color:this.dlbls_barvalue,align:"top",anchor:"end",font:{family:this.vrchartfont},formatter:function(s,u){return g(s)}},tooltip:{position:"nearest",xAlign:"center",yAlign:"bottom",callbacks:{label:function(s){return console.log(t.titleText),"Transaction Volume Hourly"==t.titleText?" Amount $ "+g(s.parsed.y):" "+g(s.parsed.y)},title:function(s){return"Transaction Volume Hourly"==t.titleText?"Hour - "+s[0].label:"Channel - "+s[0].label}},padding:10}},scales:{y:{title:{text:t.yAxistext,display:!0,color:this.title_ylabel,font:{size:14,family:this.vrchartfont}},beginAtZero:!0,ticks:{color:this.title_xlabel,font:{family:this.vrchartfont},callback:function(s,u,Z){return"Transaction Volume Hourly"==t.titleText?"$ "+g(s):g(s)}},grid:{borderColor:"transparent",color:"#444"},max:n.max,min:n.min},x:{title:{text:t.xAxistext,display:!0,color:this.title_xlabel,font:{size:14,family:this.vrchartfont}},ticks:{color:this.xtick_color,font:{family:this.vrchartfont}},grid:{borderColor:this.xgrid_bordercolor,color:"transparent"}}}}})}createChartPerDifference(r,i,a){new v.kL(r,{type:"bar",data:{labels:i,datasets:a},options:{responsive:!0,plugins:{legend:{display:!1},title:{display:!1,text:"Percentage Difference",color:this.title_charttitle,padding:{bottom:15},font:{family:this.vrchartfont,size:20,weight:"500"}},annotation:{annotations:{line1:{type:"line",yMin:0,yMax:0,borderColor:"#999",borderWidth:1}}},datalabels:{color:this.dlbls_barvalue,align:function(n){return n.dataset.data[n.dataIndex]>0?"top":"bottom"},anchor:function(n){return n.dataset.data[n.dataIndex]>0?"end":"start"},font:{family:this.vrchartfont},formatter:function(n,l){return g(n)+" %"}},tooltip:{position:"nearest",xAlign:"center",yAlign:"bottom",bodyFont:{family:this.vrchartfont},padding:10,callbacks:{label:function(n){return"Percentage Difference "+n.parsed.y+"%"}}}},scales:{y:{title:{text:"Percentage",display:!0,color:this.title_ylabel,font:{family:this.vrchartfont}},ticks:{color:this.ytick_color,font:{family:this.vrchartfont},callback:function(n,l,s){return n+" %"}},grid:{borderColor:"transparent",color:this.ygrid_color}},x:{ticks:{color:this.xtick_color,font:{family:this.vrchartfont}},grid:{borderColor:this.xgrid_bordercolor,color:"transparent"}}}}})}createChartNoChannelsUsers(r,i,a){new v.kL(r,{type:"bar",data:{labels:i,datasets:a},options:{responsive:!0,plugins:{legend:{labels:{padding:10,color:this.legend_textcolor,font:{family:this.vrchartfont}}},annotation:{annotations:{line1:{type:"line",xMin:0,xMax:2,yMin:45,yMax:70,borderColor:"#B270A2",borderWidth:1}}},datalabels:{color:this.dlbls_barvalue,align:"top",anchor:"end",font:{family:this.vrchartfont},formatter:function(n,l){return 0==n?"":n+" %"}},title:{display:!1,text:"No of Channels Used by Customers",color:this.title_charttitle,padding:{bottom:15},font:{family:this.vrchartfont,size:20,weight:"500"}},tooltip:{position:"nearest",xAlign:"center",yAlign:"bottom",bodyFont:{family:this.vrchartfont},padding:10,callbacks:{label:function(n){return n.dataset.label+" "+n.parsed.y+"%"}}}},scales:{y:{beginAtZero:!0,title:{text:"Percentage",display:!0,color:this.title_ylabel,font:{family:this.vrchartfont}},ticks:{color:this.ytick_color,font:{family:this.vrchartfont},callback:function(n,l,s){return n+" %"}},grid:{borderColor:this.ygrid_bordercolor,color:this.ygrid_color},max:100,min:0},x:{title:{text:"Machine Type - Mobile",display:!0,color:this.title_xlabel,font:{family:this.vrchartfont}},ticks:{color:this.xtick_color,font:{family:this.vrchartfont}},grid:{borderColor:this.xgrid_bordercolor,color:this.xgrid_color}}}}})}fromDateChange(r){}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-dashboard"]],decls:813,vars:70,consts:[[1,"right-main-column"],[1,"right-col-container","pad-b"],[1,"body-page-container"],[1,"container-fluid"],[1,"row"],[1,"col-12"],[3,"item"],[1,"whitecard","no-bg"],[1,"center-div"],[1,"col-sm-12","col-12","col-md-12"],[1,""],[1,"col-sm-12","col-12","col-md-8"],[1,"responsive-tab"],[1,"custom-width"],["role","tablist",1,"tabs","tab2","info-list1"],["role","presentation",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-12","col-md-12"],["id","atm",1,"panel","entry-content1","tab-pane",3,"hidden"],[1,"bg-white1","dark-bg"],[1,"col-6"],[1,"light-text"],[1,"filter-list-info","mar-t"],["href","#",1,"calender-btn"],[1,"icon"],["src","assets/images/svg/calendar.svg","alt","calender-icon"],[1,"slidefilter-container"],[1,"filter-box"],[1,"filter-content"],[1,"col-12","col-md-7"],[1,"ux-input"],["type","text","placeholder","DD/MM/YYYY",3,"owlDateTime","owlDateTimeTrigger","ngModelChange"],[3,"pickerType"],["dt1",""],[1,"calendar-ic","cal-top",3,"owlDateTimeTrigger"],[1,"col-12","col-md-5"],["type","text","placeholder","HH:MM",3,"owlDateTime","owlDateTimeTrigger","ngModelChange"],["dt3",""],["dt2",""],["dt4",""],[1,"filter-footer"],[1,"col-6","text-center"],["href","javascript:;",1,"ux-button","secondary","sm3","float-left"],["href","javascript:;",1,"ux-button","primary","sm3","float-right"],[1,"status-info"],["href","#",1,"filter-btn"],["src","assets/images/svg/filter.svg","alt","filter-icon"],[1,"filter-section"],[1,"lst-filter"],["href","#",1,"common-action"],[1,"chart-box"],[1,"chart-area"],["id","caTransVolHistory","width","600","height","450"],["id","caCustOverview","width","300","height","100"],[1,"cachartdatatable"],[1,"ind1"],[1,"ind2"],["id","caPerDifference","width","300","height","100"],[1,"cachartdatatable","tblperdiff"],[1,"ind3"],["id","caNoChannelsUsers","width","300","height","100"],["id","pos",1,"panel","entry-content1","tab-pane",3,"hidden"],["dt5",""],["dt6",""],["dt7",""],[1,"ux-input","bootstrap-timepicker","timepicker"],["dt8",""],["id","caTransVolHistory2","width","600","height","450"],["id","caCustOverview02","width","300","height","100"],["id","caPerDifference02","width","300","height","100"],["id","caNoChannelsUsers02","width","300","height","100"],["id","online",1,"panel","entry-content1","tab-pane",3,"hidden"],["dt08",""],["dt9",""],["dt10",""],["dt11",""],["id","caTransVolHistory3","width","600","height","450"],["id","caCustOverview03","width","300","height","100"],["id","caPerDifference03","width","300","height","100"],["id","caNoChannelsUsers03","width","300","height","100"],["id","mobile",1,"panel","entry-content1","tab-pane",3,"hidden"],["dt12",""],["dt23",""],["dt32",""],["dt44",""],["id","caTransVolHistory4","width","600","height","450"],["id","caCustOverview04","width","300","height","100"],["id","caPerDifference04","width","300","height","100"],["id","caNoChannelsUsers04","width","300","height","100"],["role","presentation",3,"ngClass"],[1,"nav-link",3,"click"]],template:function(r,i){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"app-userdetails",6),e.TgZ(7,"div",4)(8,"div",7)(9,"div",8)(10,"div",4)(11,"div",9)(12,"div",10)(13,"div",4)(14,"div",11)(15,"div",12)(16,"div",13)(17,"ul",14),e.YNc(18,k,5,4,"li",15),e.qZA()()()()(),e.TgZ(19,"div",4)(20,"div",16)(21,"div",17)(22,"div",4)(23,"div",5)(24,"div",18)(25,"div",4)(26,"div",19)(27,"h2",20),e._uU(28," Transaction Volume Hourly "),e.qZA()(),e.TgZ(29,"div",19)(30,"ul",21)(31,"li")(32,"a",22)(33,"div",23),e._UZ(34,"img",24),e.qZA()(),e.TgZ(35,"div",25)(36,"div",26)(37,"div",27)(38,"div",4)(39,"div",28)(40,"div",29)(41,"label"),e._uU(42,"From Date"),e.qZA(),e.TgZ(43,"input",30),e.NdJ("ngModelChange",function(t){return i.fromDateChange(t)}),e.qZA(),e._UZ(44,"owl-date-time",31,32)(46,"em",33),e.qZA()(),e.TgZ(47,"div",34)(48,"div",29)(49,"label"),e._uU(50,"Time"),e.qZA(),e.TgZ(51,"input",35),e.NdJ("ngModelChange",function(t){return i.fromDateChange(t)}),e.qZA(),e._UZ(52,"owl-date-time",31,36)(54,"em",33),e.qZA()()(),e.TgZ(55,"div",4)(56,"div",28)(57,"div",29)(58,"label"),e._uU(59,"To Date"),e.qZA(),e.TgZ(60,"input",30),e.NdJ("ngModelChange",function(t){return i.fromDateChange(t)}),e.qZA(),e._UZ(61,"owl-date-time",31,37)(63,"em",33),e.qZA()(),e.TgZ(64,"div",34)(65,"div",29)(66,"label"),e._uU(67,"Time"),e.qZA(),e.TgZ(68,"input",35),e.NdJ("ngModelChange",function(t){return i.fromDateChange(t)}),e.qZA(),e._UZ(69,"owl-date-time",31,38)(71,"em",33),e.qZA()()()()(),e.TgZ(72,"div",39)(73,"div",4)(74,"div",40)(75,"a",41),e._uU(76,"Reset"),e.qZA()(),e.TgZ(77,"div",40)(78,"a",42),e._uU(79,"Apply"),e.qZA()()()()()(),e.TgZ(80,"li")(81,"div",43)(82,"em"),e._uU(83,"Live"),e.qZA()()(),e.TgZ(84,"li")(85,"a",44)(86,"div",23),e._UZ(87,"img",45),e.qZA()(),e.TgZ(88,"div",46)(89,"ul",47)(90,"li")(91,"a",48),e._uU(92," UPI "),e.qZA()(),e.TgZ(93,"li")(94,"a",48),e._uU(95," NEFT "),e.qZA()(),e.TgZ(96,"li")(97,"a",48),e._uU(98," RTGS "),e.qZA()(),e.TgZ(99,"li")(100,"a",48),e._uU(101," IMPS "),e.qZA()()()()()()()(),e.TgZ(102,"div")(103,"div",49)(104,"div",50),e._UZ(105,"canvas",51),e.qZA()()()()()(),e.TgZ(106,"div",4)(107,"div",9)(108,"div",18)(109,"div",4)(110,"div",5)(111,"h2",20),e._uU(112,"Customer Overview"),e.qZA(),e.TgZ(113,"div",49)(114,"div",50),e._UZ(115,"canvas",52),e.TgZ(116,"div",53)(117,"table")(118,"tr"),e._UZ(119,"th"),e.TgZ(120,"th")(121,"em"),e._uU(122,"Online"),e.qZA()(),e.TgZ(123,"th")(124,"em"),e._uU(125,"Mobile"),e.qZA()(),e.TgZ(126,"th")(127,"em"),e._uU(128,"ATM"),e.qZA()(),e.TgZ(129,"th")(130,"em"),e._uU(131,"POS"),e.qZA()()(),e.TgZ(132,"tr")(133,"td")(134,"em"),e._UZ(135,"i",54),e._uU(136,"Number of Customers in Last Completed Week"),e.qZA()(),e.TgZ(137,"td")(138,"em"),e._uU(139,"1,061,004"),e.qZA()(),e.TgZ(140,"td")(141,"em"),e._uU(142,"1,717,591"),e.qZA()(),e.TgZ(143,"td")(144,"em"),e._uU(145,"89,000"),e.qZA()(),e.TgZ(146,"td")(147,"em"),e._uU(148,"90,000"),e.qZA()()(),e.TgZ(149,"tr")(150,"td")(151,"em"),e._UZ(152,"i",55),e._uU(153,"Average Number of Customers in Previous Week"),e.qZA()(),e.TgZ(154,"td")(155,"em"),e._uU(156,"1,057,305"),e.qZA()(),e.TgZ(157,"td")(158,"em"),e._uU(159,"1,715,957"),e.qZA()(),e.TgZ(160,"td")(161,"em"),e._uU(162,"1,00,000"),e.qZA()(),e.TgZ(163,"td")(164,"em"),e._uU(165,"78,000"),e.qZA()()()()()()()()()()()(),e.TgZ(166,"div",4)(167,"div",9)(168,"div",18)(169,"div",4)(170,"div",5)(171,"h2",20),e._uU(172,"Percetage Difference"),e.qZA(),e.TgZ(173,"div",49)(174,"div",50),e._UZ(175,"canvas",56),e.TgZ(176,"div",57)(177,"table")(178,"tr"),e._UZ(179,"th"),e.TgZ(180,"th")(181,"em"),e._uU(182,"Online"),e.qZA()(),e.TgZ(183,"th")(184,"em"),e._uU(185,"Mobile"),e.qZA()(),e.TgZ(186,"th")(187,"em"),e._uU(188,"ATM"),e.qZA()(),e.TgZ(189,"th")(190,"em"),e._uU(191,"POS"),e.qZA()()(),e.TgZ(192,"tr")(193,"td")(194,"em"),e._UZ(195,"i",58),e._uU(196,"Percentage Difference"),e.qZA()(),e.TgZ(197,"td")(198,"em"),e._uU(199,"0.35%"),e.qZA()(),e.TgZ(200,"td")(201,"em"),e._uU(202,"0.10%"),e.qZA()(),e.TgZ(203,"td")(204,"em"),e._uU(205,"-11.00%"),e.qZA()(),e.TgZ(206,"td")(207,"em"),e._uU(208,"-15.30%"),e.qZA()()()()()()()()()()()(),e.TgZ(209,"div",4)(210,"div",9)(211,"div",18)(212,"div",4)(213,"div",5)(214,"h2",20),e._uU(215,"No of Channels Used by Customers "),e.qZA(),e.TgZ(216,"div",49)(217,"div",50),e._UZ(218,"canvas",59),e.qZA()()()()()()()(),e.TgZ(219,"div",60)(220,"div",4)(221,"div",5)(222,"div",18)(223,"div",4)(224,"div",19)(225,"h2",20),e._uU(226,"Transaction Volume Hourly "),e.qZA()(),e.TgZ(227,"div",19)(228,"ul",21)(229,"li")(230,"a",22)(231,"div",23),e._UZ(232,"img",24),e.qZA()(),e.TgZ(233,"div",25)(234,"div",26)(235,"div",27)(236,"div",4)(237,"div",28)(238,"div",29)(239,"label"),e._uU(240,"From Date"),e.qZA(),e.TgZ(241,"input",30),e.NdJ("ngModelChange",function(t){return i.fromDateChange(t)}),e.qZA(),e._UZ(242,"owl-date-time",31,61)(244,"em",33),e.qZA()(),e.TgZ(245,"div",34)(246,"div",29)(247,"label"),e._uU(248,"Time"),e.qZA(),e.TgZ(249,"input",35),e.NdJ("ngModelChange",function(t){return i.fromDateChange(t)}),e.qZA(),e._UZ(250,"owl-date-time",31,62)(252,"em",33),e.qZA()()(),e.TgZ(253,"div",4)(254,"div",28)(255,"div",29)(256,"label"),e._uU(257,"To Date"),e.qZA(),e.TgZ(258,"input",30),e.NdJ("ngModelChange",function(t){return i.fromDateChange(t)}),e.qZA(),e._UZ(259,"owl-date-time",31,63)(261,"em",33),e.qZA()(),e.TgZ(262,"div",34)(263,"div",64)(264,"label"),e._uU(265,"Time"),e.qZA(),e.TgZ(266,"input",35),e.NdJ("ngModelChange",function(t){return i.fromDateChange(t)}),e.qZA(),e._UZ(267,"owl-date-time",31,65)(269,"em",33),e.qZA()()()()(),e.TgZ(270,"div",39)(271,"div",4)(272,"div",40)(273,"a",41),e._uU(274,"Reset"),e.qZA()(),e.TgZ(275,"div",40)(276,"a",42),e._uU(277,"Apply"),e.qZA()()()()()(),e.TgZ(278,"li")(279,"div",43)(280,"em"),e._uU(281,"Live"),e.qZA()()(),e.TgZ(282,"li")(283,"a",44)(284,"div",23),e._UZ(285,"img",45),e.qZA()(),e.TgZ(286,"div",46)(287,"ul",47)(288,"li")(289,"a",48),e._uU(290," UPI "),e.qZA()(),e.TgZ(291,"li")(292,"a",48),e._uU(293," NEFT "),e.qZA()(),e.TgZ(294,"li")(295,"a",48),e._uU(296," RTGS "),e.qZA()(),e.TgZ(297,"li")(298,"a",48),e._uU(299," IMPS "),e.qZA()()()()()()()(),e.TgZ(300,"div")(301,"div",49)(302,"div",50),e._UZ(303,"canvas",66),e.qZA()()()()()(),e.TgZ(304,"div",4)(305,"div",9)(306,"div",18)(307,"div",4)(308,"div",5)(309,"h2",20),e._uU(310,"Customer Overview"),e.qZA(),e.TgZ(311,"div",49)(312,"div",50),e._UZ(313,"canvas",67),e.TgZ(314,"div",53)(315,"table")(316,"tr"),e._UZ(317,"th"),e.TgZ(318,"th")(319,"em"),e._uU(320,"Online"),e.qZA()(),e.TgZ(321,"th")(322,"em"),e._uU(323,"Mobile"),e.qZA()(),e.TgZ(324,"th")(325,"em"),e._uU(326,"ATM"),e.qZA()(),e.TgZ(327,"th")(328,"em"),e._uU(329,"POS"),e.qZA()()(),e.TgZ(330,"tr")(331,"td")(332,"em"),e._UZ(333,"i",54),e._uU(334,"Number of Customers in Last Completed Week"),e.qZA()(),e.TgZ(335,"td")(336,"em"),e._uU(337,"1,061,004"),e.qZA()(),e.TgZ(338,"td")(339,"em"),e._uU(340,"1,717,591"),e.qZA()(),e.TgZ(341,"td")(342,"em"),e._uU(343,"89,000"),e.qZA()(),e.TgZ(344,"td")(345,"em"),e._uU(346,"90,000"),e.qZA()()(),e.TgZ(347,"tr")(348,"td")(349,"em"),e._UZ(350,"i",55),e._uU(351,"Average Number of Customers in Previous Week"),e.qZA()(),e.TgZ(352,"td")(353,"em"),e._uU(354,"1,057,305"),e.qZA()(),e.TgZ(355,"td")(356,"em"),e._uU(357,"1,715,957"),e.qZA()(),e.TgZ(358,"td")(359,"em"),e._uU(360,"1,00,000"),e.qZA()(),e.TgZ(361,"td")(362,"em"),e._uU(363,"78,000"),e.qZA()()()()()()()()()()()(),e.TgZ(364,"div",4)(365,"div",9)(366,"div",18)(367,"div",4)(368,"div",5)(369,"h2",20),e._uU(370,"Percetage Difference"),e.qZA(),e.TgZ(371,"div",49)(372,"div",50),e._UZ(373,"canvas",68),e.TgZ(374,"div",57)(375,"table")(376,"tr"),e._UZ(377,"th"),e.TgZ(378,"th")(379,"em"),e._uU(380,"Online"),e.qZA()(),e.TgZ(381,"th")(382,"em"),e._uU(383,"Mobile"),e.qZA()(),e.TgZ(384,"th")(385,"em"),e._uU(386,"ATM"),e.qZA()(),e.TgZ(387,"th")(388,"em"),e._uU(389,"POS"),e.qZA()()(),e.TgZ(390,"tr")(391,"td")(392,"em"),e._UZ(393,"i",58),e._uU(394,"Percentage Difference"),e.qZA()(),e.TgZ(395,"td")(396,"em"),e._uU(397,"0.35%"),e.qZA()(),e.TgZ(398,"td")(399,"em"),e._uU(400,"0.10%"),e.qZA()(),e.TgZ(401,"td")(402,"em"),e._uU(403,"-11.00%"),e.qZA()(),e.TgZ(404,"td")(405,"em"),e._uU(406,"-15.30%"),e.qZA()()()()()()()()()()()(),e.TgZ(407,"div",4)(408,"div",9)(409,"div",18)(410,"div",4)(411,"div",5)(412,"h2",20),e._uU(413,"No of Channels Used by Customers "),e.qZA(),e.TgZ(414,"div",49)(415,"div",50),e._UZ(416,"canvas",69),e.qZA()()()()()()()(),e.TgZ(417,"div",70)(418,"div",4)(419,"div",5)(420,"div",18)(421,"div",4)(422,"div",19)(423,"h2",20),e._uU(424," Transaction Volume Hourly "),e.qZA()(),e.TgZ(425,"div",19)(426,"ul",21)(427,"li")(428,"a",22)(429,"div",23),e._UZ(430,"img",24),e.qZA()(),e.TgZ(431,"div",25)(432,"div",26)(433,"div",27)(434,"div",4)(435,"div",28)(436,"div",29)(437,"label"),e._uU(438,"From Date"),e.qZA(),e.TgZ(439,"input",30),e.NdJ("ngModelChange",function(t){return i.fromDateChange(t)}),e.qZA(),e._UZ(440,"owl-date-time",31,71)(442,"em",33),e.qZA()(),e.TgZ(443,"div",34)(444,"div",29)(445,"label"),e._uU(446,"Time"),e.qZA(),e.TgZ(447,"input",35),e.NdJ("ngModelChange",function(t){return i.fromDateChange(t)}),e.qZA(),e._UZ(448,"owl-date-time",31,72)(450,"em",33),e.qZA()()(),e.TgZ(451,"div",4)(452,"div",28)(453,"div",29)(454,"label"),e._uU(455,"To Date"),e.qZA(),e.TgZ(456,"input",30),e.NdJ("ngModelChange",function(t){return i.fromDateChange(t)}),e.qZA(),e._UZ(457,"owl-date-time",31,73)(459,"em",33),e.qZA()(),e.TgZ(460,"div",34)(461,"div",29)(462,"label"),e._uU(463,"Time"),e.qZA(),e.TgZ(464,"input",35),e.NdJ("ngModelChange",function(t){return i.fromDateChange(t)}),e.qZA(),e._UZ(465,"owl-date-time",31,74)(467,"em",33),e.qZA()()()()(),e.TgZ(468,"div",39)(469,"div",4)(470,"div",40)(471,"a",41),e._uU(472,"Reset"),e.qZA()(),e.TgZ(473,"div",40)(474,"a",42),e._uU(475,"Apply"),e.qZA()()()()()(),e.TgZ(476,"li")(477,"div",43)(478,"em"),e._uU(479,"Live"),e.qZA()()(),e.TgZ(480,"li")(481,"a",44)(482,"div",23),e._UZ(483,"img",45),e.qZA()(),e.TgZ(484,"div",46)(485,"ul",47)(486,"li")(487,"a",48),e._uU(488," UPI "),e.qZA()(),e.TgZ(489,"li")(490,"a",48),e._uU(491," NEFT "),e.qZA()(),e.TgZ(492,"li")(493,"a",48),e._uU(494," RTGS "),e.qZA()(),e.TgZ(495,"li")(496,"a",48),e._uU(497," IMPS "),e.qZA()()()()()()()(),e.TgZ(498,"div")(499,"div",49)(500,"div",50),e._UZ(501,"canvas",75),e.qZA()()()()()(),e.TgZ(502,"div",4)(503,"div",9)(504,"div",18)(505,"div",4)(506,"div",5)(507,"h2",20),e._uU(508,"Customer Overview"),e.qZA(),e.TgZ(509,"div",49)(510,"div",50),e._UZ(511,"canvas",76),e.TgZ(512,"div",53)(513,"table")(514,"tr"),e._UZ(515,"th"),e.TgZ(516,"th")(517,"em"),e._uU(518,"Online"),e.qZA()(),e.TgZ(519,"th")(520,"em"),e._uU(521,"Mobile"),e.qZA()(),e.TgZ(522,"th")(523,"em"),e._uU(524,"ATM"),e.qZA()(),e.TgZ(525,"th")(526,"em"),e._uU(527,"POS"),e.qZA()()(),e.TgZ(528,"tr")(529,"td")(530,"em"),e._UZ(531,"i",54),e._uU(532,"Number of Customers in Last Completed Week"),e.qZA()(),e.TgZ(533,"td")(534,"em"),e._uU(535,"1,061,004"),e.qZA()(),e.TgZ(536,"td")(537,"em"),e._uU(538,"1,717,591"),e.qZA()(),e.TgZ(539,"td")(540,"em"),e._uU(541,"89,000"),e.qZA()(),e.TgZ(542,"td")(543,"em"),e._uU(544,"90,000"),e.qZA()()(),e.TgZ(545,"tr")(546,"td")(547,"em"),e._UZ(548,"i",55),e._uU(549,"Average Number of Customers in Previous Week"),e.qZA()(),e.TgZ(550,"td")(551,"em"),e._uU(552,"1,057,305"),e.qZA()(),e.TgZ(553,"td")(554,"em"),e._uU(555,"1,715,957"),e.qZA()(),e.TgZ(556,"td")(557,"em"),e._uU(558,"1,00,000"),e.qZA()(),e.TgZ(559,"td")(560,"em"),e._uU(561,"78,000"),e.qZA()()()()()()()()()()()(),e.TgZ(562,"div",4)(563,"div",9)(564,"div",18)(565,"div",4)(566,"div",5)(567,"h2",20),e._uU(568,"Percetage Difference"),e.qZA(),e.TgZ(569,"div",49)(570,"div",50),e._UZ(571,"canvas",77),e.TgZ(572,"div",57)(573,"table")(574,"tr"),e._UZ(575,"th"),e.TgZ(576,"th")(577,"em"),e._uU(578,"Online"),e.qZA()(),e.TgZ(579,"th")(580,"em"),e._uU(581,"Mobile"),e.qZA()(),e.TgZ(582,"th")(583,"em"),e._uU(584,"ATM"),e.qZA()(),e.TgZ(585,"th")(586,"em"),e._uU(587,"POS"),e.qZA()()(),e.TgZ(588,"tr")(589,"td")(590,"em"),e._UZ(591,"i",58),e._uU(592,"Percentage Difference"),e.qZA()(),e.TgZ(593,"td")(594,"em"),e._uU(595,"0.35%"),e.qZA()(),e.TgZ(596,"td")(597,"em"),e._uU(598,"0.10%"),e.qZA()(),e.TgZ(599,"td")(600,"em"),e._uU(601,"-11.00%"),e.qZA()(),e.TgZ(602,"td")(603,"em"),e._uU(604,"-15.30%"),e.qZA()()()()()()()()()()()(),e.TgZ(605,"div",4)(606,"div",9)(607,"div",18)(608,"div",4)(609,"div",5)(610,"h2",20),e._uU(611,"No of Channels Used by Customers "),e.qZA(),e.TgZ(612,"div",49)(613,"div",50),e._UZ(614,"canvas",78),e.qZA()()()()()()()(),e.TgZ(615,"div",79)(616,"div",4)(617,"div",5)(618,"div",18)(619,"div",4)(620,"div",19)(621,"h2",20),e._uU(622," Transaction Volume Hourly "),e.qZA()(),e.TgZ(623,"div",19)(624,"ul",21)(625,"li")(626,"a",22)(627,"div",23),e._UZ(628,"img",24),e.qZA()(),e.TgZ(629,"div",25)(630,"div",26)(631,"div",27)(632,"div",4)(633,"div",28)(634,"div",29)(635,"label"),e._uU(636,"From Date"),e.qZA(),e.TgZ(637,"input",30),e.NdJ("ngModelChange",function(t){return i.fromDateChange(t)}),e.qZA(),e._UZ(638,"owl-date-time",31,80)(640,"em",33),e.qZA()(),e.TgZ(641,"div",34)(642,"div",29)(643,"label"),e._uU(644,"Time"),e.qZA(),e.TgZ(645,"input",35),e.NdJ("ngModelChange",function(t){return i.fromDateChange(t)}),e.qZA(),e._UZ(646,"owl-date-time",31,81)(648,"em",33),e.qZA()()(),e.TgZ(649,"div",4)(650,"div",28)(651,"div",29)(652,"label"),e._uU(653,"To Date"),e.qZA(),e.TgZ(654,"input",30),e.NdJ("ngModelChange",function(t){return i.fromDateChange(t)}),e.qZA(),e._UZ(655,"owl-date-time",31,82)(657,"em",33),e.qZA()(),e.TgZ(658,"div",34)(659,"div",29)(660,"label"),e._uU(661,"Time"),e.qZA(),e.TgZ(662,"input",35),e.NdJ("ngModelChange",function(t){return i.fromDateChange(t)}),e.qZA(),e._UZ(663,"owl-date-time",31,83)(665,"em",33),e.qZA()()()()(),e.TgZ(666,"div",39)(667,"div",4)(668,"div",40)(669,"a",41),e._uU(670,"Reset"),e.qZA()(),e.TgZ(671,"div",40)(672,"a",42),e._uU(673,"Apply"),e.qZA()()()()()(),e.TgZ(674,"li")(675,"div",43)(676,"em"),e._uU(677,"Live"),e.qZA()()(),e.TgZ(678,"li")(679,"a",44)(680,"div",23),e._UZ(681,"img",45),e.qZA()(),e.TgZ(682,"div",46)(683,"ul",47)(684,"li")(685,"a",48),e._uU(686," UPI "),e.qZA()(),e.TgZ(687,"li")(688,"a",48),e._uU(689," NEFT "),e.qZA()(),e.TgZ(690,"li")(691,"a",48),e._uU(692," RTGS "),e.qZA()(),e.TgZ(693,"li")(694,"a",48),e._uU(695," IMPS "),e.qZA()()()()()()()(),e.TgZ(696,"div")(697,"div",49)(698,"div",50),e._UZ(699,"canvas",84),e.qZA()()()()()(),e.TgZ(700,"div",4)(701,"div",9)(702,"div",18)(703,"div",4)(704,"div",5)(705,"h2",20),e._uU(706,"Customer Overview"),e.qZA(),e.TgZ(707,"div",49)(708,"div",50),e._UZ(709,"canvas",85),e.TgZ(710,"div",53)(711,"table")(712,"tr"),e._UZ(713,"th"),e.TgZ(714,"th")(715,"em"),e._uU(716,"Online"),e.qZA()(),e.TgZ(717,"th")(718,"em"),e._uU(719,"Mobile"),e.qZA()(),e.TgZ(720,"th")(721,"em"),e._uU(722,"ATM"),e.qZA()(),e.TgZ(723,"th")(724,"em"),e._uU(725,"POS"),e.qZA()()(),e.TgZ(726,"tr")(727,"td")(728,"em"),e._UZ(729,"i",54),e._uU(730,"Number of Customers in Last Completed Week"),e.qZA()(),e.TgZ(731,"td")(732,"em"),e._uU(733,"1,061,004"),e.qZA()(),e.TgZ(734,"td")(735,"em"),e._uU(736,"1,717,591"),e.qZA()(),e.TgZ(737,"td")(738,"em"),e._uU(739,"89,000"),e.qZA()(),e.TgZ(740,"td")(741,"em"),e._uU(742,"90,000"),e.qZA()()(),e.TgZ(743,"tr")(744,"td")(745,"em"),e._UZ(746,"i",55),e._uU(747,"Average Number of Customers in Previous Week"),e.qZA()(),e.TgZ(748,"td")(749,"em"),e._uU(750,"1,057,305"),e.qZA()(),e.TgZ(751,"td")(752,"em"),e._uU(753,"1,715,957"),e.qZA()(),e.TgZ(754,"td")(755,"em"),e._uU(756,"1,00,000"),e.qZA()(),e.TgZ(757,"td")(758,"em"),e._uU(759,"78,000"),e.qZA()()()()()()()()()()()(),e.TgZ(760,"div",4)(761,"div",9)(762,"div",18)(763,"div",4)(764,"div",5)(765,"h2",20),e._uU(766,"Percetage Difference"),e.qZA(),e.TgZ(767,"div",49)(768,"div",50),e._UZ(769,"canvas",86),e.TgZ(770,"div",57)(771,"table")(772,"tr"),e._UZ(773,"th"),e.TgZ(774,"th")(775,"em"),e._uU(776,"Online"),e.qZA()(),e.TgZ(777,"th")(778,"em"),e._uU(779,"Mobile"),e.qZA()(),e.TgZ(780,"th")(781,"em"),e._uU(782,"ATM"),e.qZA()(),e.TgZ(783,"th")(784,"em"),e._uU(785,"POS"),e.qZA()()(),e.TgZ(786,"tr")(787,"td")(788,"em"),e._UZ(789,"i",58),e._uU(790,"Percentage Difference"),e.qZA()(),e.TgZ(791,"td")(792,"em"),e._uU(793,"0.35%"),e.qZA()(),e.TgZ(794,"td")(795,"em"),e._uU(796,"0.10%"),e.qZA()(),e.TgZ(797,"td")(798,"em"),e._uU(799,"-11.00%"),e.qZA()(),e.TgZ(800,"td")(801,"em"),e._uU(802,"-15.30%"),e.qZA()()()()()()()()()()()(),e.TgZ(803,"div",4)(804,"div",9)(805,"div",18)(806,"div",4)(807,"div",5)(808,"h2",20),e._uU(809,"No of Channels Used by Customers "),e.qZA(),e.TgZ(810,"div",49)(811,"div",50),e._UZ(812,"canvas",87),e.qZA()()()()()()()()()()()()()()()()()()()()()()),2&r){const a=e.MAs(45),t=e.MAs(53),n=e.MAs(62),l=e.MAs(70),s=e.MAs(243),u=e.MAs(251),Z=e.MAs(260),T=e.MAs(268),C=e.MAs(441),_=e.MAs(449),p=e.MAs(458),A=e.MAs(466),b=e.MAs(639),U=e.MAs(647),f=e.MAs(656),q=e.MAs(664);e.xp6(6),e.Q6J("item","Channel Analytics"),e.xp6(12),e.Q6J("ngForOf",i.tablist),e.xp6(3),e.Q6J("hidden","atm"!=i.activeTabName),e.xp6(22),e.Q6J("owlDateTime",a)("owlDateTimeTrigger",a),e.xp6(1),e.Q6J("pickerType","calendar"),e.xp6(2),e.Q6J("owlDateTimeTrigger",a),e.xp6(5),e.Q6J("owlDateTime",t)("owlDateTimeTrigger",t),e.xp6(1),e.Q6J("pickerType","timer"),e.xp6(2),e.Q6J("owlDateTimeTrigger",t),e.xp6(6),e.Q6J("owlDateTime",n)("owlDateTimeTrigger",n),e.xp6(1),e.Q6J("pickerType","calendar"),e.xp6(2),e.Q6J("owlDateTimeTrigger",n),e.xp6(5),e.Q6J("owlDateTime",l)("owlDateTimeTrigger",l),e.xp6(1),e.Q6J("pickerType","timer"),e.xp6(2),e.Q6J("owlDateTimeTrigger",l),e.xp6(148),e.Q6J("hidden","pos"!=i.activeTabName),e.xp6(22),e.Q6J("owlDateTime",s)("owlDateTimeTrigger",s),e.xp6(1),e.Q6J("pickerType","calendar"),e.xp6(2),e.Q6J("owlDateTimeTrigger",s),e.xp6(5),e.Q6J("owlDateTime",u)("owlDateTimeTrigger",u),e.xp6(1),e.Q6J("pickerType","timer"),e.xp6(2),e.Q6J("owlDateTimeTrigger",u),e.xp6(6),e.Q6J("owlDateTime",Z)("owlDateTimeTrigger",Z),e.xp6(1),e.Q6J("pickerType","calendar"),e.xp6(2),e.Q6J("owlDateTimeTrigger",Z),e.xp6(5),e.Q6J("owlDateTime",T)("owlDateTimeTrigger",T),e.xp6(1),e.Q6J("pickerType","timer"),e.xp6(2),e.Q6J("owlDateTimeTrigger",T),e.xp6(148),e.Q6J("hidden","online"!=i.activeTabName),e.xp6(22),e.Q6J("owlDateTime",C)("owlDateTimeTrigger",C),e.xp6(1),e.Q6J("pickerType","calendar"),e.xp6(2),e.Q6J("owlDateTimeTrigger",C),e.xp6(5),e.Q6J("owlDateTime",_)("owlDateTimeTrigger",_),e.xp6(1),e.Q6J("pickerType","timer"),e.xp6(2),e.Q6J("owlDateTimeTrigger",_),e.xp6(6),e.Q6J("owlDateTime",p)("owlDateTimeTrigger",p),e.xp6(1),e.Q6J("pickerType","calendar"),e.xp6(2),e.Q6J("owlDateTimeTrigger",p),e.xp6(5),e.Q6J("owlDateTime",A)("owlDateTimeTrigger",A),e.xp6(1),e.Q6J("pickerType","timer"),e.xp6(2),e.Q6J("owlDateTimeTrigger",A),e.xp6(148),e.Q6J("hidden","mobile"!=i.activeTabName),e.xp6(22),e.Q6J("owlDateTime",b)("owlDateTimeTrigger",b),e.xp6(1),e.Q6J("pickerType","calendar"),e.xp6(2),e.Q6J("owlDateTimeTrigger",b),e.xp6(5),e.Q6J("owlDateTime",U)("owlDateTimeTrigger",U),e.xp6(1),e.Q6J("pickerType","timer"),e.xp6(2),e.Q6J("owlDateTimeTrigger",U),e.xp6(6),e.Q6J("owlDateTime",f)("owlDateTimeTrigger",f),e.xp6(1),e.Q6J("pickerType","calendar"),e.xp6(2),e.Q6J("owlDateTimeTrigger",f),e.xp6(5),e.Q6J("owlDateTime",q)("owlDateTimeTrigger",q),e.xp6(1),e.Q6J("pickerType","timer"),e.xp6(2),e.Q6J("owlDateTimeTrigger",q)}},dependencies:[m.mk,m.sg,w.w,h.sZ,h.BO,h.hV,m.gd]}),o})()}];let O=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[D.Bz.forChild(B),D.Bz]}),o})();var y=c(8524);let P=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.ez,O,y.v,h.Ll,h.x,y.v]}),o})()}}]);