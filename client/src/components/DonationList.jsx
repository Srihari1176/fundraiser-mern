import React from 'react'

export default function DonationList({ items }) {
  if (!items?.length) return <p className="text-slate-500">No donations yet. Be the first.</p>
  return (
    <ul className="space-y-3">
      {items.map(d => (
        <li key={d._id} className="flex items-center justify-between border border-slate-200 rounded-xl px-4 py-3">
          <div className="flex flex-col">
            <span className="font-semibold">₹{Number(d.amount).toLocaleString()}</span>
            <span className="text-slate-600 text-sm">{d.description}</span>
            {d.name ? <span className="text-slate-400 text-xs mt-0.5">by {d.name}</span> : null}
          </div>
          <span className="text-slate-400 text-xs">{new Date(d.createdAt).toLocaleString()}</span>
        </li>
      ))}
    </ul>
  )
}