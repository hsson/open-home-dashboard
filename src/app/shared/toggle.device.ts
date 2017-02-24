import { IToggleDevice, SmartDeviceType } from './device.interface';
import { DeviceService } from '../device.service';

export class SimpleToggle implements IToggleDevice {

    public id: number;
    public name: string;
    public description: string;
    public pin: number;
    private deviceService: DeviceService;
    private type: SmartDeviceType = SmartDeviceType.Toggle;
    private toggled: boolean = false;

    constructor(
        id: number,
        name: string, 
        description: string = 'Toggleable device',
        deviceService: DeviceService
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.deviceService = deviceService;
    }

    public getType(): SmartDeviceType {
        return this.type;
    }

    public toggle(): void {
        this.deviceService.toggleDevice(this.id)
            .then((value) => this.toggled = !this.toggled);
    }

    public isToggled(): boolean {
        return this.toggled;
    }
}