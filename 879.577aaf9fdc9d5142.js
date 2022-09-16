"use strict";(self.webpackChunkbrainbank=self.webpackChunkbrainbank||[]).push([[879],{6879:(A,d,l)=>{l.r(d),l.d(d,{AtmdetailsModule:()=>f});var u=l(6895),n=l(7825),s=l(5311),m=l(7154),t=l(8256);const v=[{path:"",component:(()=>{class e{constructor(){this.vrchartfont="Avenir, Segoe UI, arial, sans-serif",this.dlbls_barvalue="#dddddd",this.title_charttitle="white",this.title_ylabel="white",this.title_xlabel="white",this.legend_textcolor="#dddddd",this.ygrid_bordercolor="#444444",this.ygrid_color="#444444",this.xgrid_bordercolor="#444444",this.xgrid_color="#444444",this.ytick_color="#aaa",this.xtick_color="#aaa"}ngOnInit(){}ngAfterViewInit(){this.createChartATMWeeklyTxnVolPer(),this.createChartATMFleetIntSucRate(),this.createChartATMFailurePrevDay()}createChartATMWeeklyTxnVolPer(){this.eatmwtxnp=document.getElementById("catmWeeklyTxnPer"),this.ctxatmwtxnp=this.eatmwtxnp.getContext("2d"),s.kL.register(m.Z),new s.kL(this.ctxatmwtxnp,{type:"line",data:{labels:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],datasets:[{label:"Current Week",data:[64945,96844,84316,92964,46234,98947,36035],backgroundColor:"#30c452",borderColor:"#30c452",pointRadius:0},{label:"Last Week",data:[45825,75729,66231,31368,66741,75215,34201],backgroundColor:"#007bff",borderColor:"#007bff",pointRadius:0},{label:"Last Year",data:[63481,25489,45686,35209,30686,34010,30569],backgroundColor:"#FFA500",borderColor:"#FFA500",pointRadius:0}]},options:{plugins:{legend:{display:!0,position:"bottom",labels:{padding:20,color:this.legend_textcolor,font:{family:this.vrchartfont}}},title:{display:!1,text:"Weekly Transaction Volume Performance",color:this.title_charttitle,padding:{bottom:15},font:{family:this.vrchartfont,size:20,weight:"500"}},datalabels:{display:!1},tooltip:{position:"nearest",xAlign:"center",yAlign:"bottom",bodyFont:{family:this.vrchartfont},callbacks:{label:function(i){return" "+function h(e){var r=e.toString().split(".");return r[0]=r[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),r.join(".")}(i.parsed.y)},title:function(i){return"Channel - "+i[0].label}},padding:10}},scales:{y:{beginAtZero:!0,title:{text:"Transaction Volume",display:!0,color:this.title_ylabel,font:{size:14,family:this.vrchartfont}},ticks:{color:this.ytick_color,font:{family:this.vrchartfont}},grid:{borderColor:this.ygrid_bordercolor,color:this.ygrid_color}},x:{ticks:{color:this.xtick_color,font:{family:this.vrchartfont}},grid:{borderColor:"transparent",color:"transparent"}}}}})}createChartATMFleetIntSucRate(){this.eatmfleetintsurate=document.getElementById("catmFleetInsSuRate"),this.ctxatmfleetintsurate=this.eatmfleetintsurate.getContext("2d"),new s.kL(this.ctxatmfleetintsurate,{type:"bar",data:{labels:["Previous Day","Last 7 Days","Last 30 days"],datasets:[{label:"Label",data:["97.79","94.40","94.36"],backgroundColor:"#007bff",maxBarThickness:80}]},options:{plugins:{legend:{display:!1},title:{display:!1,text:"Fleet Interaction Success Rate",color:this.title_charttitle,padding:{bottom:15},font:{family:this.vrchartfont,size:20,weight:"500"}},datalabels:{color:this.dlbls_barvalue,align:"top",anchor:"end",font:{family:this.vrchartfont},formatter:function(i,p){return i+" %"}},tooltip:{position:"nearest",xAlign:"center",yAlign:"bottom",bodyFont:{family:this.vrchartfont},callbacks:{label:function(i){return i.parsed.y+"%"},title:function(i){return i[0].label}},padding:10}},scales:{y:{beginAtZero:!1,title:{text:"Percentage",display:!0,color:this.title_ylabel,font:{size:14,family:this.vrchartfont}},ticks:{color:this.ytick_color,font:{family:this.vrchartfont}},grid:{borderColor:this.ygrid_bordercolor,color:this.ygrid_color}},x:{title:{text:"Time Period",display:!0,color:this.title_xlabel,font:{size:14,family:this.vrchartfont}},ticks:{color:this.xtick_color,font:{family:this.vrchartfont}},grid:{borderColor:"transparent",color:"transparent"}}}}})}createChartATMFailurePrevDay(){this.eatmfailureprevday=document.getElementById("catmFailurePrevDay"),this.ctxatmfailureprevday=this.eatmfailureprevday.getContext("2d"),new s.kL(this.ctxatmfailureprevday,{type:"pie",data:{labels:["User Error","Unsupported Service","Unavailable Service","Deposit Dispense Error"],datasets:[{data:[.28,17.02,1.05,70.53],backgroundColor:["#007bff","#70d562","#FFA500","#071e31"],borderColor:"transparent"}]},options:{plugins:{legend:{display:!0,position:"bottom",labels:{padding:20,color:this.legend_textcolor,font:{family:this.vrchartfont}}},title:{display:!1,text:"ATM Failure",color:this.title_charttitle,padding:{bottom:5},font:{family:this.vrchartfont,size:20,weight:"500"}},subtitle:{display:!1,text:"(Previous Day)",color:this.title_charttitle,padding:{bottom:40},font:{family:this.vrchartfont,size:14}},datalabels:{color:this.dlbls_barvalue,font:{family:this.vrchartfont},formatter:function(i,p){return i+" %"},labels:{index:{align:"end",anchor:"end",font:{size:15}}}},tooltip:{position:"nearest",xAlign:"center",yAlign:"bottom",bodyFont:{family:this.vrchartfont},callbacks:{label:function(i){return i.parsed+"%"},title:function(i){return i[0].label}},padding:10}}}})}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-atmdetails"]],decls:334,vars:0,consts:[[1,"right-main-column"],[1,"right-col-container","pad-b"],[1,"body-page-container"],[1,"container-fluid"],[1,"row"],[1,"col-12"],[1,"whitecard"],[1,"center-div"],[1,"user-details-section"],[1,"myprofile-info"],[1,"profile-circle"],["src","../assets/images/icons/user2.png","alt","user-img"],["src","../assets/images/svg/notification.svg","alt","notification-icon"],[1,"button"],[1,"bottom-footer1"],[1,"btn-div"],["onclick","window.location.href='#'",1,"ux-button","primary","sm-mob"],["src","../assets/images/svg/email2.svg","alt","message-icon"],["onclick","window.location.href='#'",1,"ux-button","blue-mid","sm-mob"],["src","../assets/images/svg/setting.svg","alt","setting-icon"],[1,"row","mb-2"],[1,"slide-text"],[1,"marquee-list"],["src","../assets/images/svg/go-up1.svg","alt","icon"],["src","../assets/images/svg/go-down.svg","alt","icon"],[1,"col-12","col-md-12"],[1,"language-bar"],[1,"lang-dropdown"],["href","javascript:;",1,"btn-selectlang"],[1,"language-list",2,"display","none"],[1,"lst-languages"],["href","dashboard.html",1,"language-selected"],["href","digital-payment.html"],[1,"list-nh"],["href","javascript:;"],[1,"dropdown-sub"],["href","atm.html"],["href","#"],[1,"whitecard","no-bg"],[1,"col-sm-12","col-12","col-md-12"],[1,"bg-white1","dark-bg"],[1,"row","mb-4"],[1,"light-text"],[1,"chart-box"],[1,"chart-area"],["id","catmWeeklyTxnPer","width","600","height","300"],["id","catmFleetInsSuRate","width","600","height","250"],[1,"col-sm-10","col-10","col-md-6"],[1,"mb-4"],[1,"col-sm-2","col-2","col-md-6"],[1,"filter-list-info","mar-t"],["href","#",1,"calender-btn"],[1,"icon"],["src","../assets/images/svg/calendar.svg","alt","calender-icon"],[1,"slidefilter-container"],[1,"filter-box"],[1,"filter-content"],[1,"col-12","col-md-7"],[1,"ux-input"],["type","text","placeholder","DD/MM/YYYY",1,"datepicker1"],[1,"calendar-ic","cal-top"],[1,"error-message"],[1,"col-12","col-md-5"],[1,"ux-input","bootstrap-timepicker","timepicker"],["id","timepicker1","type","text","placeholder","HH:MM"],[1,"clock-ic","cal-top","input-group-addon"],["id","timepicker2","type","text","placeholder","HH:MM"],[1,"filter-footer"],[1,"col-6","text-center"],["href","javascript:;",1,"ux-button","secondary","sm3","float-left"],["href","javascript:;",1,"ux-button","primary","sm3","float-right"],[1,"col-12","col-md-8","m-auto"],["id","catmFailurePrevDay","width","600","height","200"],[1,"light-text","mb-2"],[1,"cachartdatatable"],[1,"data1"],["colspan","2","rowspan","2",1,"bor-b"]],template:function(a,o){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",4)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div",10),t._UZ(12,"img",11),t.qZA(),t.TgZ(13,"h1"),t._uU(14,"Welcome back, Brian! "),t.qZA(),t.TgZ(15,"em"),t._UZ(16,"img",12),t._uU(17," You have 2 new messages and 15 new tasks"),t.qZA()(),t.TgZ(18,"div",13)(19,"ul",14)(20,"li")(21,"div",15)(22,"button",16),t._UZ(23,"img",17),t._uU(24," Messages "),t.qZA()(),t.TgZ(25,"div",15)(26,"button",18),t._UZ(27,"img",19),t._uU(28," Settings "),t.qZA()()()()()()(),t.TgZ(29,"div",20)(30,"div",21)(31,"marquee")(32,"div",4)(33,"ul",22)(34,"li")(35,"em"),t._uU(36,"Top Payee App"),t.qZA()(),t.TgZ(37,"li")(38,"em"),t._uU(39,"Google Pay 29.66 % "),t._UZ(40,"img",23),t.qZA()(),t.TgZ(41,"li")(42,"em"),t._uU(43,"BHIM YES Pay 39.72 % "),t._UZ(44,"img",24),t.qZA()(),t.TgZ(45,"li")(46,"em"),t._uU(47,"Other Payee Apps 45.22 % "),t._UZ(48,"img",24),t.qZA()()()()()()(),t.TgZ(49,"div",7)(50,"div",4)(51,"div",25)(52,"div",26)(53,"div",27)(54,"a",28)(55,"em"),t._uU(56,"ATM"),t.qZA(),t._UZ(57,"i"),t.qZA(),t.TgZ(58,"div",29)(59,"ul",30)(60,"li")(61,"a",31),t._uU(62,"Channel Analytics"),t.qZA()(),t.TgZ(63,"li")(64,"a",32),t._uU(65,"Digital Payments"),t.qZA()(),t.TgZ(66,"li",33)(67,"a",34),t._uU(68,"ATM "),t._UZ(69,"i"),t.qZA(),t.TgZ(70,"ul",35)(71,"li")(72,"a",36),t._uU(73,"Main Menu"),t.qZA()(),t.TgZ(74,"li")(75,"a",37),t._uU(76,"ATM Profile"),t.qZA()(),t.TgZ(77,"li")(78,"a",37),t._uU(79,"ATM Placement"),t.qZA()(),t.TgZ(80,"li")(81,"a",37),t._uU(82,"ATM Transaction Analysis"),t.qZA()()()(),t.TgZ(83,"li",33)(84,"a",34),t._uU(85,"POS "),t._UZ(86,"i"),t.qZA(),t.TgZ(87,"ul",35)(88,"li")(89,"a",37),t._uU(90,"Main Menu"),t.qZA()(),t.TgZ(91,"li")(92,"a",37),t._uU(93,"Card Usage"),t.qZA()(),t.TgZ(94,"li")(95,"a",37),t._uU(96,"Merchant Analysis"),t.qZA()()()()()()()()()()()()(),t.TgZ(97,"div",4)(98,"div",38)(99,"div",7)(100,"div",4)(101,"div",39)(102,"div",40)(103,"div",41)(104,"div",5)(105,"h2",42),t._uU(106,"Weekly Transaction Volume Performance"),t.qZA()()(),t.TgZ(107,"div",4)(108,"div",5)(109,"div",43)(110,"div",44),t._UZ(111,"canvas",45),t.qZA()()()()()(),t.TgZ(112,"div",39)(113,"div",40)(114,"div",41)(115,"div",39)(116,"h2",42),t._uU(117,"Fleet Interaction Success Rate"),t.qZA()()(),t.TgZ(118,"div",4)(119,"div",5)(120,"div",43)(121,"div",44),t._UZ(122,"canvas",46),t.qZA()()()()()(),t.TgZ(123,"div",39)(124,"div",40)(125,"div",4)(126,"div",47)(127,"div",48)(128,"h2",42),t._uU(129,"ATM Failure ( Previous Day )"),t.qZA()()(),t.TgZ(130,"div",49)(131,"ul",50)(132,"li")(133,"a",51)(134,"div",52),t._UZ(135,"img",53),t.qZA()(),t.TgZ(136,"div",54)(137,"div",55)(138,"div",56)(139,"div",4)(140,"div",57)(141,"div",58)(142,"label"),t._uU(143,"From Date"),t.qZA(),t._UZ(144,"input",59)(145,"em",60)(146,"p",61),t.qZA()(),t.TgZ(147,"div",62)(148,"div",63)(149,"label"),t._uU(150,"Time"),t.qZA(),t._UZ(151,"input",64)(152,"span",65)(153,"p",61),t.qZA()()(),t.TgZ(154,"div",4)(155,"div",57)(156,"div",58)(157,"label"),t._uU(158,"To Date"),t.qZA(),t._UZ(159,"input",59)(160,"em",60)(161,"p",61),t.qZA()(),t.TgZ(162,"div",62)(163,"div",63)(164,"label"),t._uU(165,"Time"),t.qZA(),t._UZ(166,"input",66)(167,"span",65)(168,"p",61),t.qZA()()()()(),t.TgZ(169,"div",67)(170,"div",4)(171,"div",68)(172,"a",69),t._uU(173,"Reset"),t.qZA()(),t.TgZ(174,"div",68)(175,"a",70),t._uU(176,"Apply"),t.qZA()()()()()()()()(),t.TgZ(177,"div",4)(178,"div",71)(179,"div",43)(180,"div",44),t._UZ(181,"canvas",72),t.qZA()()()()()(),t.TgZ(182,"div",39)(183,"div",40)(184,"div",4)(185,"div",39),t._UZ(186,"h2",73),t.qZA()(),t._UZ(187,"div",5),t.qZA()(),t.TgZ(188,"div",39)(189,"div",40)(190,"div",4)(191,"div",39)(192,"h2",73),t._uU(193,"Bottom 5 ATM Availability ( last month )"),t.qZA()()(),t.TgZ(194,"div",5)(195,"div",74)(196,"table",75)(197,"tr")(198,"th",76)(199,"em"),t._uU(200,"Fletcher Bldg"),t.qZA()(),t.TgZ(201,"td")(202,"em"),t._uU(203,"TERM0968"),t.qZA()()(),t.TgZ(204,"tr")(205,"td")(206,"em"),t._uU(207,"TERM0968"),t.qZA()()(),t.TgZ(208,"tr")(209,"th",76)(210,"em"),t._uU(211,"Kingsbrook Bldg"),t.qZA()(),t.TgZ(212,"td")(213,"em"),t._uU(214,"TERM0965"),t.qZA()()(),t.TgZ(215,"tr")(216,"td")(217,"em"),t._uU(218,"TERM0967"),t.qZA()()(),t.TgZ(219,"tr")(220,"th",76)(221,"em"),t._uU(222,"Lester Road"),t.qZA()(),t.TgZ(223,"td")(224,"em"),t._uU(225,"TERM0964"),t.qZA()()()()()()()(),t.TgZ(226,"div",39)(227,"div",40)(228,"div",4)(229,"div",39)(230,"h2",73),t._uU(231,"Fleet Volume Performance ( last 30 days vs. prev. 30 days )"),t.qZA()()(),t.TgZ(232,"div",5)(233,"div",74)(234,"table",75)(235,"tr")(236,"th")(237,"em"),t._uU(238,"ATM Volume"),t.qZA()(),t.TgZ(239,"th")(240,"em"),t._uU(241,"# of ATM"),t.qZA()(),t.TgZ(242,"th")(243,"em"),t._uU(244,"% Total"),t.qZA()()(),t.TgZ(245,"tr")(246,"td")(247,"em"),t._uU(248,"improved(>2%)"),t.qZA()(),t.TgZ(249,"td")(250,"em"),t._uU(251,"74"),t.qZA()(),t.TgZ(252,"td")(253,"em"),t._uU(254,"33.79%"),t.qZA()()(),t.TgZ(255,"tr")(256,"td")(257,"em"),t._uU(258,"stay the same(-2% -2%)"),t.qZA()(),t.TgZ(259,"td")(260,"em"),t._uU(261,"71"),t.qZA()(),t.TgZ(262,"td")(263,"em"),t._uU(264,"32.42%"),t.qZA()()(),t.TgZ(265,"tr")(266,"td")(267,"em"),t._uU(268," Decline (<-2%) "),t.qZA()(),t.TgZ(269,"td")(270,"em"),t._uU(271,"74"),t.qZA()(),t.TgZ(272,"td")(273,"em"),t._uU(274,"33.79%"),t.qZA()()()()()()()(),t.TgZ(275,"div",39)(276,"div",40)(277,"div",4)(278,"div",39)(279,"h2",73),t._uU(280,"Fleet Insights ( last 7 days vs. 90 days avg )"),t.qZA()()(),t.TgZ(281,"div",5)(282,"div",74)(283,"table",75)(284,"tr")(285,"th")(286,"em"),t._uU(287,"KPI"),t.qZA()(),t.TgZ(288,"th")(289,"em"),t._uU(290,"Last 7 days"),t.qZA()(),t.TgZ(291,"th")(292,"em"),t._uU(293,"% Change"),t.qZA()()(),t.TgZ(294,"tr")(295,"td")(296,"em"),t._uU(297,"Revenue (S)"),t.qZA()(),t.TgZ(298,"td")(299,"em"),t._uU(300,"171288"),t.qZA()(),t.TgZ(301,"td")(302,"em"),t._uU(303,"1.14%"),t.qZA()()(),t.TgZ(304,"tr")(305,"td")(306,"em"),t._uU(307,"# of Member"),t.qZA()(),t.TgZ(308,"td")(309,"em"),t._uU(310,"266648"),t.qZA()(),t.TgZ(311,"td")(312,"em"),t._uU(313,"1.40%"),t.qZA()()(),t.TgZ(314,"tr")(315,"td")(316,"em"),t._uU(317,"# of Partner"),t.qZA()(),t.TgZ(318,"td")(319,"em"),t._uU(320,"23507"),t.qZA()(),t.TgZ(321,"td")(322,"em"),t._uU(323,"0.49%"),t.qZA()()(),t.TgZ(324,"tr")(325,"td")(326,"em"),t._uU(327,"# of Foreign"),t.qZA()(),t.TgZ(328,"td")(329,"em"),t._uU(330,"14711"),t.qZA()(),t.TgZ(331,"td")(332,"em"),t._uU(333,"1.29%"),t.qZA()()()()()()()()()()()()()()()()()())}}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[n.Bz.forChild(v),n.Bz]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,Z]}),e})()}}]);