import { Component, OnInit, Input } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() hasScrolled: boolean;

  constructor() { }

  ngOnInit() {
    jQuery('.parallax').parallax();
  }

}
