import { Component, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public hasScrolled: boolean = false;
  public currentLanguage: string = "";
  private inscricao: Subscription;

  constructor(
    private router: Router,
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

  ngOnInit(){
    this.inscricao = this.router.events.subscribe(() => {
      this.checkRouter();
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe;
  }

  checkRouter(){
    this.router.url.indexOf("en");
    if(this.router.url.indexOf("en") > -1){
      this.currentLanguage = "en"
    }else{
      this.currentLanguage = "pt"
    }
  }
}
