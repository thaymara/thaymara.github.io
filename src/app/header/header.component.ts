import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.parallax').parallax();
  }

  goToAbout(){
    jQuery('html, body').stop().animate({
      scrollTop: jQuery("#about").offset().top //set offset to scroll
    }, 1000);
  }

}
