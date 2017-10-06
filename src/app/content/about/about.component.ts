import { Component, OnInit } from '@angular/core';

import { AboutService } from './../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [ AboutService ]
})
export class AboutComponent implements OnInit {

  private habilities: Array<any> = [];

  constructor(
    private _aboutService: AboutService
  ) { }

  ngOnInit() {
    this.habilities = this._aboutService.getHabilities();
  }

}
