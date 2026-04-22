"use client"

import React from "react"

type Props = {
  question: string
  setQuestion: (s: string) => void
  onSend: (e: React.FormEvent) => void
}

export default function FormQuestion({ question, setQuestion, onSend }: Props) {
  return (
    <form onSubmit={onSend} className="mb-6">
      <label className="block text-sm font-medium text-slate-300 mb-2">Question</label>
      <textarea
        value={question}
        onChange={e => setQuestion(e.target.value)}
        rows={4}
        placeholder="Type your question..."
        className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none text-slate-100 placeholder-slate-400 shadow-lg"
      />
      <div className="flex justify-end mt-3">
        {question.trim() !== "" && (
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-lg hover:from-cyan-400 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 shadow-md"
          >
            Send Question
          </button>
        )}
      </div>
    </form>
  )
}
