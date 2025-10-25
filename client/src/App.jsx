import React, { useEffect, useMemo, useState } from 'react'
import DonationForm from './components/DonationForm.jsx'
import DonationList from './components/DonationList.jsx'

const API = import.meta.env.VITE_API_URL || ''

export default function App() {
  const [donations, setDonations] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const total = useMemo(() => donations.reduce((s, d) => s + (Number(d.amount) || 0), 0), [donations])

  async function fetchDonations() {
    try {
      setLoading(true)
      setError('')
      const res = await fetch(`${API}/api/donations`)
      if (!res.ok) throw new Error('Failed to fetch donations')
      const data = await res.json()
      setDonations(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  async function addDonation(payload) {
    const res = await fetch(`${API}/api/donations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (!res.ok) throw new Error('Failed to save donation')
    const saved = await res.json()
    setDonations((prev) => [saved, ...prev])
  }

  useEffect(() => { fetchDonations() }, [])

  return (
    <div className="container py-10">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="h1">Fundraiser</h1>
          <p className="text-slate-600">A tiny crowdfunding demo. No payment gateway, just vibes.</p>
        </div>
        <div className="badge">Total raised <span className="font-semibold">₹{total.toLocaleString()}</span></div>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="h2 mb-4">Make a donation</h2>
          <DonationForm onSubmit={addDonation} />
          {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}
        </div>
        <div className="card">
          <h2 className="h2 mb-4">Recent donations</h2>
          {loading ? <p>Loading...</p> : <DonationList items={donations} />}
        </div>
      </div>

      <footer className="mt-8 text-center text-slate-500 text-sm">
        Built with React, Tailwind, Express, Mongoose.
      </footer>
    </div>
  )
}