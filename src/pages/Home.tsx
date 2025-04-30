
import ConnectWallet from '../components/ConnectWallet'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container space-y-6">
      <h1 className="text-3xl font-semibold">Cerdify</h1>
      <ConnectWallet />
      <div className="flex gap-4">
        <Link to="/issue" className="link">Issue Certificate</Link>
        <Link to="/verify" className="link">Verify Certificate</Link>
      </div>
    </div>
  )
}
