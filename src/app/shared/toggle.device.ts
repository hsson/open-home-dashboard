import { IToggleDevice, SmartDeviceType } from './device.interface';

export class SimpleToggle implements IToggleDevice {

    public name: string;
    public description: string;
    private type: SmartDeviceType = SmartDeviceType.Toggle;
    private toggled: boolean;

    constructor(name: string, description: string = 'You can toggle it on and off') {
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