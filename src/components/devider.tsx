import React from 'react'

export default function Devider({ text }: { text: string }) {
  return (
    <div className="aling-center mb-10 mt-10 flex items-center">
      <div className="h-8 w-2 bg-brand" />
      <span className="ml-1 text-lg font-semibold text-brand">{text}</span>
    </div>
  )
}
