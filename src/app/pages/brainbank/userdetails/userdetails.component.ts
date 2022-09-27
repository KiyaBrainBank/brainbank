import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ThemesettingsComponent } from '../../common-ui/themesettings/themesettings.component';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.sass']
})
export class UserdetailsComponent implements OnInit {
 @Input() item:string;
  mainMenuList: any;
  selectedMenuName: string;
  constructor(private route: Router) { }

  ngOnInit(): void {
    console.log("item",this.item);
    this.selectedMenuName=this.item;
    this.mainMenuList = [{
      "Status": "Active",
      "menuName": "Channel Analytics",
      "route": "dashboard",
      "subMenu": []
    }, {
      "Status": "Active",
      "menuName": "Digital Payments",
      "route": "digitalpayment",
      "subMenu": []
    }, {
      "Status": "Active",
      "menuName": "ATM",
      "subMenu": [{
        "Status": "Active",
        "menuName": "Main Menu",
        "route": "atm",
      }, {
        "Status": "Active",
        "menuName": "ATM Profile",
        "route": "atmprofile",
      }, {
        "Status": "Active",
        "menuName": "ATM Placement",
        "route": "atmplacement",
      }, {
        "Status": "Active",
        "menuName": "ATM Transaction Analysis",
        "route": "atmtransaction-analysis",
      }]
    }, {
      "Status": "Active",
      "menuName": "POS",
      "subMenu": [{
        "Status": "Active",
        "menuName": "Main Menu",
        "route": "posmainmenu",
      },
      {
        "Status": "Active",
        "menuName": "Card Usage",
        "route": "poscardusage",
      },
      {
        "Status": "Active",
        "menuName": "Merchant Analysis",
        "route": "posmerchantanalysis",
      }]
    }
    ]
  }
  goToPage(route) {
    // this.selectedMenuName=route;
    this.route.navigate(['/' + route])
  }
}
