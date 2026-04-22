"use client"


type Props = {
    percent: number
}

export default function ProgressBar({ percent }: Props) {
    return (
        <div className="w-full mb-4">
            <div className="flex items-center justify-between mb-2 text-sm text-slate-300">
                <span>% Download Model</span>
                <span>{percent.toFixed(2)}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded h-3 overflow-hidden">
                <div className="h-full bg-cyan-400 transition-all" style={{ width: `${percent}%` }} />
            </div>
        </div>
    )
}
