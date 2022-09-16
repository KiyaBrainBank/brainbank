import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ThemesettingsComponent } from '../../common-ui/themesettings/themesettings.component';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.sass']
})
export class UserdetailsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goToPage(route){
    this.route.navigate(['/'+route])
  }
}
