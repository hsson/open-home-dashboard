export enum SmartDeviceType { Unknown = -1, Toggle = 0, Sensor = 1, DhtSensor = 2}

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
