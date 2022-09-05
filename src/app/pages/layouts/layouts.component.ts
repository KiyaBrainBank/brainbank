import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Layout } from './layout.types';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.sass']
})
export class LayoutsComponent implements OnInit {
  layout: Layout = "classic";
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._updateLayout();
  }

  private _updateLayout(): void
    {
      this._activatedRoute.data.subscribe(params => {
        const layoutFromQueryParam = (params['layout']);
        if ( layoutFromQueryParam )
        {
            this.layout = layoutFromQueryParam;
        }
        console.log(params); 
      }
    );
    }

}
