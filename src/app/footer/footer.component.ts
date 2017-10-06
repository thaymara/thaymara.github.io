import { Component, OnInit } from '@angular/core';

import { AppSettings } from '../app.settings';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private createdYear: string = AppSettings.CREATEDYEAR;
  private currentYear: string;

  constructor() { }

  ngOnInit() {
    let year = new Date().getFullYear().toString();
    
    if(year > this.createdYear){
      this.currentYear = " - " + year;
    }
  }

}
