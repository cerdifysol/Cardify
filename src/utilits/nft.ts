import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";
import type { WalletAdapter } from "@solana/wallet-adapter-base";
import { PublicKey } from "@solana/web3.js";
import { connection } from "./connection";
import type { MintMetadata, NFT, FetchedCertificateMetadata } from "../types";

const ISSUER_TAG = "MyCertApp"; // Унікальна мітка вашого додатку

// Створення сертифікату
export async function mintCertificate(wallet: WalletAdapter, metadata: MintMetadata): Promise<NFT> {
  const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet));

  const { nft } = await metaplex.nfts().create({
    uri: metadata.uri, // URL на JSON з метаданими
    name: metadata.name,
    symbol: metadata.symbol,
    sellerFeeBasisPoints: 0,
    maxSupply: 1,
  });

  return {
    address: nft.address.toBase58(),
    metadata,
  };
}

// Верифікація сертифікату
export async function verifyCertificate(mintAddress: string): Promise<FetchedCertificateMetadata> {
  const metaplex = Metaplex.make(connection);
  const mintPubKey = new PublicKey(mintAddress);

  const nftObject = await metaplex.nfts().findByMint({ mintAddress: mintPubKey });

  let metadata = nftObject.json;

  // Якщо метадані ще не були витягнуті
  if (!metadata) {
    const response = await fetch(nftObject.uri);
    metadata = await response.json();
  }

  // Замінюємо IPFS URI на HTTP посилання
  if (metadata.image?.startsWith("ipfs://")) {
    metadata.image = metadata.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/");
  }

  // 🔐 Перевірка, чи це справжній сертифікат нашої системи
  const isValidCertificate = metadata.attributes && Array.isArray(metadata.attributes) && metadata.attributes.some((attr: any) => attr.trait_type === "issuer" && attr.value === ISSUER_TAG);

  if (!isValidCertificate) {
    throw new Error("Цей NFT не є дійсним сертифікатом, виданим нашою системою.");
  }

  return metadata as FetchedCertificateMetadata;
}
