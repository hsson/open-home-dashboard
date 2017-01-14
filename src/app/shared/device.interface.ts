export enum SmartDeviceType { Unknown, Toggle, Sensor, DhtSensor }

export interface ISmartDevice {
    id: number;
    name: string;
    description: string;
    pin: number;
    getType(): SmartDeviceType;
}

export interface IToggleDevice extends ISmartDevice {
    toggle(): void;
    isToggled(): boolean;
}
