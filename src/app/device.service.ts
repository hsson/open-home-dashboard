import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { SmartDeviceType } from './shared/device.interface';

import 'rxjs/add/operator/toPromise';

import { IToggleDevice, ISmartDevice } from './shared/device.interface';
import { SimpleToggle } from './shared/toggle.device';


@Injectable()
export class DeviceService {
  controllerUrl: string = 'http://192.168.0.108:8000/api';

  constructor(
    private http: Http
  ) { }

  getDevices(): Promise<ISmartDevice[]> {
    return this.http.get(`${this.controllerUrl}/sensors`)
      .toPromise()
      .then(response => this.parseResponse(response.json()))
      .catch(error => this.handleError(error));
  }

  parseResponse(response: JSON): Promise<ISmartDevice[]> {
    var result: ISmartDevice[] = new Array;
    for (var key in response) {
      var device = response[key];
      var type: SmartDeviceType; 
      switch (device["type"]) {
            case 0: result.push(new SimpleToggle(device["name"], device["description"])); break;
      }
    }
    return Promise.resolve(result);
  }

  handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
