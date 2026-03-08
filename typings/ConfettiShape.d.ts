import { INormalizedAddConfettiConfig, IPosition } from './types';
interface TConstructorArgs extends Omit<INormalizedAddConfettiConfig, 'confettiDispatchPosition'> {
    initialPosition: IPosition;
    initialFlightAngle: number;
    rotationAngle: number;
    canvasWidth: number;
    shouldHideConfettiInShiftedPosition?: boolean;
}
declare class ConfettiShape {
    private confettiSpeed;
    private rotationSpeed;
    private dragForceCoefficient;
    private finalConfettiSpeedX;
    private radius;
    private readonly initialRadius;
    private readonly rotationAngle;
    private emojiSize;
    private emojiRotationAngle;
    private readonly cos;
    private readonly sin;
    private initialPosition;
    private currentPosition;
    private readonly color;
    private readonly emoji;
    private radiusYUpdateDirection;
    private readonly createdAt;
    private isVisible;
    private positionOffset;
    private distanceTravelled;
    constructor(args: TConstructorArgs);
    draw(canvasContext: CanvasRenderingContext2D): void;
    updatePosition(iterationTimeDelta: number, currentTime: number): void;
    getIsVisibleOnCanvas(canvasHeight: number): boolean;
}
export { ConfettiShape };
