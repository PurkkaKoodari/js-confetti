interface I2DCoordinates {
    x: number;
    y: number;
}
type IPosition = I2DCoordinates;
type IRadius = I2DCoordinates;
type ISpeed = I2DCoordinates;
interface IJSConfettiConfig {
    canvas?: HTMLCanvasElement;
}
interface IAddConfettiConfig {
    confettiRadius?: number;
    confettiNumber?: number;
    confettiColors?: string[];
    emojis?: string[];
    emojiSize?: number;
    confettiDispatchPosition?: IPosition | null;
    initialVelocityMin?: number;
    initialVelocityMax?: number;
    emojies?: string[];
    confettiesNumber?: number;
}
type INormalizedAddConfettiConfig = {
    confettiRadius: number;
    confettiNumber: number;
    confettiColors: string[];
    emojis: string[];
    emojiSize: number;
    confettiDispatchPosition?: IPosition | null;
    initialVelocityMin: number;
    initialVelocityMax: number;
};
export { IPosition, IRadius, ISpeed, IJSConfettiConfig, IAddConfettiConfig, INormalizedAddConfettiConfig, };
