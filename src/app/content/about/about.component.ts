import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Subscription } from 'rxjs/Rx';
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
  public ieBrowser: boolean = false;
  private inscricao: Subscription;

  constructor(
    private _aboutService: AboutService
  ) { }

  ngOnInit() {
    this.ieBrowser = window.navigator.userAgent.indexOf("Trident") > -1 || window.navigator.userAgent.indexOf("MSIE") > -1;
    this.inscricao = this._aboutService.getHabilities()
      .subscribe(data => {
        this.habilities = data.data;
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe;
  }

}
