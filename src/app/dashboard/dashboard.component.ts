import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import * as globals from '../globals';

const TITLE = `Dashboard | ${globals.TITLE_SUFFIX}`;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(TITLE);
  }

}
