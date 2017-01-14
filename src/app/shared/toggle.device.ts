import { IToggleDevice, SmartDeviceType } from './device.interface';

export class SimpleToggle implements IToggleDevice {

    public id: number;
    public name: string;
    public description: string;
    public pin: number;
    private type: SmartDeviceType = SmartDeviceType.Toggle;
    private toggled: boolean = false;

    constructor(name: string, description: string = 'Toggleable device') {
        this.name = name;
        this.description = description;
    }

    public getType(): SmartDeviceType {
        return this.type;
    }

    public toggle(): void {
        this.toggled = !this.toggled;
    }

    public isToggled(): boolean {
        return this.toggled;
    }
}