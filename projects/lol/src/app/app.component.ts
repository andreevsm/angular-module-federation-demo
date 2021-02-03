import { Component, OnInit } from '@angular/core';
import { CommonService } from 'projects/common/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user = null;

  constructor (
    private commonService: CommonService,
  ) {}

  public ngOnInit(): void {
    this.user = this.commonService.user;
  }
}

