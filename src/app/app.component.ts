import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public hasScrolled: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ){}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.scrollingElement.scrollTop;
    if(number > 300){
      this.hasScrolled = true;
    }else{
      this.hasScrolled = false;
    }
  }
}
