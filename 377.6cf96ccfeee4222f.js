"use strict";(self.webpackChunkbrainbank=self.webpackChunkbrainbank||[]).push([[377],{9377:(T,m,s)=>{s.r(m),s.d(m,{DigitalpaymentModule:()=>f});var e=s(6895),v=s(7825),d=s(5311),t=s(8256),p=s(7999);function g(n,c){if(1&n){const i=t.EpF();t.TgZ(0,"li",56)(1,"a",57),t.NdJ("click",function(){const h=t.CHM(i).$implicit,l=t.oxw();return t.KtG(l.activetab(h))}),t.TgZ(2,"em"),t._uU(3),t.ALo(4,"uppercase"),t.qZA()()()}if(2&n){const i=c.$implicit,a=t.oxw();t.Q6J("ngClass",a.activeTabName==i?"active":""),t.xp6(3),t.Oqu(t.lcZ(4,2,i))}}function u(n){var c=n.toString().split(".");return c[0]=c[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),c.join(".")}const Z=[{path:"",component:(()=>{class n{constructor(){this.tablist=["upi","imps","rtgs","neft"],this.activeTabName="upi",this.vrchartfont="Avenir, Segoe UI, arial, sans-serif",this.dlbls_barvalue="#dddddd",this.title_charttitle="white",this.title_ylabel="white",this.title_xlabel="white",this.legend_textcolor="#dddddd",this.ygrid_bordercolor="#313e55",this.ygrid_color="#313e55",this.xgrid_bordercolor="#313e55",this.xgrid_color="#313e55",this.ytick_color="#aaa",this.xtick_color="#aaa",this.showBD=!0,this.showNonBD=!1,this.showLastYear=!0,this.showThisYear=!1}ngOnInit(){}ngAfterViewInit(){this.activetab(this.activeTabName),this.onBankDeclineBD("bd"),this.cdpbusid=document.getElementById("dpBusiDecline"),this.ctxcdpbusid=this.cdpbusid.getContext("2d"),this.generateBarCharts(this.ctxcdpbusid,["Account Does Not Exist (Remitter)","Number Or Pin Tries Exceeded","Invalid UPI Pin","Invalid ATM Pin","Invalid/Incorrect OTP","UPI Pin Not Set BY Customer"],[{label:"For The Day Count",backgroundColor:"#DF7861",data:[534253,269717,249946,20248,19547,14475],maxBarThickness:50},{label:"Month To Date Count",backgroundColor:"#6CC4A1",data:[7454062,3968664,3867326,287699,271045,213153],maxBarThickness:50}])}activetab(i){this.activeTabName=i,this.ccanv="",this.ctxctvh="";let a=[],r=[];"upi"===i&&(this.ccanv=document.getElementById("dpTransOverview"),this.ctxctvh=this.ccanv.getContext("2d"),a=["Jul 21","Aug 21","Sep 21","Oct 21","Nov 21","Dec 21","Jan 22","Feb 22","Mar 22","Apr 22","May 22","Jun 22"],r=[10,20,30,20,10,20,40,80,90,20,20,30],this.generateLineCharts(this.ctxctvh,a,r))}generateLineCharts(i,a,r){console.log("RRRRR"),new d.kL(i,{type:"line",data:{labels:a,datasets:[{label:"New Chart",data:r,borderColor:"rgb(106, 114, 191)",pointRadius:0,tension:.1,fill:{target:"origin",above:"rgba(106, 114, 191, 0.2)"}}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},title:{display:!1,text:"Transaction Overview",color:this.title_charttitle,align:"start",padding:{bottom:5},font:{family:this.vrchartfont,size:20,weight:"500"}},subtitle:{display:!1,text:"Number of Transactions",color:this.title_charttitle,align:"start",padding:{bottom:15},font:{family:this.vrchartfont,size:14}},datalabels:{display:!1}},scales:{y:{beginAtZero:!0,ticks:{color:"transparent",font:{family:this.vrchartfont}},grid:{borderColor:"transparent",color:this.ygrid_bordercolor}},x:{ticks:{color:this.xtick_color,font:{family:this.vrchartfont}},grid:{borderColor:this.xgrid_bordercolor,color:this.xgrid_bordercolor}}}}})}generateBarCharts(i,a,r){new d.kL(i,{type:"bar",data:{labels:a,datasets:r},options:{plugins:{legend:{display:!0,position:"bottom",labels:{padding:10,color:this.legend_textcolor,font:{family:this.vrchartfont}}},title:{display:!1,text:"Technical Decline",color:this.title_charttitle,padding:{bottom:15},font:{family:this.vrchartfont,size:20,weight:"500"}},datalabels:{color:this.dlbls_barvalue,align:"top",anchor:"end",font:{family:this.vrchartfont},formatter:function(l,A){return u(l)}},tooltip:{position:"nearest",xAlign:"center",yAlign:"bottom",bodyFont:{family:this.vrchartfont},callbacks:{label:function(l){return" "+u(l.parsed.y)},title:function(l){return"Channel - "+l[0].label}},padding:10}},scales:{y:{beginAtZero:!0,title:{text:"Count",display:!0,color:this.title_ylabel,font:{size:14,family:this.vrchartfont}},ticks:{color:this.ytick_color,font:{family:this.vrchartfont}},grid:{borderColor:this.ygrid_bordercolor,color:this.ygrid_color}},x:{title:{text:"CBS",display:!0,color:this.title_xlabel,font:{size:14,family:this.vrchartfont}},ticks:{color:this.xtick_color,font:{family:this.vrchartfont}},grid:{borderColor:"transparent",color:"transparent"}}}}})}onBankDeclineBD(i){console.log("value",i),d.kL.getChart(this.cdptechd)?.destroy(),d.kL.getChart(this.cdptechd1)?.destroy(),"bd"==i?(this.showBD=!0,this.showNonBD=!1,this.cdptechd=document.getElementById("dpTechDecline"),this.ctxcdptechd=this.cdptechd.getContext("2d"),this.generateBarCharts(this.ctxcdptechd,["Invalid Transaction","Unable To Process Due To Remitter Side Issue","Response Code Error","Requath Time Out For Pay","PSP Not Available"],[{label:"For The Day Count",backgroundColor:"#277BC0",data:[30445,26,558,129,32],maxBarThickness:50},{label:"Month To Date Count",backgroundColor:"#FFB200",data:[532460,53822,6377,2271,173],maxBarThickness:50}])):(this.showBD=!1,this.showNonBD=!0,this.cdptechd1=document.getElementById("dpTechDecline2"),this.ctxcdptechd1=this.cdptechd1.getContext("2d"),this.generateBarCharts(this.ctxcdptechd1,["No Response from CBS","Remitter CBS Offline"],[{label:"For The Day Count",backgroundColor:"#277BC0",data:[741,100837],maxBarThickness:100},{label:"Month To Date Count",backgroundColor:"#FFB200",data:[83,23148],maxBarThickness:100}]))}onLastYear(i){if(console.log("last year value",i),d.kL.getChart(this.ccanv)?.destroy(),d.kL.getChart(this.cdptxno1)?.destroy(),"lastyear"==i)this.showLastYear=!0,this.showThisYear=!1,this.ccanv=document.getElementById("dpTransOverview"),this.ctxctvh=this.ccanv.getContext("2d"),this.generateLineCharts(this.ctxctvh,h=["Jul 21","Aug 21","Sep 21","Oct 21","Nov 21","Dec 21","Jan 22","Feb 22","Mar 22","Apr 22","May 22","Jun 22"],l=[10,20,30,20,10,20,40,80,90,20,20,30]);else{this.showLastYear=!1,this.showThisYear=!0,console.log("Chart 2 - Transaction Overview"),this.cdptxno1=document.getElementById("dpTransOverview2"),this.ctxdptxno1=this.cdptxno1.getContext("2d");var h=["Jul 21","Aug 21","Sep 21","Oct 21","Nov 21","Dec 21","Jan 22","Feb 22","Mar 22","Apr 22","May 22","Jun 22"],l=[10,20,30,20,30,20,40,60,70,30,20,30];this.generateLineCharts(this.ctxdptxno1,h,l)}}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-digitalpayment"]],decls:262,vars:5,consts:[[1,"right-main-column"],[1,"right-col-container","pad-b"],[1,"body-page-container"],[1,"container-fluid"],[1,"row"],[1,"col-12"],[1,"whitecard","no-bg"],[1,"center-div"],[1,"col-12","col-md-12"],[1,"ux-nav-tabs",2,"margin","0"],[1,"responsive-tab","custom-card","bg-custom","pad-custom2","mar-custom3"],[1,"custom-width"],["role","tablist",1,"nav","nav-tabs","nav-justified","bor-n"],["class","nav-item1",3,"ngClass",4,"ngFor","ngForOf"],[1,"tab-content","bg-transparent","mb-3"],["id","upi",1,"tab-pane","active"],[1,"col-sm-12","col-12","col-md-12"],[1,"bg-white1","dark-bg2"],[1,"responsive-tab"],["id","tab1",1,"custom-width"],["role","tablist",1,"tabs","tab1","info-list2"],["role","presentation",3,"click"],[1,"nav-link"],["id","last-year",1,"panel","entry-content","tab-pane",3,"hidden"],[1,"col-sm-12","col-12","col-md-6"],[1,"chart-heading"],[1,"light-text"],[1,"chart-box","pt-0","pb-0"],[1,"chart-area2"],["id","dpTransOverview","width","600","height","500"],["id","this-year",1,"panel","entry-content","tab-pane",3,"hidden"],["id","dpTransOverview2","width","600","height","500"],[1,"bg-white1","dark-bg"],["id","tab3",1,"custom-width"],["role","tablist",1,"tabs","tab2","info-list1"],["id","BDB",1,"panel","entry-content1","tab-pane",3,"hidden"],[1,"col-sm-10","col-10","col-md-6"],[1,"mb-4"],[1,"col-sm-2","col-2","col-md-6"],[1,"filter-list-info","mar-t"],["href","#","title","filter",1,"filter-btn"],[1,"icon"],["src","assets/images/svg/filter.svg","alt","filter-icon"],[1,"filter-section"],[1,"lst-filter"],["href","#",1,"common-action"],[1,"chart-area"],["id","dpTechDecline","width","600","height","350"],[1,"cachartdatatable"],[1,"ind4"],[1,"ind3"],["id","non-bd",1,"panel","entry-content1","tab-pane",3,"hidden"],["id","dpTechDecline2","width","600","height","350"],[1,"row","mb-4"],["id","dpBusiDecline","width","600","height","500"],["id","imps",1,"tab-pane"],[1,"nav-item1",3,"ngClass"],["data-toggle","tab",1,"nav-link","active",3,"click"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._UZ(6,"app-userdetails"),t.TgZ(7,"div",4)(8,"div",6)(9,"div",7)(10,"div",4)(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"ul",12),t.YNc(16,g,5,4,"li",13),t.qZA()()()()(),t.TgZ(17,"div",8)(18,"div",14)(19,"div",15)(20,"div",4)(21,"div",16)(22,"div",17)(23,"div",4)(24,"div",16)(25,"div",18)(26,"div",19)(27,"ul",20)(28,"li",21),t.NdJ("click",function(){return a.onLastYear("lastyear")}),t.TgZ(29,"a",22)(30,"em"),t._uU(31,"Last Year"),t.qZA()()(),t.TgZ(32,"li",21),t.NdJ("click",function(){return a.onLastYear("thisyear")}),t.TgZ(33,"a",22)(34,"em"),t._uU(35,"This Year"),t.qZA()()()()()()()(),t.TgZ(36,"div",4)(37,"div",8)(38,"div",23)(39,"div",4)(40,"div",24)(41,"div",25)(42,"h2",26),t._uU(43,"Transactions Overview"),t.qZA(),t.TgZ(44,"h5",26),t._uU(45,"Number of Transactions"),t.qZA()()()(),t.TgZ(46,"div",4)(47,"div",16)(48,"div")(49,"div",27)(50,"div",28),t._UZ(51,"canvas",29),t.qZA()()()()()(),t.TgZ(52,"div",30)(53,"div",4)(54,"div",24)(55,"div",25)(56,"h2",26),t._uU(57,"Transactions Overview"),t.qZA(),t.TgZ(58,"h5",26),t._uU(59,"Number of Transactions"),t.qZA()()()(),t.TgZ(60,"div",4)(61,"div",16)(62,"div")(63,"div",27)(64,"div",28),t._UZ(65,"canvas",31),t.qZA()()()()()()()()()(),t.TgZ(66,"div",16)(67,"div",32)(68,"div",4)(69,"div",16)(70,"div",18)(71,"div",33)(72,"ul",34)(73,"li",21),t.NdJ("click",function(){return a.onBankDeclineBD("bd")}),t.TgZ(74,"a",22)(75,"em"),t._uU(76,"Bank Decline BD"),t.qZA()()(),t.TgZ(77,"li",21),t.NdJ("click",function(){return a.onBankDeclineBD("nonbd")}),t.TgZ(78,"a",22)(79,"em"),t._uU(80,"Non-BD"),t.qZA()()()()()()()(),t.TgZ(81,"div",4)(82,"div",8)(83,"div",35)(84,"div",4)(85,"div",36)(86,"div",37)(87,"h2",26),t._uU(88,"Technical Decline"),t.qZA()()(),t.TgZ(89,"div",38)(90,"ul",39)(91,"li")(92,"a",40)(93,"div",41),t._UZ(94,"img",42),t.qZA()(),t.TgZ(95,"div",43)(96,"ul",44)(97,"li")(98,"a",45),t._uU(99," All "),t.qZA()(),t.TgZ(100,"li")(101,"a",45),t._uU(102," Financial "),t.qZA()(),t.TgZ(103,"li")(104,"a",45),t._uU(105," Non-Financial "),t.qZA()()()()()()()(),t.TgZ(106,"div",4)(107,"div",16)(108,"div")(109,"div",27)(110,"div",46),t._UZ(111,"canvas",47),t.TgZ(112,"div",48)(113,"table")(114,"tr"),t._UZ(115,"th"),t.TgZ(116,"th")(117,"em"),t._uU(118,"Invalid Transaction"),t.qZA()(),t.TgZ(119,"th")(120,"em"),t._uU(121,"Unable To Process Due To Remitter Side Issue"),t.qZA()(),t.TgZ(122,"th")(123,"em"),t._uU(124,"Response Code Error"),t.qZA()(),t.TgZ(125,"th")(126,"em"),t._uU(127,"Requath Time Out For Pay"),t.qZA()(),t.TgZ(128,"th")(129,"em"),t._uU(130,"PSP Not Available"),t.qZA()()(),t.TgZ(131,"tr")(132,"td")(133,"em"),t._UZ(134,"i",49),t._uU(135,"For The Day Count"),t.qZA()(),t.TgZ(136,"td")(137,"em"),t._uU(138,"30445"),t.qZA()(),t.TgZ(139,"td")(140,"em"),t._uU(141,"26"),t.qZA()(),t.TgZ(142,"td")(143,"em"),t._uU(144,"558"),t.qZA()(),t.TgZ(145,"td")(146,"em"),t._uU(147,"129"),t.qZA()(),t.TgZ(148,"td")(149,"em"),t._uU(150,"32"),t.qZA()()(),t.TgZ(151,"tr")(152,"td")(153,"em"),t._UZ(154,"i",50),t._uU(155,"Month To Date Count"),t.qZA()(),t.TgZ(156,"td")(157,"em"),t._uU(158,"532460"),t.qZA()(),t.TgZ(159,"td")(160,"em"),t._uU(161,"53822"),t.qZA()(),t.TgZ(162,"td")(163,"em"),t._uU(164,"6377"),t.qZA()(),t.TgZ(165,"td")(166,"em"),t._uU(167,"2271"),t.qZA()(),t.TgZ(168,"td")(169,"em"),t._uU(170,"173"),t.qZA()()()()()()()()()()(),t.TgZ(171,"div",51)(172,"div",4)(173,"div",36)(174,"div",37)(175,"h2",26),t._uU(176,"Technical Decline"),t.qZA()()(),t.TgZ(177,"div",38)(178,"ul",39)(179,"li")(180,"a",40)(181,"div",41),t._UZ(182,"img",42),t.qZA()(),t.TgZ(183,"div",43)(184,"ul",44)(185,"li")(186,"a",45),t._uU(187," All "),t.qZA()(),t.TgZ(188,"li")(189,"a",45),t._uU(190," Financial "),t.qZA()(),t.TgZ(191,"li")(192,"a",45),t._uU(193," Non-Financial "),t.qZA()()()()()()()(),t.TgZ(194,"div",4)(195,"div",16)(196,"div")(197,"div",27),t._UZ(198,"canvas",52),t.TgZ(199,"div",48)(200,"table")(201,"tr"),t._UZ(202,"th"),t.TgZ(203,"th")(204,"em"),t._uU(205,"For The Day Count"),t.qZA()(),t.TgZ(206,"th")(207,"em"),t._uU(208,"Month To Date Count"),t.qZA()()(),t.TgZ(209,"tr")(210,"td")(211,"em"),t._UZ(212,"i",49),t._uU(213,"No Responsce From CBS"),t.qZA()(),t.TgZ(214,"td")(215,"em"),t._uU(216,"741"),t.qZA()(),t.TgZ(217,"td")(218,"em"),t._uU(219,"100837"),t.qZA()()(),t.TgZ(220,"tr")(221,"td")(222,"em"),t._UZ(223,"i",50),t._uU(224,"Remitter CBS Offline"),t.qZA()(),t.TgZ(225,"td")(226,"em"),t._uU(227,"83"),t.qZA()(),t.TgZ(228,"td")(229,"em"),t._uU(230,"23148"),t.qZA()()()()()()()()()()()()()(),t.TgZ(231,"div",16)(232,"div",32)(233,"div",53)(234,"div",36)(235,"div")(236,"h2",26),t._uU(237,"Business Decline"),t.qZA()()(),t.TgZ(238,"div",38)(239,"ul",39)(240,"li")(241,"a",40)(242,"div",41),t._UZ(243,"img",42),t.qZA()(),t.TgZ(244,"div",43)(245,"ul",44)(246,"li")(247,"a",45),t._uU(248," All "),t.qZA()(),t.TgZ(249,"li")(250,"a",45),t._uU(251," Financial "),t.qZA()(),t.TgZ(252,"li")(253,"a",45),t._uU(254," Non-Financial "),t.qZA()()()()()()()(),t.TgZ(255,"div",4)(256,"div",16)(257,"div")(258,"div",27)(259,"div",46),t._UZ(260,"canvas",54),t.qZA()()()()()()()()(),t._UZ(261,"div",55),t.qZA()()()()()()()()()()()()),2&i&&(t.xp6(16),t.Q6J("ngForOf",a.tablist),t.xp6(22),t.Q6J("hidden",!a.showLastYear),t.xp6(14),t.Q6J("hidden",!a.showThisYear),t.xp6(31),t.Q6J("hidden",!a.showBD),t.xp6(88),t.Q6J("hidden",!a.showNonBD))},dependencies:[e.mk,e.sg,p.w,e.gd]}),n})()}];let b=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[v.Bz.forChild(Z),v.Bz]}),n})();var _=s(8524);let f=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[e.ez,b,_.v,_.v]}),n})()},7999:(T,m,s)=>{s.d(m,{w:()=>d});var e=s(8256),v=s(7825);let d=(()=>{class t{constructor(g){this.route=g}ngOnInit(){}goToPage(g){this.route.navigate(["/"+g])}}return t.\u0275fac=function(g){return new(g||t)(e.Y36(v.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-userdetails"]],decls:91,vars:0,consts:[[1,"row"],[1,"whitecard"],[1,"center-div"],[1,"user-details-section"],[1,"myprofile-info"],[1,"profile-circle"],["src","assets/images/icons/user2.png","alt","user-img"],["src","assets/images/svg/notification.svg","alt","notification-icon"],[1,"button"],[1,"bottom-footer1"],[1,"btn-div"],["onclick","window.location.href='#'",1,"ux-button","primary","sm-mob"],["src","assets/images/svg/email2.svg","alt","message-icon"],["onclick","window.location.href='#'",1,"ux-button","blue-mid","sm-mob"],["src","assets/images/svg/setting.svg","alt","setting-icon"],[1,"row","mb-2"],[1,"slide-text"],[1,"marquee-list"],["src","assets/images/svg/go-up1.svg","alt","icon"],["src","assets/images/svg/go-down.svg","alt","icon"],[1,"col-12","col-md-12"],[1,"language-bar"],[1,"lang-dropdown"],["href","javascript:;",1,"btn-selectlang"],[1,"language-list",2,"display","none"],[1,"lst-languages"],[3,"click"],[1,"language-selected"],[1,"list-nh"],["href","javascript:;"],[1,"dropdown-sub"],["href","#"]],template:function(g,o){1&g&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.qZA(),e.TgZ(7,"h1"),e._uU(8,"Welcome back, Brian! "),e.qZA(),e.TgZ(9,"em"),e._UZ(10,"img",7),e._uU(11," You have 2 new messages and 15 new tasks"),e.qZA()(),e.TgZ(12,"div",8)(13,"ul",9)(14,"li")(15,"div",10)(16,"button",11),e._UZ(17,"img",12),e._uU(18," Messages "),e.qZA()(),e.TgZ(19,"div",10)(20,"button",13),e._UZ(21,"img",14),e._uU(22," Settings "),e.qZA()()()()()()(),e.TgZ(23,"div",15)(24,"div",16)(25,"marquee")(26,"div",0)(27,"ul",17)(28,"li")(29,"em"),e._uU(30,"Top Payee App"),e.qZA()(),e.TgZ(31,"li")(32,"em"),e._uU(33,"Google Pay 29.66 % "),e._UZ(34,"img",18),e.qZA()(),e.TgZ(35,"li")(36,"em"),e._uU(37,"BHIM YES Pay 39.72 % "),e._UZ(38,"img",19),e.qZA()(),e.TgZ(39,"li")(40,"em"),e._uU(41,"Other Payee Apps 45.22 % "),e._UZ(42,"img",19),e.qZA()()()()()()(),e.TgZ(43,"div",2)(44,"div",0)(45,"div",20)(46,"div",21)(47,"div",22)(48,"a",23)(49,"em"),e._uU(50,"Channel Analytics"),e.qZA(),e._UZ(51,"i"),e.qZA(),e.TgZ(52,"div",24)(53,"ul",25)(54,"li",26),e.NdJ("click",function(){return o.goToPage("dashboard")}),e.TgZ(55,"a",27),e._uU(56,"Channel Analytics"),e.qZA()(),e.TgZ(57,"li",26),e.NdJ("click",function(){return o.goToPage("digitalpayment")}),e.TgZ(58,"a"),e._uU(59,"Digital Payments"),e.qZA()(),e.TgZ(60,"li",28)(61,"a",29),e._uU(62,"ATM "),e._UZ(63,"i"),e.qZA(),e.TgZ(64,"ul",30)(65,"li",26),e.NdJ("click",function(){return o.goToPage("atm")}),e.TgZ(66,"a"),e._uU(67,"Main Menu"),e.qZA()(),e.TgZ(68,"li")(69,"a",31),e._uU(70,"ATM Profile"),e.qZA()(),e.TgZ(71,"li")(72,"a",31),e._uU(73,"ATM Placement"),e.qZA()(),e.TgZ(74,"li")(75,"a",31),e._uU(76,"ATM Transaction Analysis"),e.qZA()()()(),e.TgZ(77,"li",28)(78,"a",29),e._uU(79,"POS "),e._UZ(80,"i"),e.qZA(),e.TgZ(81,"ul",30)(82,"li")(83,"a",31),e._uU(84,"Main Menu"),e.qZA()(),e.TgZ(85,"li")(86,"a",31),e._uU(87,"Card Usage"),e.qZA()(),e.TgZ(88,"li")(89,"a",31),e._uU(90,"Merchant Analysis"),e.qZA()()()()()()()()()()()()())}}),t})()},8524:(T,m,s)=>{s.d(m,{v:()=>g});var e=s(6895),v=s(7825),d=s(8256);const t=[];let p=(()=>{class o{}return o.\u0275fac=function(Z){return new(Z||o)},o.\u0275mod=d.oAB({type:o}),o.\u0275inj=d.cJS({imports:[v.Bz.forChild(t),v.Bz]}),o})(),g=(()=>{class o{}return o.\u0275fac=function(Z){return new(Z||o)},o.\u0275mod=d.oAB({type:o}),o.\u0275inj=d.cJS({imports:[e.ez,p]}),o})()}}]);