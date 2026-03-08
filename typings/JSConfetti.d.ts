import { IJSConfettiConfig, IAddConfettiConfig } from './types';
declare class JSConfetti {
    private readonly canvas;
    private readonly canvasContext;
    private activeConfettiBatches;
    private lastUpdated;
    private iterationIndex;
    private requestAnimationFrameRequested;
    constructor(jsConfettiConfig?: IJSConfettiConfig);
    private loop;
    private queueAnimationFrameIfNeeded;
    addConfettiAtPosition(confettiConfig?: IAddConfettiConfig): Promise<void>;
    addConfetti(confettiConfig?: IAddConfettiConfig): Promise<void>;
    clearCanvas(): void;
    destroyCanvas(): void;
}
export { JSConfetti };
