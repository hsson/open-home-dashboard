import { Component, OnInit } from '@angular/core';
import { ISmartDevice, SmartDeviceType } from '../shared/device.interface';
import { SimpleToggle } from '../shared/toggle.device';

import { Title } from '@angular/platform-browser';
import { DeviceService } from '../device.service';
import * as globals from '../globals';

const TITLE = `Dashboard | ${globals.TITLE_SUFFIX}`;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  devices: ISmartDevice[] = [new SimpleToggle('Smart Lamp', 'A lamp that can be turned on or off')];

  constructor(
    private titleService: Title,
    private deviceService: DeviceService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(TITLE);
    this.deviceService.getDevices()
      .then(devices => this.devices = devices);
  }

}
