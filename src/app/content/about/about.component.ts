import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { AboutService } from './../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [ AboutService ],
  animations: [
    trigger('aboutPictureAnimation', [
      state('in', style({
        'transform': 'translateY(0) rotate(-347deg)',
        'opacity': '0',
      })),
      state('void', style({
        'transform': 'translateY(-40%) rotate(0deg)',
        'opacity': '0'
      })),
      transition('void => *', animate('1s 500ms ease-in-out')),
      transition('* => void', animate('1s ease-in-out'))
    ]),
    trigger('habilityAnimation', [
      state('in', style({
        'transform': 'translateY(0)',
        'opacity': '0',
      })),
      state('void', style({
        'transform': 'translateY(-40%)',
        'opacity': '0'
      })),
      transition('void => *', animate('1s 500ms ease-in-out')),
      transition('* => void', animate('1s ease-in-out'))
    ])
  ]
})
export class AboutComponent implements OnInit {
  @Input() hasScrolled: boolean;

  private habilities: Array<any> = [];

  constructor(
    private _aboutService: AboutService
  ) { }

  ngOnInit() {
    this.habilities = this._aboutService.getHabilities();
  }

}
