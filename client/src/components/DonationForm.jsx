import React, { useState } from 'react'

export default function DonationForm({ onSubmit }) {
  const [amount, setAmount] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setErr('')
    if (!amount || !description) {
      setErr('Amount and description are required')
      return
    }
    try {
      setBusy(true)
      await onSubmit({ amount: Number(amount), description, name })
      setAmount('')
      setName('')
      setDescription('')
    } catch (e) {
      setErr(e.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="label">Name (optional)</label>
        <input className="input w-full" value={name} onChange={e => setName(e.target.value)} placeholder="Anonymous Panda" />
      </div>
      <div>
        <label className="label">Amount</label>
        <input type="number" min="1" className="input w-full" value={amount} onChange={e => setAmount(e.target.value)} placeholder="500" />
      </div>
      <div>
        <label className="label">Description</label>
        <input className="input w-full" value={description} onChange={e => setDescription(e.target.value)} placeholder="For the flood relief drive" />
      </div>
      {err && <p className="text-red-600 text-sm">{err}</p>}
      <button className="btn btn-primary" disabled={busy}>{busy ? 'Sending...' : 'Donate'}</button>
    </form>
  )
}