import { Component, OnInit, Input } from '@angular/core';
import { ISmartDevice } from '../shared/device.interface';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css']
})
export class DeviceCardComponent implements OnInit {

  @Input()
  device: ISmartDevice;

  constructor() { }

  ngOnInit() {

  }

}
