import { ISmartDevice, SmartDeviceType } from './device.interface';
import { DeviceService } from '../device.service';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';


export class DhtSensor implements ISmartDevice {

    public id: number;
    public name: string;
    public description: string;
    public pin: number;
    public humidity: number;
    public temperature: number;
    private type: SmartDeviceType = SmartDeviceType.DhtSensor;
    private deviceService;

    constructor(
        id: number,
        name: string,
        description: string = 'DHT sensor, can measure temperature and humidity',
        deviceService: DeviceService
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = this.getType();
        this.deviceService = deviceService;
        this.getSensor();
    }

    public getSensor(): void {
        this.deviceService.getSensor(this.id)
            .then(value =>  {
                this.temperature = value[0];
                this.humidity = value[1];
            });
    }

    public getType(): SmartDeviceType {
        return this.type;
    }
}