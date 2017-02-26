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

  devices: ISmartDevice[];

  constructor(
    private titleService: Title,
    private deviceService: DeviceService
  ) { 
    this.devices = [new SimpleToggle(0,'Smart Lamp', 'A lamp that can be turned on or off', deviceService)];
  }

  ngOnInit() {
    this.titleService.setTitle(TITLE);
    this.deviceService.getDevices()
      .then(devices => this.devices = devices);
  }

  allOff() {
    this.devices.forEach(device => {
      if (device.getType() === SmartDeviceType.Toggle) {
        (device as SimpleToggle).off();
      }
    });
  }

  allOn() {
     this.devices.forEach(device => {
      if (device.getType() === SmartDeviceType.Toggle) {
        (device as SimpleToggle).on();
      }
    });
  }

  allToggle() {
     this.devices.forEach(device => {
      if (device.getType() === SmartDeviceType.Toggle) {
        (device as SimpleToggle).toggle();
      }
    });
  }

}
