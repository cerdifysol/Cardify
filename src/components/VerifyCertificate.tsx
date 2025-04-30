import  { useState } from 'react'

import CertificateCard from './CertificateCard'
import type { FetchedCertificateMetadata } from '../types'
import { verifyCertificate } from '../utilits/nft'

export default function VerifyCertificate() {
  const [mint, setMint] = useState('')
  const [metadata, setMetadata] = useState<FetchedCertificateMetadata | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleVerify = async () => {
    setError(null)
    setMetadata(null)
    try {
      const data = await verifyCertificate(mint)
      setMetadata(data)
    } catch (e) {
      console.error(e)
      setError('Verification failed. Check mint address.')
    }
  }

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Enter mint address"
        className="border p-2 rounded w-full"
        value={mint}
        onChange={(e) => setMint(e.target.value)}
      />
      <button onClick={handleVerify} className="btn-accent w-full">
        Verify Certificate
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {metadata && <CertificateCard metadata={metadata} />}
    </div>
  )
}
