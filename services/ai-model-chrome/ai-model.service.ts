import { IAIModelInterface } from "./ai-model.interface";

export class AIModelService implements IAIModelInterface {
    private session!: any
    public onDownloadProgress?: (percent: number) => void;

    constructor() {}

    async initializeSession(): Promise<void> {
        //realiza o download do modelo caso o mesmo ainda nao tenha sido baixado
        const self = this;
        this.session = await (window as any).LanguageModel.create({
            monitor(m: any) {
                m.addEventListener('downloadprogress', (e: any) => {
                    const percent = (e.loaded / e.total) * 100;
                    if (self.onDownloadProgress) {
                        (e.loaded == 1) ? self.onDownloadProgress(100) : self.onDownloadProgress(percent)
                    }
                    console.log(`Downloaded ${percent.toFixed(2)}%`);
                });
            },
        });
    }

    async sendMessage(message: string): Promise<string> {
        const availability = await (window as any).LanguageModel.availability({
            languages: ['pt', 'en']
        });
        if (availability == 'available') {
            console.log('Language model is available');

            const initialPrompts = [
                {
                    role: 'system',
                    content: `Voce e um assistente de IA que responde de forma objetiva.
                            Busque responder com no maximo 50 palavras.         
                    `
                }
            ]

            const question = message

            this.session = await (window as any).LanguageModel.create({
                expectedInputLanguages: ["pt"],
                temperature: 1,
                topK: 3,
                initialPrompts,
            });

            const response = await this.session.prompt([
                {
                    role: 'user',
                    content: question
                }
            ])
            return response;
        } else
            return `Language model is not available.`;
    }
}