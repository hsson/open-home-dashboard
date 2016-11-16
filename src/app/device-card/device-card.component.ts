import { Component, OnInit, Input } from '@angular/core';
import { ISmartDevice, SmartDeviceType } from '../shared/device.interface';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css']
})
export class DeviceCardComponent implements OnInit {

  @Input()
  device: ISmartDevice;

  private type = SmartDeviceType;

  constructor() { }

  ngOnInit() {

  }

  private hasAction(): boolean {
    return this.device.getType() === this.type.Toggle;
  }
}
