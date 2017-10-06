import { Component, OnInit } from '@angular/core';

import { ProjectService } from './../../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {

  private projectsList: Array<any> = [];
  private loading: boolean = true;
  private error: boolean = false;

  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    this._projectService
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

}
