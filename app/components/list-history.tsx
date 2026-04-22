"use client"

import TypewriterEffect from "./typewriter-effect";



type Item = { id: number; question: string; answer?: string }

type Props = {
  history: Item[]
  onClear?: () => void
}

export default function ListHistory({ history, onClear }: Props) {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-slate-200">History of interactions</h2>
        {history.length > 0 && (
          <button
            type="button"
            onClick={() => onClear && onClear()}
            className="text-sm bg-red-600/90 hover:bg-red-500/90 text-white px-3 py-1 rounded-md shadow-sm"
          >
            Clear History
          </button>
        )}
      </div>
      <div className="space-y-3 max-h-130 overflow-auto">
        {history.length === 0 ? (
          <p className="text-sm text-slate-400">No Interaction yet</p>
        ) : (
          history.map(item => (
            <div key={item.id} className="p-4 bg-gradient-to-r from-slate-800/80 to-slate-900/80 rounded-xl shadow-lg border border-slate-700">
              <div className="text-sm font-medium text-cyan-200">Question</div>
              <div className="text-sm text-slate-200 mb-2">{item.question}</div>
              <div className="text-sm font-medium text-cyan-200">Answer</div>
              <div className={`text-sm ${item.answer === "Awaiting response..." ? "italic text-amber-300" : "text-slate-200"}`}>
                {item.answer !== "Awaiting response..." ? <TypewriterEffect text={item.answer} /> : item.answer}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}
