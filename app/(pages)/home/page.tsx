"use client"

import ListHistory from "@/app/components/list-history"
import { AIModelService } from "@/services/ai-model-chrome/ai-model.service"
import { useEffect, useRef, useState } from "react"
import FormQuestion from "../../components/form-question"
import ProgressBar from "../../components/progress-bar"

export default function Home() {
    const [question, setQuestion] = useState("")
    const [downloadPercent, setDownloadPercent] = useState<number>(0)
    const [history, setHistory] = useState<Array<{ id: number; question: string; answer?: string }>>([])
    //cria a referencia para o servico de AI
    const aimodelRef = useRef<AIModelService | null>(null)
    useEffect(() => {
        console.log('Inicializando sessão do modelo de AI...')
        aimodelRef.current = new AIModelService()
        //monta um callback para acompanhar o progresso do download do modelo
        aimodelRef.current.onDownloadProgress = (p: number) => {
            if (p >= 100) {
                setDownloadPercent(100)
                // setTimeout(() => setDownloadPercent(100), 800)
            } else {
                setDownloadPercent(p)
            }
        }
        aimodelRef.current.initializeSession().then(() => {
            console.log('Sessão do modelo de AI inicializada com sucesso.')
            const id = Date.now()
            setHistory(prev => [{ id, question: `Model initialization OK?`, answer: "Yes, initialized successfully. Let`s interact!" }, ...prev])
        }).catch((err) => {
            console.log('Falha ao inicializar sessão do modelo de AI.')
            const id = Date.now()
            setHistory(prev => [{ id, question: `Model initialization OK?`, answer: "No, failed to initialize." }, ...prev])
        })
    }, [])

    //função para enviar a pergunta para o modelo de AI
    async function sendMessageAI(e: React.FormEvent) {
        e.preventDefault()
        const q = question.trim()
        if (!q) return
        const id = Date.now()
        setHistory(prev => [{ id, question: q, answer: "Awaiting response..." }, ...prev])
        setQuestion("")
        const answer = await aimodelRef.current?.sendMessage(q)
            ?? 'AI Service unavailable.'
        setHistory(prev => prev.map(item => (item.id === id ? { ...item, answer } : item)))
    }

    //limpa o historico de interações
    function historyClear() {
        setHistory([])
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#071027] via-[#041227] to-[#00101a] p-8 text-slate-100">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-4xl font-extrabold text-cyan-300 mb-6 tracking-tight">AI Model Browser Integrate - (Offline)</h1>

                {downloadPercent !== 100 && <ProgressBar percent={downloadPercent} />}

                <FormQuestion question={question} setQuestion={setQuestion} onSend={sendMessageAI} />


                <ListHistory history={history} onClear={historyClear} />
            </div>
        </main>
    )
}