import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  userProfile:boolean = false;
  flag:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleFullscreen(){
    var elem = document.documentElement;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      elem.requestFullscreen();
    }
  }
}
