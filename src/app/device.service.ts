import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
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

  toggleDevice(id: number): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.controllerUrl}/sensors/${id}/t`, {}, options)
      .toPromise()
      .then(response => console.log(response.json()))
      .catch(this.handleError);
  }

  getDevices(): Promise<ISmartDevice[]> {
    return this.http.get(`${this.controllerUrl}/sensors`)
      .toPromise()
      .then(response => this.parseResponse(response.json()))
      .catch(error => this.handleError(error));
  }

  parseResponse(response: JSON): Promise<ISmartDevice[]> {
    let result: ISmartDevice[] = new Array;
    for (var key in response) {
      var device = response[key];
      var type: SmartDeviceType; 
      switch (device["type"]) {
            case 0: result.push(new SimpleToggle(device["id"], device["name"], device["description"], this)); break;
      }
    }
    return Promise.resolve(result);
  }

  handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
