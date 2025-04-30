import { Metaplex, walletAdapterIdentity } from '@metaplex-foundation/js'
import type { WalletAdapter } from '@solana/wallet-adapter-base'
import { PublicKey } from '@solana/web3.js'
import { connection } from './connection'
import type { MintMetadata, NFT, FetchedCertificateMetadata } from '../types'

export async function mintCertificate(
  wallet: WalletAdapter,
  metadata: MintMetadata
): Promise<NFT> {
  const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet))
  const { nft } = await metaplex.nfts().create({
    uri: metadata.uri,
    name: metadata.name,
    symbol: metadata.symbol,
    sellerFeeBasisPoints: 0,
    maxSupply: 1,
  })
  return { address: nft.address.toBase58(), metadata }
}

export async function verifyCertificate(
  mintAddress: string
): Promise<FetchedCertificateMetadata> {
  const metaplex = Metaplex.make(connection)
  const mintPubKey = new PublicKey(mintAddress)
  // повертає NFT object
  const nftObject = await metaplex.nfts().findByMint({ mintAddress: mintPubKey })
  // nftObject.json має тип unknown, тому явно вказуємо
  return nftObject.json as FetchedCertificateMetadata
}
