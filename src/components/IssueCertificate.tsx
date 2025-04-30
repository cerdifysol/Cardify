import  { useState } from 'react'
import { useWallet, useConnection } from '@solana/wallet-adapter-react'
import { CertificateMetadata } from '../types'
import { mintCertificate } from '../utilits/nft'

export default function IssueCertificate() {
  const { wallet, publicKey } = useWallet()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { connection } = useConnection()
  const [loading, setLoading] = useState(false)

  // Приклад metadata; замінити uri на свій
  const metadata: CertificateMetadata = {
    name: 'Certified Web3 Developer',
    symbol: 'CERT',
    uri: 'https://arweave.net/REPLACE_WITH_YOUR_JSON_HASH'
  }

  const handleIssue = async () => {
    if (!wallet || !publicKey) return alert('Connect your wallet first')
    setLoading(true)
    try {
      const nft = await mintCertificate(wallet.adapter, metadata)
      alert(`NFT Minted: ${nft.address}`)
    } catch (err) {
      console.error(err)
      alert('Mint failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleIssue}
      disabled={loading}
      className="btn-accent w-full"
    >
      {loading ? 'Minting…' : 'Issue Certificate'}
    </button>
  )
}
