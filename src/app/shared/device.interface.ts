export enum SmartDeviceType { Toggle }

export interface ISmartDevice {
    name: string;
    description: string;
    getType(): SmartDeviceType;
}

export interface IToggleDevice extends ISmartDevice {
    toggle(): void;
    isToggled(): boolean;
}
