import { ISmartDevice, SmartDeviceType } from './device.interface';

export class GeneralDevice implements ISmartDevice {

    public id: number;
    public name: string;
    public description: string;
    public pin: number;
    private type: SmartDeviceType = SmartDeviceType.Toggle;
    private toggled: boolean = false;

    constructor(id: number, name: string, description: string = 'Toggleable device', type: number, pin: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.pin = pin;
        this.type = this.getDeviceType(type);
    }

    private getDeviceType(typeNo: number): SmartDeviceType {
        switch (typeNo) {
            case 0: return SmartDeviceType.Toggle;
            case 1: return SmartDeviceType.Sensor;
            case 2: return SmartDeviceType.DhtSensor;
            default: return SmartDeviceType.Unknown;
        }
    }

    public getType(): SmartDeviceType {
        return this.type;
    }
}