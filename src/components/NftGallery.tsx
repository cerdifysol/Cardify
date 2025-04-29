import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection } from "@solana/web3.js";
import { Metaplex } from "@metaplex-foundation/js";
import { NFT } from "../types/NFT";

const NFTGallery = () => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const { publicKey } = useWallet();

  useEffect(() => {
    if (!publicKey) return;

    const fetchNFTs = async () => {
      const connection = new Connection("https://api.mainnet-beta.solana.com");
      const metaplex = new Metaplex(connection);

      const metaplexNFTs = await metaplex.nfts().findAllByOwner({ owner: publicKey });

      // Ось наш nftList:
      const nftList: NFT[] = metaplexNFTs.map((nft) => {
        // Додаємо перевірку наявності mintAddress або mint
        const mint = nft.mintAddress ? nft.mintAddress.toBase58() : nft.mint?.toBase58();

        return {
          mint: mint || "Unknown", // Якщо mint не знайдений, поставимо "Unknown"
          name: nft.name || "Unnamed NFT",
          uri: nft.uri || "",
          image: nft.json?.image || "",
          description: nft.json?.description || "",
        };
      });

      // ✅ І тепер він передається у setNfts:
      setNfts(nftList);
    };

    fetchNFTs();
  }, [publicKey]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {nfts.map((nft) => (
        <div key={nft.mint} className="border p-4 rounded shadow">
          <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover mb-2" />
          <h3 className="text-lg font-semibold">{nft.name}</h3>
          <p className="text-sm">{nft.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NFTGallery;
