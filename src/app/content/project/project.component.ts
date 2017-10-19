import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { ProjectService } from './../../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {

  public projectsList: Array<any> = [];
  private inscricao: Subscription;
  public loading: boolean = true;
  public error: boolean = false;

  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    // this.projectsList = [];
    // this.loading = false;
    this.inscricao = this._projectService
      .getRepositories()
      .subscribe(data => {
        this.loading = false;
        this.error = false;
        this.projectsList = data.slice(0,6);
      },
      error => {
        this.error = true;
        this.loading = false;
      });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe;
  }

  getCoverImage(project): string{
    let image: string;
    let language: string = project.name.split("-");
    //console.log(language);
    switch (language[0]) {
      case "android":
        image = "../../assets/images/mobile-app-icon.png";
        break;
      
      case "angular":
        image = "../../assets/images/angular-icon.png";
        break;

      case "angularjs":
        image = "../../assets/images/angular-icon.png";
        break;
      
      case "javascript":
        image = "../../assets/images/javascript-icon.png";
        break;

      case "ionic":
        image = "../../assets/images/ionic-icon.png";
        break;

      case "react":
        image = "../../assets/images/react-icon.png";
        break;

      default:
        image = "../../assets/images/coding-html-icon.png";
        break;
    }

    return image;
  }

}
