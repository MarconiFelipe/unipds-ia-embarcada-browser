
export interface IAIModelInterface {
    initializeSession(): Promise<void>;
    sendMessage(message: string): Promise<string>;
}