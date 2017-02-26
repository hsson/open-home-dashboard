import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { SmartDeviceType } from './shared/device.interface';

import 'rxjs/add/operator/toPromise';

import { IToggleDevice, ISmartDevice } from './shared/device.interface';
import { SimpleToggle } from './shared/toggle.device';
import { GeneralDevice } from './shared/general.device';
import { DhtSensor } from './shared/dhtsensor.device';

@Injectable()
export class DeviceService {
  controllerUrl: string = 'http://95.80.43.89:8000/api';

  constructor(
    private http: Http
  ) { }

  getSensor(id: number): Promise<number[]> {
    return this.http.get(`${this.controllerUrl}/sensors/${id}`)
      .toPromise()
      .then(resp => this.parseSensor(resp.json()));
  }

  toggleDevice(id: number): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.controllerUrl}/sensors/${id}/t`, {}, options)
      .toPromise()
      .then(response => console.log(response.json()))
      .catch(this.handleError);
  }

  offDevice(id: number): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.controllerUrl}/sensors/${id}/a`, {}, options)
      .toPromise()
      .then(response => console.log(response.json()))
      .catch(this.handleError);
  }

  onDevice(id: number): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.controllerUrl}/sensors/${id}/p`, {}, options)
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

  parseSensor(response: JSON): Promise<number[]> {
    let value = response['values'];
    return Promise.resolve(value);
  }

  parseResponse(response: JSON): Promise<ISmartDevice[]> {
    let result: ISmartDevice[] = new Array;
    for (let key in response) {
      if (response.hasOwnProperty(key)) {
        let device = response[key];
        switch (device['type']) {
            case SmartDeviceType.Toggle: result.push(new SimpleToggle(device['id'], device['name'], device['description'], this)); break;
            case SmartDeviceType.DhtSensor: result.push(new DhtSensor(device['id'], device['name'], device['description'], this)); break;
            default: result.push(new GeneralDevice(device['id'], device['name'], device['description'], device['type'], device['pin'])); break;
        }
      }
    }
    return Promise.resolve(result);
  }

  handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
