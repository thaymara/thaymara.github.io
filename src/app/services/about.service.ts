import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {

  constructor() { }

  getHabilities(): Array<any>{
    return [
      {
        icon: 'code',
        title: "Front-end",
        habilites: "HTML(5), CSS3, SASS, JavaScript, jQuery, Angular(CLI), Bootstrap, Gulp, Bower"
      },
      {
        icon: 'storage',
        title: "Back-end",
        habilites: "NodeJs, Java"
      },
      {
        icon: 'phone_android',
        title: "Mobile",
        habilites: "Ionic, Android"
      }
    ]
  }
}
