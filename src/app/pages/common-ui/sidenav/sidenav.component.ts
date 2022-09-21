import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {
  mainMenuList:any=[];
  isSelectedRoute:string = 'dashboard';
  constructor(public router:Router) { }

  ngOnInit(): void {
    this.mainMenuList = [{
      "Status": "Active",
      "sequenceNo": "01",
      "menuName": "Dashboard",
      "ID": "01",
      "type": "menu",
      "icon": "dashboard-interface.svg",
      "route": "dashboard",
      "subMenu": []
    },{
      "Status": "Active",
      "sequenceNo": "02",
      "menuName": "Analytics",
      "ID": "01",
      "type": "menu",
      "icon": "analytics.svg",
      "route": "",
      "subMenu": [{
          "Status": "Active",
          "sequenceNo": "04",
          "menuName": "Customer Analysis",
          "ID": "04",
          "icon": "right-arrow.svg",
          "type": "submenu",
          "route": "",
          "subSubMenu": [
            {
              "Status": "Active",
              "sequenceNo": "04",
              "menuName": "Corporate Customer Analysis",
              "ID": "04",
              "icon": "right-arrow.svg",
              "type": "subsubmenu",
              "route": "corporateCustomerAnalysis"
            },{
              "Status": "Active",
              "sequenceNo": "04",
              "menuName": "Individual Customer Analysis",
              "ID": "04",
              "icon": "right-arrow.svg",
              "type": "subsubmenu",
              "route": "individualCustomerAnalysis"
            },{
              "Status": "Active",
              "sequenceNo": "04",
              "menuName": "Corporate 360",
              "ID": "04",
              "icon": "right-arrow.svg",
              "type": "subsubmenu",
              "route": "corporateThreeSixty"
            },{
              "Status": "Active",
              "sequenceNo": "04",
              "menuName": "Cross Sell",
              "ID": "04",
              "icon": "right-arrow.svg",
              "type": "subsubmenu",
              "route": "crossSell"
            },{
              "Status": "Active",
              "sequenceNo": "04",
              "menuName": "Up Sell",
              "ID": "04",
              "icon": "right-arrow.svg",
              "type": "subsubmenu",
              "route": "upSell"
            },{
              "Status": "Active",
              "sequenceNo": "04",
              "menuName": "Customer Risk",
              "ID": "04",
              "icon": "right-arrow.svg",
              "type": "subsubmenu",
              "route": "customerRisk"
            },{
              "Status": "Active",
              "sequenceNo": "04",
              "menuName": "Transaction Analysis Dashboard",
              "ID": "04",
              "icon": "right-arrow.svg",
              "type": "subsubmenu",
              "route": "transactionAnalysisDashboard"
            }
          ]
      },{
        "Status": "Active",
        "sequenceNo": "04",
        "menuName": "Debt Analysis",
        "ID": "04",
        "icon": "right-arrow.svg",
        "type": "submenu",
        "route": "",
        "subSubMenu": [
          {
            "Status": "Active",
            "sequenceNo": "04",
            "menuName": "Loan Forecasting",
            "ID": "04",
            "icon": "right-arrow.svg",
            "type": "subsubmenu",
            "route": "loanForecasting"
          },{
            "Status": "Active",
            "sequenceNo": "04",
            "menuName": "Sanction & Maturity Analysis",
            "ID": "04",
            "icon": "right-arrow.svg",
            "type": "subsubmenu",
            "route": "sanctionAndMaturityAnalysis"
          },{
            "Status": "Active",
            "sequenceNo": "04",
            "menuName": "Geogriphical Loan Distribution",
            "ID": "04",
            "icon": "right-arrow.svg",
            "type": "subsubmenu",
            "route": "geogriphicalLoanDistribution"
          }
        ]
    },{
      "Status": "Active",
      "sequenceNo": "04",
      "menuName": "Digital Transaction",
      "ID": "04",
      "icon": "right-arrow.svg",
      "type": "submenu",
      "route": "",
      "subSubMenu": [
        {
          "Status": "Active",
          "sequenceNo": "04",
          "menuName": "ATM Analyasis",
          "ID": "04",
          "icon": "right-arrow.svg",
          "type": "subsubmenu",
          "route": "atmAnalysis"
        },{
          "Status": "Active",
          "sequenceNo": "04",
          "menuName": "Omni Channel Transaction Summary",
          "ID": "04",
          "icon": "right-arrow.svg",
          "type": "subsubmenu",
          "route": "omniChannelTransactionSummary"
        },{
          "Status": "Active",
          "sequenceNo": "04",
          "menuName": "Hourly Mobile App Transaction Analysis",
          "ID": "04",
          "icon": "right-arrow.svg",
          "type": "subsubmenu",
          "route": "hourlyMobileAppTransactionAnalysis"
        },{
          "Status": "Active",
          "sequenceNo": "04",
          "menuName": "Mobile App Transaction Market Share",
          "ID": "04",
          "icon": "right-arrow.svg",
          "type": "subsubmenu",
          "route": "mobileAppTransactionMarketShare"
        },{
          "Status": "Active",
          "sequenceNo": "04",
          "menuName": "Mobile App Peak Volume Analysis",
          "ID": "04",
          "icon": "right-arrow.svg",
          "type": "subsubmenu",
          "route": "mobileAppPeakVolumeAnalysis"
        },{
          "Status": "Active",
          "sequenceNo": "04",
          "menuName": "Real Time Mobile App Transaction Analysis",
          "ID": "04",
          "icon": "right-arrow.svg",
          "type": "subsubmenu",
          "route": "realTimeMobileAppTransactionAnalysis"
        },{
          "Status": "Active",
          "sequenceNo": "04",
          "menuName": "Mobile App Transaction Analysis",
          "ID": "04",
          "icon": "right-arrow.svg",
          "type": "subsubmenu",
          "route": "mobileAppTransactionAnalysis"
        }
      ]
  },{
    "Status": "Active",
    "sequenceNo": "04",
    "menuName": "Feedback Analysis",
    "ID": "04",
    "icon": "feedback.svg",
    "type": "submenu",
    "route": "",
    "subSubMenu": [
      {
        "Status": "Active",
        "sequenceNo": "04",
        "menuName": "Bot Analysis",
        "ID": "04",
        "icon": "right-arrow.svg",
        "type": "subsubmenu",
        "route": "botAnalysis"
      },{
        "Status": "Active",
        "sequenceNo": "04",
        "menuName": "Survey / Feedback Analysis",
        "ID": "04",
        "icon": "right-arrow.svg",
        "type": "subsubmenu",
        "route": "surveyFeedbackAnalysis"
      }
    ]
},{
  "Status": "Active",
  "sequenceNo": "04",
  "menuName": "Decision Analysis",
  "ID": "04",
  "icon": "decision.svg",
  "type": "submenu",
  "route": "",
  "subSubMenu": [
    {
      "Status": "Active",
      "sequenceNo": "04",
      "menuName": "Funds Investment",
      "ID": "04",
      "icon": "right-arrow.svg",
      "type": "subsubmenu",
      "route": "fundsInvestment"
    },{
      "Status": "Active",
      "sequenceNo": "04",
      "menuName": "ATM Management",
      "ID": "04",
      "icon": "right-arrow.svg",
      "type": "subsubmenu",
      "route": "atmManagement"
    },{
      "Status": "Active",
      "sequenceNo": "04",
      "menuName": "Reward Points Recommendation",
      "ID": "04",
      "icon": "right-arrow.svg",
      "type": "subsubmenu",
      "route": "rewardPointsRecommendation"
    }
  ]
},{
  "Status": "Active",
  "sequenceNo": "04",
  "menuName": "What If Analysis",
  "ID": "04",
  "icon": "whatIfAnalysis.svg",
  "type": "submenu",
  "route": "",
  "subSubMenu": [
    {
      "Status": "Active",
      "sequenceNo": "04",
      "menuName": "Rate of Interest Deviation",
      "ID": "04",
      "icon": "right-arrow.svg",
      "type": "subsubmenu",
      "route": "rateofInterestDeviation"
    }
  ]
}]
    },{
      "Status": "Active",
      "sequenceNo": "01",
      "menuName": "AI / ML Module",
      "ID": "01",
      "type": "menu",
      "icon": "ai-ml-module.svg",
      "route": "aiMlModule",
      "subMenu": []
    },{
      "Status": "Active",
      "sequenceNo": "01",
      "menuName": "Data in Motion",
      "ID": "01",
      "type": "menu",
      "icon": "data.svg",
      "route": "dataInMotion",
      "subMenu": []
    },{
      "Status": "Active",
      "sequenceNo": "01",
      "menuName": "Reports",
      "ID": "01",
      "type": "menu",
      "icon": "reports.svg",
      "route": "reports",
      "subMenu": []
    },{
      "Status": "Active",
      "sequenceNo": "01",
      "menuName": "Administration",
      "ID": "01",
      "type": "menu",
      "icon": "admin.svg",
      "route": "administration",
      "subMenu": []
    },{
      "Status": "Active",
      "sequenceNo": "01",
      "menuName": "Master Configuration",
      "ID": "01",
      "type": "menu",
      "icon": "master.svg",
      "route": "masterConfiguration",
      "subMenu": []
    },{
      "Status": "Active",
      "sequenceNo": "01",
      "menuName": "User Guide",
      "ID": "01",
      "type": "menu",
      "icon": "user-guide.svg",
      "route": "userGuide",
      "subMenu": []
    }]
  }

  goToPage(routeName){debugger;
    this.isSelectedRoute = routeName;
    this.router.navigateByUrl("/"+routeName);
  }

}
